---
slug: "ts-data-songs-every-some"
title: "Data: Are all songs under a play count limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all songs under a play count limit?

Return `true` if **every** song has `plays` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Sunrise", seconds: 121, plays: 2017, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Velvet", seconds: 391, plays: 8046, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Gravity", seconds: 409, plays: 7784, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Lanterns", seconds: 378, plays: 8120, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Riverside", seconds: 286, plays: 2740, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Drift", seconds: 303, plays: 6507, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Paper Planes", seconds: 311, plays: 9622, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Static", seconds: 358, plays: 4497, artist: "The Pines", mood: "calm"}
]
```

Type the parameters and the return value. The interface is already written for you.
