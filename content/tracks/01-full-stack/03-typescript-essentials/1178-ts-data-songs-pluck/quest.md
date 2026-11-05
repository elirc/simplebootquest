---
slug: "ts-data-songs-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `seconds` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Tides", seconds: 194, plays: 6580, artist: "Nova", mood: "calm"},
  {id: 2, title: "Velvet", seconds: 416, plays: 1744, artist: "Kairo", mood: "happy"},
  {id: 3, title: "Riverside", seconds: 317, plays: 5999, artist: "The Pines", mood: "dark"},
  {id: 4, title: "Static", seconds: 183, plays: 5181, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Neon", seconds: 418, plays: 2426, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Echoes", seconds: 196, plays: 9458, artist: "Nova", mood: "dark"},
  {id: 7, title: "Lanterns", seconds: 338, plays: 3482, artist: "Kairo", mood: "dark"},
  {id: 8, title: "Halo", seconds: 276, plays: 2535, artist: "Nova", mood: "calm"}
]
```

Type the parameters and the return value. The interface is already written for you.
