---
slug: "ut-testing-async"
title: "Testing Async Code"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Build tiny fake APIs: `{ getUser: async () => ({ name: \"Ada\" }) }`.", "Use `await expect(promise).rejects.toThrow(...)` for the rethrow case."]
resources: [{"title": "Vitest: Testing async code", "url": "https://vitest.dev/api/expect#resolves"}]
---
# Testing Async Code

Make the test function `async` and `await` the result, otherwise the test finishes before the promise does, and passes no matter what.

```js
test('loads the name', async () => {
  const api = { getUser: async () => ({ name: 'Ada' }) };
  expect(await getDisplayName(api, 1)).toBe('Ada');
});

test('rejects on server errors', async () => {
  await expect(getDisplayName(failingApi, 1)).rejects.toThrow('Server error');
});
```

Notice the **fake `api` object**: the function receives its dependency as a parameter, so the test controls exactly what it returns. No network required.

`getDisplayName(api, id)`:

- Returns `user.nickname`, or `user.name` if there's no nickname.
- If `api.getUser` rejects with an error whose `status` is **404**, it returns `'Unknown user'`.
- Any other error is **rethrown** (it must not be swallowed!).
