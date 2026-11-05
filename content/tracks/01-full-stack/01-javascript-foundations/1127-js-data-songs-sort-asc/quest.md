---
slug: "js-data-songs-sort-asc"
title: "Data: Sort songs by play count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort songs by play count

Return the titles sorted by `plays` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Neon", seconds: 174, plays: 6211, artist: "Nova", mood: "calm"},
  {id: 2, title: "Static", seconds: 338, plays: 5506, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Gravity", seconds: 127, plays: 4589, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Drift", seconds: 342, plays: 2682, artist: "Nova", mood: "calm"},
  {id: 5, title: "Sunrise", seconds: 163, plays: 8666, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Tides", seconds: 156, plays: 5899, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 270, plays: 7085, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Halo", seconds: 289, plays: 4660, artist: "Nova", mood: "happy"}
]
```
