---
slug: "debug-songs-sum"
title: "Debug: Total length in seconds of all songs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total length in seconds of all songs

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `seconds` across all songs. An empty list totals 0.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Riverside", seconds: 339, plays: 2657, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Drift", seconds: 278, plays: 5438, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Velvet", seconds: 263, plays: 9375, artist: "Nova", mood: "happy"},
  {id: 4, title: "Tides", seconds: 143, plays: 7071, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Static", seconds: 128, plays: 367, artist: "Nova", mood: "calm"},
  {id: 6, title: "Paper Planes", seconds: 176, plays: 4058, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Echoes", seconds: 335, plays: 6539, artist: "Nova", mood: "happy"},
  {id: 8, title: "Halo", seconds: 247, plays: 5957, artist: "Nova", mood: "calm"}
]
```
