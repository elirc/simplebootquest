---
slug: "testing-mocks-53"
title: "Testing Drill: Mock function calls #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(99);\nconst results = [2, 4, 2].map((id) => loadTask(id));\n```\n\nAfter this runs, what is `loadTask.mock.calls[1]`?","options":["`4`","`[2,4]`","`[2]`","`[4]`"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(15);\nconst results = [3, 4].map((id) => loadRecipe(id));\n```\n\nAfter this runs, how many times was `loadRecipe` called?","options":["1","4","2","3"],"answer":2},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(87);\nconst results = [2, 3, 5].map((id) => loadCar(id));\n```\n\nAfter this runs, how many times was `loadCar` called?","options":["4","5","2","3"],"answer":3},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(90);\nconst results = [3, 2, 1, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[90,2,1,4]`","`[90,4,2,8]`","`[3,2,1,4]`","`[6,4,2,8]`"],"answer":1},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(61);\nconst results = [1, 5, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #53

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
