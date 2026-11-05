---
slug: "debug-songs-chain"
title: "Debug: Filter, sort, map: songs in one mood"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: songs in one mood

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of songs whose `mood` equals `value`, sorted by `plays` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Lanterns", seconds: 304, plays: 3348, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Drift", seconds: 313, plays: 3402, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Paper Planes", seconds: 184, plays: 7944, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Neon", seconds: 183, plays: 8218, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 287, plays: 1293, artist: "Nova", mood: "calm"},
  {id: 6, title: "Echoes", seconds: 319, plays: 7108, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Tides", seconds: 277, plays: 5817, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Velvet", seconds: 264, plays: 1212, artist: "The Pines", mood: "dark"}
]
```
