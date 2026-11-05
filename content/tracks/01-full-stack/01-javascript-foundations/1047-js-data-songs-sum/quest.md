---
slug: "js-data-songs-sum"
title: "Data: Total play count of all songs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total play count of all songs

Return the sum of `plays` across all songs. An empty list totals 0.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Riverside", seconds: 248, plays: 5558, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 348, plays: 3134, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Paper Planes", seconds: 382, plays: 9539, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Velvet", seconds: 199, plays: 7460, artist: "Nova", mood: "happy"},
  {id: 5, title: "Drift", seconds: 159, plays: 8433, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 323, plays: 4004, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 232, plays: 1595, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Echoes", seconds: 215, plays: 1438, artist: "The Pines", mood: "happy"}
]
```
