---
slug: "ts-data-songs-average"
title: "Data: Average length in seconds"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average length in seconds

Return the average `seconds` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Static", seconds: 160, plays: 5522, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Tides", seconds: 190, plays: 2551, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Riverside", seconds: 129, plays: 3760, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Paper Planes", seconds: 177, plays: 1365, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 205, plays: 8349, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Gravity", seconds: 330, plays: 9774, artist: "Nova", mood: "happy"},
  {id: 7, title: "Echoes", seconds: 210, plays: 9770, artist: "Nova", mood: "dark"},
  {id: 8, title: "Lanterns", seconds: 200, plays: 6158, artist: "Kairo", mood: "calm"}
]
```

Type the parameters and the return value. The interface is already written for you.
