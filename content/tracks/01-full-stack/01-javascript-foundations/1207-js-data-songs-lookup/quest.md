---
slug: "js-data-songs-lookup"
title: "Data: Look up a song's play count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a song's play count

Return the `plays` of the song whose title is `title`, or `null` if there isn't one.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Gravity", seconds: 372, plays: 1476, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 154, plays: 3425, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Neon", seconds: 186, plays: 2766, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Velvet", seconds: 337, plays: 9533, artist: "The Pines", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 250, plays: 7892, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Lanterns", seconds: 402, plays: 9508, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Tides", seconds: 243, plays: 5754, artist: "Nova", mood: "happy"},
  {id: 8, title: "Echoes", seconds: 260, plays: 6699, artist: "Kairo", mood: "happy"}
]
```
