---
slug: "js-nested-loops"
title: "Nested Loops & Grids"
type: "code"
language: "js"
xp: 20
hints: ["Start the inner loop at `j = i + 1` so you never pair an element with itself.", "In `transpose`, the outer loop goes over columns of the original."]
---
# Nested Loops & Grids

A loop inside a loop visits every **pair** of things: every row and column of a grid, or every combination of two lists.

```js
const grid = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    console.log(row, col, grid[row][col]);
  }
}
```

Nested loops multiply the work: 1,000 × 1,000 = a million iterations. That's fine for small grids, but it's the first thing to check when code gets slow.

## Your task

1. `multiplicationTable(n)` returns an `n × n` grid where cell `[i][j]` is `(i + 1) * (j + 1)`.
2. `transpose(matrix)` flips rows and columns (`[[1, 2, 3], [4, 5, 6]]` → `[[1, 4], [2, 5], [3, 6]]`).
3. `hasPairWithSum(numbers, target)` returns `true` if any **two different elements** add up to `target`.
