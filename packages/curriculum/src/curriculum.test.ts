import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { ContentError, countWords, gradeQuiz, loadCurriculum } from './index.js';

const trackMd = '---\ntitle: Main\ndescription: The main track\n---\n';

/** Writes files under a single track ("01-main/") unless a path already names a track. */
function fixture(files: Record<string, string>, { wrap = true } = {}): string {
  const root = mkdtempSync(path.join(tmpdir(), 'sbq-content-'));
  const all: Record<string, string> = wrap
    ? Object.fromEntries([['01-main/track.md', trackMd], ...Object.entries(files).map(([f, c]) => [`01-main/${f}`, c])])
    : files;
  for (const [file, content] of Object.entries(all)) {
    const full = path.join(root, file);
    mkdirSync(path.dirname(full), { recursive: true });
    writeFileSync(full, content);
  }
  return root;
}

const chapter = '---\ntitle: Basics\ndescription: The basics\n---\nIntro text';
const quiz = `---
slug: basics-quiz
title: Quiz
type: quiz
xp: 10
questions:
  - prompt: "2 + 2?"
    options: ["3", "4"]
    answer: 1
---
Lesson`;

describe('loadCurriculum', () => {
  it('loads the real curriculum', () => {
    const c = loadCurriculum();
    expect(c.tracks.length).toBeGreaterThan(0);
    expect(c.chapters.length).toBe(c.tracks.flatMap((t) => t.chapters).length);
    expect(c.quests.every((q, i) => q.index === i)).toBe(true);
    expect(c.bySlug.size).toBe(c.quests.length);
  });

  it('orders chapters and quests by their numeric prefix', () => {
    const root = fixture({
      '02-second/chapter.md': chapter,
      '02-second/01-q/quest.md': quiz.replace('basics-quiz', 'second-quiz'),
      '01-first/chapter.md': chapter,
      '01-first/02-b/quest.md': quiz.replace('basics-quiz', 'b-quiz'),
      '01-first/01-a/quest.md': quiz.replace('basics-quiz', 'a-quiz'),
    });
    const c = loadCurriculum(root);
    expect(c.chapters.map((ch) => ch.slug)).toEqual(['first', 'second']);
    expect(c.quests.map((q) => q.slug)).toEqual(['a-quiz', 'b-quiz', 'second-quiz']);
    expect(c.chapters[0]!.intro).toBe('Intro text');
  });

  it('rejects duplicate slugs', () => {
    const root = fixture({ '01-a/chapter.md': chapter, '01-a/01-x/quest.md': quiz, '01-a/02-y/quest.md': quiz });
    expect(() => loadCurriculum(root)).toThrow(/duplicate quest slug "basics-quiz"/);
  });

  it('reports invalid frontmatter with the file path', () => {
    const root = fixture({ '01-a/chapter.md': chapter, '01-a/01-x/quest.md': quiz.replace('type: quiz', 'type: qiuz') });
    expect(() => loadCurriculum(root)).toThrow(ContentError);
    expect(() => loadCurriculum(root)).toThrow(/quest\.md: type/);
  });

  it('requires tests and a solution for code quests', () => {
    const code = '---\nslug: c\ntitle: C\ntype: code\nlanguage: js\nxp: 5\n---\nLesson';
    const root = fixture({ '01-a/chapter.md': chapter, '01-a/01-x/quest.md': code, '01-a/01-x/starter.js': '' });
    expect(() => loadCurriculum(root)).toThrow(/need a tests file/);
  });

  it('rejects badly named directories', () => {
    const root = fixture({ 'basics/chapter.md': chapter });
    expect(() => loadCurriculum(root)).toThrow(/must be named like/);
  });

  it('loads several tracks and rejects chapter slugs reused across them', () => {
    const two = {
      '01-a/track.md': trackMd,
      '01-a/01-basics/chapter.md': chapter,
      '01-a/01-basics/01-q/quest.md': quiz,
      '02-b/track.md': trackMd.replace('Main', 'Second'),
      '02-b/01-more/chapter.md': chapter,
      '02-b/01-more/01-q/quest.md': quiz.replace('basics-quiz', 'more-quiz'),
    };
    const c = loadCurriculum(fixture(two, { wrap: false }));
    expect(c.tracks.map((t) => [t.slug, t.title])).toEqual([['a', 'Main'], ['b', 'Second']]);
    expect(c.quests.map((q) => q.trackSlug)).toEqual(['a', 'b']);
    const clash = { ...two, '02-b/01-basics/chapter.md': chapter, '02-b/01-basics/01-q/quest.md': quiz.replace('basics-quiz', 'x-quiz') };
    delete (clash as Record<string, string>)['02-b/01-more/chapter.md'];
    delete (clash as Record<string, string>)['02-b/01-more/01-q/quest.md'];
    expect(() => loadCurriculum(fixture(clash, { wrap: false }))).toThrow(/duplicate chapter slug "basics"/);
  });

  it('loads design write-ups with rubric, template and reference', () => {
    const design = '---\nslug: d\ntitle: D\ntype: design\nxp: 30\nminWords: 200\nrubric: ["Has requirements", "Has a diagram"]\n---\nScenario';
    const root = fixture({
      '01-a/chapter.md': chapter,
      '01-a/01-x/quest.md': design,
      '01-a/01-x/template.md': '# Design\n',
      '01-a/01-x/reference.md': '# Reference\n',
    });
    const q = loadCurriculum(root).quests[0]!;
    expect(q).toMatchObject({ type: 'design', rubric: ['Has requirements', 'Has a diagram'], minWords: 200, template: '# Design\n', reference: '# Reference\n' });
  });

  it('requires a reference for design write-ups', () => {
    const design = '---\nslug: d\ntitle: D\ntype: design\nxp: 30\nrubric: ["x"]\n---\n';
    expect(() => loadCurriculum(fixture({ '01-a/chapter.md': chapter, '01-a/01-x/quest.md': design }))).toThrow(/reference\.md/);
  });
});

describe('write-tests quests', () => {
  const q = '---\nslug: wt\ntitle: WT\ntype: code\nlanguage: js\nmode: write-tests\nxp: 20\n---\nWrite tests';
  it('loads the subject and named mutants in order', () => {
    const root = fixture({
      '01-a/chapter.md': chapter,
      '01-a/01-x/quest.md': q,
      '01-a/01-x/subject.js': 'function f() {}',
      '01-a/01-x/solution.js': "test('t', () => {});",
      '01-a/01-x/mutant-2.js': '// mutant: second bug\nfunction f() {}',
      '01-a/01-x/mutant-1.js': '// mutant: first bug\nfunction f() {}',
    });
    const quest = loadCurriculum(root).quests[0]!;
    expect(quest.mode).toBe('write-tests');
    expect(quest.mutants!.map((m) => m.name)).toEqual(['first bug', 'second bug']);
  });

  it('requires mutants to name their bug', () => {
    const root = fixture({
      '01-a/chapter.md': chapter,
      '01-a/01-x/quest.md': q,
      '01-a/01-x/subject.js': 'x',
      '01-a/01-x/solution.js': 'x',
      '01-a/01-x/mutant-1.js': 'function f() {}',
    });
    expect(() => loadCurriculum(root)).toThrow(/mutant: <description>/);
  });
});

describe('countWords', () => {
  it('ignores markdown punctuation', () => {
    expect(countWords('# Title\n\n- one two\n- **three** (four) — five\n')).toBe(6);
    expect(countWords("it's a user's API-first design")).toBe(5);
    expect(countWords('   ')).toBe(0);
  });
});

describe('gradeQuiz', () => {
  it('marks each answer', () => {
    const root = fixture({ '01-a/chapter.md': chapter, '01-a/01-x/quest.md': quiz });
    const quest = loadCurriculum(root).quests[0]!;
    expect(gradeQuiz(quest, [1])).toEqual([true]);
    expect(gradeQuiz(quest, [0])).toEqual([false]);
    expect(gradeQuiz(quest, [])).toEqual([false]);
  });
});
