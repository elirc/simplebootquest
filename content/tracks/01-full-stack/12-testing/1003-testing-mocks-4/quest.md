---
slug: "testing-mocks-4"
title: "Testing Drill: Mock function calls #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(69);\nconst results = [4, 4, 4, 3].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(3)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(16);\nconst results = [1, 5, 4, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[1,5]`","`[5]`","`[1]`","`5`"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(76);\nconst results = [2, 4].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what is `loadRecipe.mock.calls[1]`?","options":["`4`","`[2]`","`[2,4]`","`[4]`"],"answer":3},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(98);\nconst results = [2, 3].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[98,6]`","`[98,3]`","`[2,3]`","`[4,6]`"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(22);\nconst results = [3, 4, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`4`","`[3,4]`","`[4]`","`[3]`"],"answer":2}]
---
# Testing Drill: Mock function calls #4

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
