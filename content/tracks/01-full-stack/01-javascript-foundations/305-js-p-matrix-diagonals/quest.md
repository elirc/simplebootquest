---
slug: "js-p-matrix-diagonals"
title: "Practice: Matrix Diagonals"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["The new cell `[r][c]` comes from `m[n - 1 - c][r]`."]
---
## Your task
For a square matrix (an array of equal-length rows):

1. `diagonalSums(m)` returns `{ main, anti }`: the sums of the main diagonal (top-left → bottom-right) and the anti-diagonal (top-right → bottom-left).
2. `rotateClockwise(m)` returns a new matrix rotated 90° clockwise.
