---
slug: "js-data-songs-above"
title: "Data: Songs with a length in seconds above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Songs with a length in seconds above a limit

Return the title of every song whose `seconds` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Lanterns", seconds: 264, plays: 9711, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Echoes", seconds: 152, plays: 1835, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Velvet", seconds: 351, plays: 2493, artist: "Nova", mood: "dark"},
  {id: 4, title: "Paper Planes", seconds: 251, plays: 3440, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Drift", seconds: 166, plays: 8365, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 166, plays: 7456, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Neon", seconds: 289, plays: 6084, artist: "Nova", mood: "dark"},
  {id: 8, title: "Halo", seconds: 267, plays: 7760, artist: "Kairo", mood: "dark"}
]
```
