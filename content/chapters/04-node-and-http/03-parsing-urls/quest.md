---
slug: node-parsing-urls
title: URLs & Query Strings
type: code
language: js
xp: 20
---
# URLs & Query Strings

Every HTTP request targets a URL. Its parts:

```
https://api.example.com:8080/todos/42?sort=title&tag=a&tag=b#top
└─┬──┘   └──────┬──────┘ └┬─┘└───┬───┘└─────────┬─────────┘└┬┘
protocol      host       port  pathname        search      hash
```

The hash (`#top`) is **never sent to the server**. Browsers keep it.

Node and browsers both provide the `URL` and `URLSearchParams` classes:

```js
const url = new URL('/todos?sort=title&tag=a&tag=b', 'http://localhost');
url.pathname;                    // '/todos'
url.searchParams.get('sort');    // 'title'
url.searchParams.getAll('tag');  // ['a', 'b']
url.searchParams.get('missing'); // null
```

Query values are **always strings**. `?page=2` gives you `'2'`, not `2`. Converting and validating them is your job.

Building URLs safely matters too. Never concatenate user input into a query string by hand: `URLSearchParams` handles the encoding of `&`, spaces, `#` and so on.

## Your task

1. `parseRequestUrl(path)` takes a request path like `"/todos?page=2&tag=a&tag=b"` and returns `{ pathname, query }`. In `query`, a key that appears once maps to a string, and a key that appears more than once maps to an array of strings.
2. `buildQueryString(params)` turns an object into `"?key=value&..."`. Skip `undefined` and `null` values, expand arrays into repeated keys, and return `""` if nothing is left.
