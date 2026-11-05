---
slug: "js-data-songs-search"
title: "Data: Search songs by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search songs by title

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Drift", seconds: 320, plays: 9168, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Lanterns", seconds: 417, plays: 659, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Tides", seconds: 218, plays: 1212, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Gravity", seconds: 150, plays: 5426, artist: "Nova", mood: "happy"},
  {id: 5, title: "Paper Planes", seconds: 414, plays: 9153, artist: "The Pines", mood: "dark"},
  {id: 6, title: "Sunrise", seconds: 130, plays: 5964, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Halo", seconds: 328, plays: 6198, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Velvet", seconds: 163, plays: 5917, artist: "The Pines", mood: "happy"}
]
```
