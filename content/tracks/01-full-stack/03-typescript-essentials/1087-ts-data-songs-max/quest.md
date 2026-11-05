---
slug: "ts-data-songs-max"
title: "Data: The song with the highest length in seconds"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The song with the highest length in seconds

Return the title of the song with the **highest** `seconds`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Tides", seconds: 336, plays: 1702, artist: "Nova", mood: "dark"},
  {id: 2, title: "Static", seconds: 183, plays: 1134, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Gravity", seconds: 286, plays: 4476, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Riverside", seconds: 263, plays: 1184, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Halo", seconds: 166, plays: 9204, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Neon", seconds: 381, plays: 4790, artist: "The Pines", mood: "dark"},
  {id: 7, title: "Drift", seconds: 406, plays: 9385, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Lanterns", seconds: 371, plays: 9157, artist: "The Pines", mood: "dark"}
]
```

Type the parameters and the return value. The interface is already written for you.
