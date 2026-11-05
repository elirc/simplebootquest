---
slug: "testing-mocks-18"
title: "Testing Drill: Mock function calls #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(65);\nconst results = [4, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[65,4]`","`[4,4]`","`[8,8]`","`[65,8]`"],"answer":3},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(52);\nconst results = [4, 3, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[8,6,2]`","`[4,3,1]`","`[52,3,1]`","`[52,6,2]`"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(51);\nconst results = [5, 1].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`1`","`[5,1]`","`[1]`","`[5]`"],"answer":2},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(97);\nconst results = [4, 3, 1, 3].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["4","5","3"],"answer":0},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(97);\nconst results = [2, 4].map((id) => loadPlant(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[97,4]`","`[2,4]`","`[4,8]`","`[97,8]`"],"answer":3}]
---
# Testing Drill: Mock function calls #18

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
