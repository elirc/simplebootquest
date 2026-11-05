---
slug: "debug-songs-count-cat"
title: "Debug: Count songs by artist"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count songs by artist

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many songs have `artist` equal to `value`.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Static", seconds: 175, plays: 1257, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Gravity", seconds: 175, plays: 5167, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Drift", seconds: 275, plays: 7192, artist: "Nova", mood: "calm"},
  {id: 4, title: "Halo", seconds: 346, plays: 4626, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Neon", seconds: 363, plays: 5524, artist: "Nova", mood: "dark"},
  {id: 6, title: "Tides", seconds: 155, plays: 4437, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Lanterns", seconds: 379, plays: 9058, artist: "Nova", mood: "dark"},
  {id: 8, title: "Paper Planes", seconds: 323, plays: 280, artist: "Kairo", mood: "dark"}
]
```
