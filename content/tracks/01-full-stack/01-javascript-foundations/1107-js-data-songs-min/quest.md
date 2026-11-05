---
slug: "js-data-songs-min"
title: "Data: The song with the lowest length in seconds"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The song with the lowest length in seconds

Return the title of the song with the **lowest** `seconds` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 373, plays: 9500, artist: "Nova", mood: "dark"},
  {id: 2, title: "Drift", seconds: 336, plays: 6101, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Tides", seconds: 291, plays: 6812, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Riverside", seconds: 192, plays: 1731, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Gravity", seconds: 239, plays: 3654, artist: "Nova", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 176, plays: 3688, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Static", seconds: 193, plays: 4083, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Echoes", seconds: 160, plays: 2619, artist: "The Pines", mood: "dark"}
]
```
