---
slug: "debug-songs-top-n"
title: "Debug: Top songs by play count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top songs by play count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of the `n` songs with the **highest** `plays`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Gravity", seconds: 158, plays: 6738, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Neon", seconds: 365, plays: 1122, artist: "Nova", mood: "dark"},
  {id: 3, title: "Echoes", seconds: 237, plays: 7077, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Static", seconds: 189, plays: 332, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 222, plays: 2247, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Paper Planes", seconds: 322, plays: 4052, artist: "Nova", mood: "calm"},
  {id: 7, title: "Tides", seconds: 180, plays: 518, artist: "Nova", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 295, plays: 5892, artist: "Nova", mood: "dark"}
]
```
