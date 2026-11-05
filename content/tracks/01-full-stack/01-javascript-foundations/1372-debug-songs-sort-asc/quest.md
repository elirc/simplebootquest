---
slug: "debug-songs-sort-asc"
title: "Debug: Sort songs by length in seconds"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort songs by length in seconds

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles sorted by `seconds` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 285, plays: 4141, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Halo", seconds: 350, plays: 6930, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 179, plays: 7798, artist: "Nova", mood: "dark"},
  {id: 4, title: "Tides", seconds: 170, plays: 8301, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Neon", seconds: 334, plays: 5340, artist: "Nova", mood: "calm"},
  {id: 6, title: "Lanterns", seconds: 148, plays: 6960, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Drift", seconds: 375, plays: 5701, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 268, plays: 7102, artist: "Kairo", mood: "calm"}
]
```
