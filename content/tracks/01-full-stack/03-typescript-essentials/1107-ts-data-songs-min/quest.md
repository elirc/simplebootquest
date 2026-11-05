---
slug: "ts-data-songs-min"
title: "Data: The song with the lowest play count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The song with the lowest play count

Return the title of the song with the **lowest** `plays` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Echoes", seconds: 198, plays: 7654, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Paper Planes", seconds: 291, plays: 9548, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Sunrise", seconds: 277, plays: 7230, artist: "Nova", mood: "calm"},
  {id: 4, title: "Neon", seconds: 176, plays: 8715, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Tides", seconds: 176, plays: 3229, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Velvet", seconds: 196, plays: 1953, artist: "The Pines", mood: "dark"},
  {id: 7, title: "Drift", seconds: 406, plays: 8203, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 391, plays: 9713, artist: "Kairo", mood: "happy"}
]
```

Type the parameters and the return value. The interface is already written for you.
