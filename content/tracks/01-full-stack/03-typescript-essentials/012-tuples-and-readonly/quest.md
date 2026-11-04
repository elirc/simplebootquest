---
slug: "ts-tuples-readonly"
title: "Tuples & readonly"
type: "code"
language: "ts"
xp: 15
hints: ["`Math.hypot(dx, dy)` computes the distance.", "Destructure tuples straight in the parameter list."]
---
# Tuples & readonly

A **tuple** is a fixed-length array where each position has its own type:

```ts
type Point = [x: number, y: number];       // labelled tuple elements
type Entry = [key: string, value: number];
const [x, y]: Point = [3, 4];
```

React's `useState` returns a tuple: `[value, setValue]`.

`readonly` prevents mutation **at compile time**:

```ts
function sum(nums: readonly number[]) {
  nums.push(1);   // ❌ Property 'push' does not exist on type 'readonly number[]'
}
interface Config { readonly apiUrl: string }
```

Marking inputs `readonly` documents that your function doesn't change them, and the compiler holds you to it.

## Your task

1. `distance(a: Point, b: Point)` returns the Euclidean distance between two points.
2. `minMax(nums: readonly number[]): [min: number, max: number]` returns both in one pass. Throw an `Error` for an empty array.
3. `useCounter(initial)` mimics React's API and returns `[get, increment]`, where `get()` returns the current count.
