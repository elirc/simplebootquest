---
slug: "testing-mocks-32"
title: "Testing Drill: Mock function calls #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(73);\nconst results = [2, 1].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["4","1","2","3"],"answer":2},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(13);\nconst results = [3, 2, 4, 2].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`[3]`","`[2]`","`[3,2]`","`2`"],"answer":1},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(76);\nconst results = [2, 5, 3].map((id) => loadFlight(id));\n```\n\nAfter this runs, what is `loadFlight.mock.calls[1]`?","options":["`5`","`[2,5]`","`[5]`","`[2]`"],"answer":2},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(19);\nconst results = [4, 5].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["2","3","4","1"],"answer":0},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(14);\nconst results = [5, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, does `expect(loadEmployee).toHaveBeenCalledWith(1)` pass?","options":["Yes","No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":0}]
---
# Testing Drill: Mock function calls #32

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
