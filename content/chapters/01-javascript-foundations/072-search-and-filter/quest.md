---
slug: "js-search-and-filter"
title: "Real-World: Search & Filter a List"
type: "code"
language: "js"
xp: 20
hints: ["Build one lowercase \"haystack\" string from the name and tags.", "Every query word must be in the haystack: `words.every(...)`.", "`filter` already returns a new array, so sorting the result is safe."]
---
# Real-World: Search & Filter a List

Every list screen (products, users, todos) has a search box and some filters. That logic should be a **pure function**, kept separate from the UI, so it's easy to test.

## Your task

`searchProducts(products, options)`, where `options` may include:

- `query`: matches `name` or `tags`, case-insensitively. Every word in the query must match. `"red shoe"` matches a product named "Red Running Shoe".
- `minPrice` / `maxPrice`: inclusive bounds, ignored when undefined.
- `inStockOnly`: when true, keep only products with `stock > 0`.
- `sort`: `"price-asc"`, `"price-desc"` or `"name"` (A→Z). Default: keep the original order.

Return a new array.
