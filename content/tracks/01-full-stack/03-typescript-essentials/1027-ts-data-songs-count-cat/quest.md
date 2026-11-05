---
slug: "ts-data-songs-count-cat"
title: "Data: Count songs by mood"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count songs by mood

Return how many songs have `mood` equal to `value`.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Halo", seconds: 390, plays: 8845, artist: "Nova", mood: "dark"},
  {id: 2, title: "Sunrise", seconds: 167, plays: 5993, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Drift", seconds: 377, plays: 5351, artist: "The Pines", mood: "happy"},
  {id: 4, title: "Echoes", seconds: 175, plays: 8979, artist: "The Pines", mood: "calm"},
  {id: 5, title: "Tides", seconds: 141, plays: 5515, artist: "Nova", mood: "happy"},
  {id: 6, title: "Velvet", seconds: 206, plays: 8864, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Neon", seconds: 122, plays: 5989, artist: "Nova", mood: "calm"},
  {id: 8, title: "Lanterns", seconds: 296, plays: 1726, artist: "Nova", mood: "calm"}
]
```

Type the parameters and the return value. The interface is already written for you.
