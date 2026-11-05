---
slug: "testing-mocks-67"
title: "Testing Drill: Mock function calls #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(31);\nconst results = [1, 5, 4, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[31,10,8,2]`","`[2,10,8,2]`","`[31,5,4,1]`","`[1,5,4,1]`"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(33);\nconst results = [2, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[33,6]`","`[2,3]`","`[4,6]`","`[33,3]`"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(57);\nconst results = [1, 5, 3].map((id) => loadRepo(id));\n```\n\nAfter this runs, what is `loadRepo.mock.calls[1]`?","options":["`[5]`","`[1,5]`","`[1]`","`5`"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(10);\nconst results = [2, 3, 4].map((id) => loadCar(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,3,4]`","`[10,3,4]`","`[10,6,8]`","`[4,6,8]`"],"answer":2},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(64);\nconst results = [2, 3, 2, 1].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what is `loadWorkout.mock.calls[1]`?","options":["`[3]`","`[2,3]`","`3`","`[2]`"],"answer":0}]
---
# Testing Drill: Mock function calls #67

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
