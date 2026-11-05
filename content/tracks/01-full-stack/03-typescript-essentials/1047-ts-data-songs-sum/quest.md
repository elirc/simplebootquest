---
slug: "ts-data-songs-sum"
title: "Data: Total play count of all songs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total play count of all songs

Return the sum of `plays` across all songs. An empty list totals 0.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Drift", seconds: 336, plays: 534, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Riverside", seconds: 147, plays: 2173, artist: "Nova", mood: "calm"},
  {id: 3, title: "Tides", seconds: 228, plays: 2940, artist: "The Pines", mood: "happy"},
  {id: 4, title: "Paper Planes", seconds: 364, plays: 1896, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Echoes", seconds: 365, plays: 6576, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Halo", seconds: 288, plays: 5828, artist: "Nova", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 398, plays: 2237, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Neon", seconds: 242, plays: 7152, artist: "The Pines", mood: "happy"}
]
```

Type the parameters and the return value. The interface is already written for you.
