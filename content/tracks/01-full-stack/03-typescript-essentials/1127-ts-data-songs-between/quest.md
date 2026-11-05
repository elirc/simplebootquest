---
slug: "ts-data-songs-between"
title: "Data: Songs in a length in seconds range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Songs in a length in seconds range

Return the titles of songs whose `seconds` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 278, plays: 7048, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Lanterns", seconds: 244, plays: 1558, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Drift", seconds: 374, plays: 8742, artist: "Nova", mood: "dark"},
  {id: 4, title: "Static", seconds: 291, plays: 9344, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Tides", seconds: 155, plays: 941, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Halo", seconds: 330, plays: 5684, artist: "Nova", mood: "dark"},
  {id: 7, title: "Velvet", seconds: 167, plays: 8550, artist: "Nova", mood: "happy"},
  {id: 8, title: "Riverside", seconds: 416, plays: 6283, artist: "The Pines", mood: "calm"}
]
```

Type the parameters and the return value. The interface is already written for you.
