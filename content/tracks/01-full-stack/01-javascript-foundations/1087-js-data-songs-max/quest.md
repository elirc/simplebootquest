---
slug: "js-data-songs-max"
title: "Data: The song with the highest length in seconds"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The song with the highest length in seconds

Return the title of the song with the **highest** `seconds`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Halo", seconds: 326, plays: 7125, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Neon", seconds: 284, plays: 8677, artist: "Nova", mood: "calm"},
  {id: 3, title: "Paper Planes", seconds: 333, plays: 3254, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Echoes", seconds: 208, plays: 9106, artist: "Kairo", mood: "happy"},
  {id: 5, title: "Gravity", seconds: 275, plays: 7884, artist: "Nova", mood: "happy"},
  {id: 6, title: "Riverside", seconds: 346, plays: 7552, artist: "The Pines", mood: "dark"},
  {id: 7, title: "Lanterns", seconds: 404, plays: 2249, artist: "Nova", mood: "happy"},
  {id: 8, title: "Drift", seconds: 409, plays: 261, artist: "Kairo", mood: "dark"}
]
```
