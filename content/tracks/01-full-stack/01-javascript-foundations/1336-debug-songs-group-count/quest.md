---
slug: "debug-songs-group-count"
title: "Debug: How many songs per mood?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many songs per mood?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `mood` to the number of songs with it. Only include values that appear.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Gravity", seconds: 251, plays: 209, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Drift", seconds: 310, plays: 8278, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Echoes", seconds: 341, plays: 6522, artist: "The Pines", mood: "happy"},
  {id: 4, title: "Lanterns", seconds: 320, plays: 8581, artist: "The Pines", mood: "calm"},
  {id: 5, title: "Neon", seconds: 362, plays: 1645, artist: "Nova", mood: "calm"},
  {id: 6, title: "Velvet", seconds: 252, plays: 1214, artist: "Nova", mood: "happy"},
  {id: 7, title: "Paper Planes", seconds: 332, plays: 3386, artist: "Nova", mood: "happy"},
  {id: 8, title: "Static", seconds: 219, plays: 7620, artist: "The Pines", mood: "happy"}
]
```
