---
slug: "testing-mocks-23"
title: "Testing Drill: Mock function calls #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(88);\nconst results = [4, 2].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[8,4]`","`[4,2]`","`[88,2]`","`[88,4]`"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(54);\nconst results = [2, 2, 2, 3].map((id) => loadTask(id));\n```\n\nAfter this runs, what is `loadTask.mock.calls[1]`?","options":["`[2]`","`2`","`[2,2]`"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(89);\nconst results = [1, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,4]`","`[89,4]`","`[1,2]`","`[89,2]`"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(52);\nconst results = [2, 3].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,3]`","`[4,6]`","`[52,3]`","`[52,6]`"],"answer":3},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(47);\nconst results = [1, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(3)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #23

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
