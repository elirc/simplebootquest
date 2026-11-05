---
slug: "testing-mocks-52"
title: "Testing Drill: Mock function calls #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(41);\nconst results = [4, 5, 1].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`[4]`","`[4,5]`","`5`","`[5]`"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(76);\nconst results = [4, 5].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(86);\nconst results = [3, 5, 1, 2].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`[5]`","`[3]`","`5`","`[3,5]`"],"answer":0},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(81);\nconst results = [1, 4, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,8,6]`","`[1,4,3]`","`[81,8,6]`","`[81,4,3]`"],"answer":2},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(76);\nconst results = [4, 5, 1].map((id) => loadMovie(id));\n```\n\nAfter this runs, what is `loadMovie.mock.calls[1]`?","options":["`[4,5]`","`[4]`","`5`","`[5]`"],"answer":3}]
---
# Testing Drill: Mock function calls #52

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
