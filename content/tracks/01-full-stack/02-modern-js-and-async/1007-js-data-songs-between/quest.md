---
slug: "js-data-songs-between"
title: "Data: Songs in a play count range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Songs in a play count range

Return the titles of songs whose `plays` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Lanterns", seconds: 250, plays: 9706, artist: "Nova", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 165, plays: 7820, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Tides", seconds: 219, plays: 1731, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Halo", seconds: 292, plays: 766, artist: "Nova", mood: "dark"},
  {id: 5, title: "Velvet", seconds: 394, plays: 6597, artist: "Nova", mood: "happy"},
  {id: 6, title: "Riverside", seconds: 320, plays: 9296, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Static", seconds: 357, plays: 5060, artist: "Nova", mood: "happy"},
  {id: 8, title: "Paper Planes", seconds: 228, plays: 8602, artist: "The Pines", mood: "calm"}
]
```
