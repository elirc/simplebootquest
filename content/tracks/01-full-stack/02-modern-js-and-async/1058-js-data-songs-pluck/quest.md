---
slug: "js-data-songs-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `plays` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Halo", seconds: 285, plays: 1854, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Paper Planes", seconds: 231, plays: 8516, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Echoes", seconds: 366, plays: 6469, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Static", seconds: 282, plays: 8591, artist: "Nova", mood: "calm"},
  {id: 5, title: "Drift", seconds: 413, plays: 3443, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 392, plays: 7986, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 266, plays: 2959, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Neon", seconds: 167, plays: 5811, artist: "The Pines", mood: "happy"}
]
```
