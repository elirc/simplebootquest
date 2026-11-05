---
slug: "ut-objects-immutability"
title: "Testing Objects, Arrays & Immutability"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Freeze your inputs: `Object.freeze` makes mutation throw.", "For duplicates, `toBe(post)` checks the very same object came back."]
---
# Testing Objects, Arrays & Immutability

Two matchers you'll use constantly:

- `toBe`: the **same** value (`Object.is`). For primitives, or to check that you got the very same object back.
- `toEqual`: the same **structure**, compared recursively. For objects and arrays.

```js
expect(addTag(post, 'js')).toEqual({ id: 1, tags: ['js'] });
```

### Testing that nothing was mutated

React state and reducers must never mutate their inputs. Test it explicitly: keep a copy and compare afterwards, or **freeze** the input so any mutation throws:

```js
const post = Object.freeze({ id: 1, tags: Object.freeze(['a']) });
const next = addTag(post, 'b');      // throws if addTag mutates
expect(next).not.toBe(post);         // a new object came back
```

`addTag(post, tag)` returns a **new** post with the tag added:

- Tags are trimmed and lowercased.
- Duplicates (compared after normalising) are not added, and the **same post object** is returned unchanged.
- Empty tags (after trimming) throw an `Error`.
