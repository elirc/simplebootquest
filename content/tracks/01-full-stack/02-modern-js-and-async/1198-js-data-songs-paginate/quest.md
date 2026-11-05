---
slug: "js-data-songs-paginate"
title: "Data: Paginate songs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate songs

Return `{ items, page, totalPages }` where `items` are the titles on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Velvet", seconds: 190, plays: 1559, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 133, plays: 6456, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Static", seconds: 340, plays: 1296, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Halo", seconds: 211, plays: 3334, artist: "Nova", mood: "calm"},
  {id: 5, title: "Neon", seconds: 136, plays: 7958, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Tides", seconds: 409, plays: 7239, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Lanterns", seconds: 313, plays: 2708, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Echoes", seconds: 236, plays: 4338, artist: "Nova", mood: "dark"}
]
```
