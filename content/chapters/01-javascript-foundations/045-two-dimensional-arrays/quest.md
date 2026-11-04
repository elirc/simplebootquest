---
slug: "js-2d-arrays"
title: "Grids: Tic-Tac-Toe Winner"
type: "code"
language: "js"
xp: 20
hints: ["List all 8 winning lines as data, then loop over them.", "Check `v &&` first, so three empty cells (`null`) do not count as a win."]
---
# Grids: Tic-Tac-Toe Winner

Game boards, spreadsheets, seating plans and image pixels are all **2D arrays**: arrays of rows.

```js
const board = [
  ['X', 'O', 'X'],
  [null, 'X', 'O'],
  ['O', null, 'X'],
];
board[1][2];   // 'O'  → row 1, column 2
```

A neat trick for checking lines: list every winning line as coordinates, then check each one. Data beats a pile of `if`s.

```js
const LINES = [
  [[0, 0], [0, 1], [0, 2]],  // first row
  // ...
];
```

## Your task

1. `winner(board)` returns `"X"` or `"O"` if a player has three in a row (a row, column or diagonal), otherwise `null`.
2. `isFull(board)` returns `true` if no cell is `null`.
3. `status(board)` returns `"X wins"`, `"O wins"`, `"draw"` (full with no winner), or `"in progress"`.
