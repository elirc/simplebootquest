---
slug: "ts-data-songs-above"
title: "Data: Songs with a length in seconds above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Songs with a length in seconds above a limit

Return the title of every song whose `seconds` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 242, plays: 4103, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Echoes", seconds: 254, plays: 337, artist: "Nova", mood: "dark"},
  {id: 3, title: "Sunrise", seconds: 250, plays: 1525, artist: "Nova", mood: "happy"},
  {id: 4, title: "Static", seconds: 233, plays: 4548, artist: "The Pines", mood: "dark"},
  {id: 5, title: "Drift", seconds: 156, plays: 1856, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Velvet", seconds: 228, plays: 388, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 369, plays: 349, artist: "Nova", mood: "calm"},
  {id: 8, title: "Tides", seconds: 351, plays: 9750, artist: "Nova", mood: "happy"}
]
```

Type the parameters and the return value. The interface is already written for you.
