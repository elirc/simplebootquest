---
slug: "testing-mocks-72"
title: "Testing Drill: Mock function calls #72"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(68);\nconst results = [1, 5].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["2","3","4","1"],"answer":0},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(76);\nconst results = [1, 5, 2, 2].map((id) => loadPlant(id));\n```\n\nAfter this runs, what is `loadPlant.mock.calls[1]`?","options":["`[5]`","`[1]`","`[1,5]`","`5`"],"answer":0},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(80);\nconst results = [1, 1, 2].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[80,1,2]`","`[80,2,4]`","`[1,1,2]`","`[2,2,4]`"],"answer":1},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(78);\nconst results = [2, 4].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["4","2","3","1"],"answer":1},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(63);\nconst results = [2, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, what is `loadStudent.mock.calls[1]`?","options":["`[2,3]`","`[2]`","`[3]`","`3`"],"answer":2}]
---
# Testing Drill: Mock function calls #72

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
