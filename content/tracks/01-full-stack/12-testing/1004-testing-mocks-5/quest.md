---
slug: "testing-mocks-5"
title: "Testing Drill: Mock function calls #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(73);\nconst results = [2, 5, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`[5]`","`[2]`","`[2,5]`","`5`"],"answer":0},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(39);\nconst results = [4, 1, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,1,1]`","`[39,2,2]`","`[39,1,1]`","`[8,2,2]`"],"answer":1},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(15);\nconst results = [3, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, what is `loadFlight.mock.calls[1]`?","options":["`[3,2]`","`[2]`","`[3]`","`2`"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(39);\nconst results = [1, 5, 5].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(5)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(30);\nconst results = [2, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #5

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
