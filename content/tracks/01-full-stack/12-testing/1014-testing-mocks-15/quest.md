---
slug: "testing-mocks-15"
title: "Testing Drill: Mock function calls #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(87);\nconst results = [4, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(85);\nconst results = [5, 5, 3, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[85,10,6,2]`","`[5,5,3,1]`","`[85,5,3,1]`","`[10,10,6,2]`"],"answer":0},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(23);\nconst results = [5, 5, 1, 1].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(25);\nconst results = [5, 4, 2].map((id) => loadCar(id));\n```\n\nAfter this runs, how many times was `loadCar` called?","options":["5","2","4","3"],"answer":3},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(64);\nconst results = [2, 1, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,2,2]`","`[64,2,2]`","`[64,1,1]`","`[2,1,1]`"],"answer":1}]
---
# Testing Drill: Mock function calls #15

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
