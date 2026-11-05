---
slug: "js-data-songs-every-some"
title: "Data: Are all songs under a play count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all songs under a play count limit?

Return `true` if **every** song has `plays` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 313, plays: 4669, artist: "Nova", mood: "calm"},
  {id: 2, title: "Echoes", seconds: 360, plays: 6048, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Static", seconds: 358, plays: 650, artist: "Nova", mood: "calm"},
  {id: 4, title: "Gravity", seconds: 327, plays: 1687, artist: "Nova", mood: "calm"},
  {id: 5, title: "Velvet", seconds: 153, plays: 745, artist: "Nova", mood: "calm"},
  {id: 6, title: "Halo", seconds: 371, plays: 4252, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Riverside", seconds: 281, plays: 2647, artist: "Nova", mood: "happy"},
  {id: 8, title: "Drift", seconds: 282, plays: 1512, artist: "Kairo", mood: "happy"}
]
```
