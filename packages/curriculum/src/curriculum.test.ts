import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { ContentError, gradeQuiz, loadCurriculum } from './index.js';

function fixture(files: Record<string, string>): string {
  const root = mkdtempSync(path.join(tmpdir(), 'sbq-content-'));
  for (const [file, content] of Object.entries(files)) {
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
    expect(c.chapters.length).toBeGreaterThan(0);
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
