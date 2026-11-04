export const PRIORITIES = ['low', 'medium', 'high'];

export function isPriority(value: unknown): boolean {
  return false;
}

export function nextPriority(p: string): string {
  return p;
}

export function priorityWeight(p: string): number {
  return 0;
}
