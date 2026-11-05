---
slug: "testing-mocks-11"
title: "Testing Drill: Mock function calls #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(15);\nconst results = [1, 3, 3].map((id) => loadTask(id));\n```\n\nAfter this runs, what is `loadTask.mock.calls[1]`?","options":["`3`","`[3]`","`[1]`","`[1,3]`"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(64);\nconst results = [2, 3, 1, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`[2]`","`[2,3]`","`3`","`[3]`"],"answer":3},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(36);\nconst results = [5, 5, 5, 5].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(5)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(50);\nconst results = [4, 5, 4].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(73);\nconst results = [4, 5, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[4,5]`","`[5]`","`5`","`[4]`"],"answer":1}]
---
# Testing Drill: Mock function calls #11

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
