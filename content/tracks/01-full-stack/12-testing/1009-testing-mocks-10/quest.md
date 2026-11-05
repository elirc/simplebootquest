---
slug: "testing-mocks-10"
title: "Testing Drill: Mock function calls #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(17);\nconst results = [1, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(94);\nconst results = [5, 1, 5, 3].map((id) => loadTask(id));\n```\n\nAfter this runs, what is `loadTask.mock.calls[1]`?","options":["`1`","`[5]`","`[1]`","`[5,1]`"],"answer":2},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(14);\nconst results = [5, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[14,2]`","`[5,1]`","`[10,2]`","`[14,1]`"],"answer":0},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(83);\nconst results = [5, 2, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[83,2,2]`","`[5,2,2]`","`[83,4,4]`","`[10,4,4]`"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(45);\nconst results = [5, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[2]`","`2`","`[5]`","`[5,2]`"],"answer":0}]
---
# Testing Drill: Mock function calls #10

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
