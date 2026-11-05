---
slug: "js-data-songs-index"
title: "Data: Index songs by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index songs by id

Return an object mapping each `id` to the song's title, for fast lookups.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Lanterns", seconds: 156, plays: 5225, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Paper Planes", seconds: 221, plays: 3811, artist: "Kairo", mood: "happy"},
  {id: 3, title: "Drift", seconds: 237, plays: 7023, artist: "The Pines", mood: "dark"},
  {id: 4, title: "Neon", seconds: 255, plays: 9235, artist: "Nova", mood: "calm"},
  {id: 5, title: "Halo", seconds: 226, plays: 9139, artist: "Nova", mood: "happy"},
  {id: 6, title: "Tides", seconds: 148, plays: 1860, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Gravity", seconds: 400, plays: 8128, artist: "Nova", mood: "dark"},
  {id: 8, title: "Echoes", seconds: 240, plays: 3352, artist: "Nova", mood: "happy"}
]
```
