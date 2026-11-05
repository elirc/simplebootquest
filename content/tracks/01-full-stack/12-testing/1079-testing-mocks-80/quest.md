---
slug: "testing-mocks-80"
title: "Testing Drill: Mock function calls #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(87);\nconst results = [1, 3, 5, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,6,10,2]`","`[87,3,5,1]`","`[1,3,5,1]`","`[87,6,10,2]`"],"answer":3},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(11);\nconst results = [3, 1, 5, 1].map((id) => loadFlight(id));\n```\n\nAfter this runs, what is `loadFlight.mock.calls[1]`?","options":["`[1]`","`[3,1]`","`1`","`[3]`"],"answer":0},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(98);\nconst results = [2, 2].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[98,4]`","`[98,2]`","`[2,2]`","`[4,4]`"],"answer":0},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(21);\nconst results = [3, 1, 2, 5].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what is `loadEmployee.mock.calls[1]`?","options":["`[3,1]`","`[1]`","`[3]`","`1`"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(70);\nconst results = [2, 5, 3, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[2]`","`5`","`[5]`","`[2,5]`"],"answer":2}]
---
# Testing Drill: Mock function calls #80

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
