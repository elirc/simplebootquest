---
slug: "debug-songs-group-sum"
title: "Debug: Total length in seconds per artist"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total length in seconds per artist

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `artist` to the **sum** of `seconds` for songs in it.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Sunrise", seconds: 373, plays: 2929, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Riverside", seconds: 240, plays: 5996, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 133, plays: 1928, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Tides", seconds: 254, plays: 86, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Paper Planes", seconds: 306, plays: 8699, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Neon", seconds: 317, plays: 674, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 224, plays: 186, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 285, plays: 808, artist: "Kairo", mood: "calm"}
]
```
