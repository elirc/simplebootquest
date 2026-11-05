import { describe, expect, it } from 'vitest';
import type { QuestSummary } from '@sbq/shared';
import { explainError } from './TestResults';
import { groupBySection } from '../pages/Chapter';

const q = (slug: string, extra: Partial<QuestSummary> = {}): QuestSummary => ({
  slug, trackSlug: 't', chapterSlug: 'c', title: slug, type: 'code', xp: 10, boss: false, optional: false, status: 'not_started', ...extra,
});

describe('groupBySection', () => {
  it('puts core first, then sections in order of appearance', () => {
    const groups = groupBySection([q('a'), q('p1', { optional: true, section: 'Practice: Arrays' }), q('b'), q('p2', { optional: true }), q('p3', { optional: true, section: 'Practice: Arrays' })]);
    expect(groups.map((g) => [g.name, g.quests.map((x) => x.slug)])).toEqual([
      ['Core', ['a', 'b']],
      ['Practice: Arrays', ['p1', 'p3']],
      ['Practice', ['p2']],
    ]);
  });
  it('omits an empty core group', () => {
    expect(groupBySection([q('x', { optional: true, section: 'Extra' })]).map((g) => g.name)).toEqual(['Extra']);
  });
});

describe('explainError', () => {
  it('explains common beginner errors', () => {
    expect(explainError('ReferenceError: totl is not defined')).toContain('spelling');
    expect(explainError('Expected undefined to be 3')).toContain('return');
    expect(explainError('TypeError: Cannot read properties of undefined (reading "map")')).toContain('undefined or null');
    expect(explainError('Expected 2 to be 3')).toBeNull();
  });
});
