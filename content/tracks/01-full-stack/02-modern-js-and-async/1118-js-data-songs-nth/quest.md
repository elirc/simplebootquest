---
slug: "js-data-songs-nth"
title: "Data: The n-th song by play count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th song by play count

Return the title of the song ranked `n` (1 = highest `plays`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Halo", seconds: 211, plays: 2420, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Riverside", seconds: 315, plays: 134, artist: "Nova", mood: "happy"},
  {id: 3, title: "Gravity", seconds: 205, plays: 5293, artist: "Nova", mood: "happy"},
  {id: 4, title: "Neon", seconds: 412, plays: 6005, artist: "The Pines", mood: "dark"},
  {id: 5, title: "Tides", seconds: 326, plays: 3191, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Sunrise", seconds: 278, plays: 7774, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Static", seconds: 245, plays: 3098, artist: "Nova", mood: "dark"},
  {id: 8, title: "Lanterns", seconds: 280, plays: 7176, artist: "Kairo", mood: "happy"}
]
```
