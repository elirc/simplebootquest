---
slug: "testing-mocks-47"
title: "Testing Drill: Mock function calls #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(14);\nconst results = [5, 3, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[14,3,3]`","`[10,6,6]`","`[14,6,6]`","`[5,3,3]`"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(38);\nconst results = [5, 4, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[5]`","`4`","`[5,4]`","`[4]`"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(54);\nconst results = [4, 2].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(20);\nconst results = [3, 2, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[20,4,4]`","`[20,2,2]`","`[3,2,2]`","`[6,4,4]`"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(78);\nconst results = [4, 4, 4, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #47

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
