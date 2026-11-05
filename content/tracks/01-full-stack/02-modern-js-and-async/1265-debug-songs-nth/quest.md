---
slug: "debug-songs-nth"
title: "Debug: The n-th song by play count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th song by play count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the title of the song ranked `n` (1 = highest `plays`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Sunrise", seconds: 279, plays: 1721, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Static", seconds: 290, plays: 1429, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Riverside", seconds: 362, plays: 1172, artist: "Nova", mood: "happy"},
  {id: 4, title: "Drift", seconds: 127, plays: 8297, artist: "Kairo", mood: "happy"},
  {id: 5, title: "Paper Planes", seconds: 150, plays: 4944, artist: "The Pines", mood: "dark"},
  {id: 6, title: "Lanterns", seconds: 142, plays: 6429, artist: "Nova", mood: "happy"},
  {id: 7, title: "Neon", seconds: 261, plays: 2719, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 226, plays: 9083, artist: "Kairo", mood: "dark"}
]
```
