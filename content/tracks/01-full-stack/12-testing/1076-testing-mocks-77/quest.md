---
slug: "testing-mocks-77"
title: "Testing Drill: Mock function calls #77"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(60);\nconst results = [4, 3, 3].map((id) => loadTransaction(id));\n```\n\nAfter this runs, how many times was `loadTransaction` called?","options":["3","4","2"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(84);\nconst results = [3, 5, 4, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[3,5,4,3]`","`[6,10,8,6]`","`[84,10,8,6]`","`[84,5,4,3]`"],"answer":2},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(74);\nconst results = [2, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(37);\nconst results = [5, 5, 5].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[37,5,5]`","`[10,10,10]`","`[37,10,10]`","`[5,5,5]`"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(74);\nconst results = [5, 2, 4, 5].map((id) => loadCourse(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[5,2,4,5]`","`[74,4,8,10]`","`[10,4,8,10]`","`[74,2,4,5]`"],"answer":1}]
---
# Testing Drill: Mock function calls #77

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
