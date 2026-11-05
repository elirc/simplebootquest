---
slug: "debug-songs-every-some"
title: "Debug: Are all songs under a play count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all songs under a play count limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** song has `plays` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Static", seconds: 122, plays: 5431, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Lanterns", seconds: 264, plays: 2299, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Halo", seconds: 417, plays: 8868, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Riverside", seconds: 254, plays: 7985, artist: "Kairo", mood: "happy"},
  {id: 5, title: "Sunrise", seconds: 310, plays: 2325, artist: "Nova", mood: "calm"},
  {id: 6, title: "Paper Planes", seconds: 362, plays: 2961, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 192, plays: 5065, artist: "Nova", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 250, plays: 4014, artist: "The Pines", mood: "dark"}
]
```
