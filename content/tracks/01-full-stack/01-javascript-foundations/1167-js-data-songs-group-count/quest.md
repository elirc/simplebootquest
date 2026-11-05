---
slug: "js-data-songs-group-count"
title: "Data: How many songs per artist?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many songs per artist?

Return an object mapping each `artist` to the number of songs with it. Only include values that appear.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 217, plays: 2456, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 235, plays: 3864, artist: "Nova", mood: "calm"},
  {id: 3, title: "Drift", seconds: 190, plays: 2221, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Tides", seconds: 158, plays: 4367, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Static", seconds: 141, plays: 7445, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Echoes", seconds: 340, plays: 3616, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Neon", seconds: 194, plays: 8491, artist: "The Pines", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 125, plays: 2229, artist: "Kairo", mood: "dark"}
]
```
