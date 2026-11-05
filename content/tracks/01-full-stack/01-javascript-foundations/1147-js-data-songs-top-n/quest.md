---
slug: "js-data-songs-top-n"
title: "Data: Top songs by length in seconds"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top songs by length in seconds

Return the titles of the `n` songs with the **highest** `seconds`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Neon", seconds: 249, plays: 4717, artist: "Nova", mood: "happy"},
  {id: 2, title: "Echoes", seconds: 369, plays: 4201, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 204, plays: 6384, artist: "Nova", mood: "calm"},
  {id: 4, title: "Paper Planes", seconds: 287, plays: 1753, artist: "Nova", mood: "happy"},
  {id: 5, title: "Tides", seconds: 405, plays: 4464, artist: "Nova", mood: "calm"},
  {id: 6, title: "Gravity", seconds: 159, plays: 60, artist: "Nova", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 406, plays: 7291, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Riverside", seconds: 180, plays: 3750, artist: "The Pines", mood: "happy"}
]
```
