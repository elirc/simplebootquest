---
slug: "js-data-songs-format"
title: "Data: Format songs as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format songs as labels

Return one string per song: `"<title> (<plays>)"`, e.g. `"Tides (3339)"`.

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Tides", seconds: 321, plays: 3339, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Gravity", seconds: 292, plays: 3811, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Drift", seconds: 213, plays: 6510, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Static", seconds: 131, plays: 2031, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Halo", seconds: 239, plays: 2401, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Lanterns", seconds: 218, plays: 5772, artist: "Nova", mood: "happy"},
  {id: 7, title: "Riverside", seconds: 284, plays: 1132, artist: "Kairo", mood: "dark"},
  {id: 8, title: "Paper Planes", seconds: 278, plays: 6220, artist: "Nova", mood: "dark"}
]
```
