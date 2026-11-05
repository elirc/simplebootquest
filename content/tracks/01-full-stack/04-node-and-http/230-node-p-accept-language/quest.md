---
slug: "node-p-accept-language"
title: "Practice: Picking a Language"
type: "code"
language: "js"
xp: 15
hints: ["Parse every entry into `{ tag, q, index }` first, then sort by q descending and index ascending.", "Check an exact match before trying the primary subtag."]
---
# Practice: Picking a Language

Browsers send their preferred languages, ranked with **quality values**:

```
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, *;q=0.5
```

No `q` means `q=1`. `q=0` means "not acceptable".

## Your task
Write `pickLanguage(header, supported)`, where `supported` is your app's list such as `['en', 'fr', 'de']`:
- Try the client's languages from highest `q` to lowest. Ties keep header order.
- A tag matches a supported language exactly (case-insensitive), or by its primary subtag (`fr-CH` matches `fr`).
- `*` matches the first supported language.
- If nothing matches, or the header is missing, return `supported[0]`.
- Return the language **as spelled in `supported`**.
