---
slug: "js-data-songs-update"
title: "Data: Update songs immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update songs immutably

Return a **new** array where every song with `artist` equal to `value` has `plays` increased by `amount`. Other songs are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `SONGS` in the tests):

```js
const SONGS = [
  {id: 1, title: "Velvet", seconds: 386, plays: 4900, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 256, plays: 3900, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Static", seconds: 131, plays: 7581, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Tides", seconds: 131, plays: 8216, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 297, plays: 8968, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Drift", seconds: 145, plays: 1371, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Neon", seconds: 325, plays: 5188, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Sunrise", seconds: 121, plays: 9781, artist: "Nova", mood: "dark"}
]
```
