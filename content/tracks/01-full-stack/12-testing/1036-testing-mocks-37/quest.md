---
slug: "testing-mocks-37"
title: "Testing Drill: Mock function calls #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(15);\nconst results = [4, 3, 5, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[15,3,5,3]`","`[4,3,5,3]`","`[8,6,10,6]`","`[15,6,10,6]`"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(39);\nconst results = [4, 5, 4, 5].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(14);\nconst results = [5, 4, 3].map((id) => loadOrder(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,8,6]`","`[5,4,3]`","`[14,4,3]`","`[14,8,6]`"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(45);\nconst results = [3, 1, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["5","3","4","2"],"answer":1},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(31);\nconst results = [5, 4, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[31,4,2]`","`[31,8,4]`","`[5,4,2]`","`[10,8,4]`"],"answer":1}]
---
# Testing Drill: Mock function calls #37

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
