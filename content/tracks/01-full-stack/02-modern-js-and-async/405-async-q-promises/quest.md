---
slug: "async-q-promises"
title: "Quiz: Promise Gotchas"
type: "quiz"
xp: 15
questions: [{"prompt": "`users.forEach(async (u) => await save(u)); console.log(\"done\")` logs \"done\"…", "options": ["After all saves finish", "Before the saves finish, because forEach does not await", "Never"], "answer": 1}, {"prompt": "What does `const user = getUser(1)` (missing await) give you inside an async function?", "options": ["The user", "A pending Promise", "undefined"], "answer": 1}, {"prompt": "Inside `.then(() => { fetchPosts(); })`, the chain…", "options": ["Waits for fetchPosts", "Does not wait, because nothing was returned", "Throws"], "answer": 1}, {"prompt": "What is the risk of `.catch(() => {})`?", "options": ["None", "Real errors are silently swallowed, so bugs disappear from view", "It rethrows"], "answer": 1}, {"prompt": "Which correctly waits for every save in parallel?", "options": ["users.forEach(async ...)", "await Promise.all(users.map(save))", "users.map(await save)"], "answer": 1}]
---
# Quiz: Promise Gotchas

Common promise bugs:

- **Forgetting `await`**: you get a pending promise instead of the value, and errors become unhandled rejections.
- **`await` in a loop** when the calls are independent: slow sequential code.
- **Not returning** inside `.then`: the chain doesn't wait.
- **Catching too early**: `.catch(() => {})` silently swallows real errors.
- **`async` callbacks in `forEach`**: `forEach` doesn't wait for them.
