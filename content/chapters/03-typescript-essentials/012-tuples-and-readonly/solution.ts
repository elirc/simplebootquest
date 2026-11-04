type Point = [x: number, y: number];

export function distance([x1, y1]: Point, [x2, y2]: Point): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function minMax(nums: readonly number[]): [min: number, max: number] {
  if (nums.length === 0) throw new Error('Cannot take minMax of an empty array');
  let min = nums[0]!;
  let max = nums[0]!;
  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return [min, max];
}

export function useCounter(initial: number): [get: () => number, increment: () => void] {
  let count = initial;
  return [() => count, () => { count++; }];
}
