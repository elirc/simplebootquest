---
slug: "js-data-songs-histogram"
title: "Data: Bucket songs by length in seconds"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket songs by length in seconds

Group songs into buckets of width `width` by `seconds`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Riverside", seconds: 150, plays: 7949, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Velvet", seconds: 364, plays: 1945, artist: "Nova", mood: "dark"},
  {id: 3, title: "Static", seconds: 398, plays: 7697, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 301, plays: 6630, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 156, plays: 2772, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Halo", seconds: 253, plays: 1229, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Drift", seconds: 281, plays: 46, artist: "Nova", mood: "calm"},
  {id: 8, title: "Echoes", seconds: 243, plays: 8645, artist: "Kairo", mood: "dark"}
]
```
