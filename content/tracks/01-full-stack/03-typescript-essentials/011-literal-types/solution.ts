export const PRIORITIES = ['low', 'medium', 'high'] as const;
export type Priority = (typeof PRIORITIES)[number];

export function isPriority(value: unknown): value is Priority {
  return typeof value === 'string' && (PRIORITIES as readonly string[]).includes(value);
}

export function nextPriority(p: Priority): Priority {
  return PRIORITIES[(PRIORITIES.indexOf(p) + 1) % PRIORITIES.length]!;
}

const WEIGHTS: Record<Priority, number> = { low: 1, medium: 2, high: 3 };
export function priorityWeight(p: Priority): number {
  return WEIGHTS[p];
}
