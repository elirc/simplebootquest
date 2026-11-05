---
slug: "debug-songs-histogram"
title: "Debug: Bucket songs by length in seconds"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket songs by length in seconds

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group songs into buckets of width `width` by `seconds`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Static", seconds: 185, plays: 733, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 237, plays: 16, artist: "Nova", mood: "happy"},
  {id: 3, title: "Tides", seconds: 419, plays: 8180, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Halo", seconds: 322, plays: 2149, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Sunrise", seconds: 337, plays: 6798, artist: "Nova", mood: "calm"},
  {id: 6, title: "Drift", seconds: 250, plays: 6398, artist: "Nova", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 179, plays: 3850, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Lanterns", seconds: 213, plays: 78, artist: "The Pines", mood: "dark"}
]
```
