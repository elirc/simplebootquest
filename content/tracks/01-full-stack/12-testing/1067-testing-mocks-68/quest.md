---
slug: "testing-mocks-68"
title: "Testing Drill: Mock function calls #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(63);\nconst results = [4, 2, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,2,5]`","`[63,2,5]`","`[63,4,10]`","`[8,4,10]`"],"answer":2},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(52);\nconst results = [1, 5].map((id) => loadPlant(id));\n```\n\nAfter this runs, does `expect(loadPlant).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(14);\nconst results = [4, 5, 3].map((id) => loadPlant(id));\n```\n\nAfter this runs, how many times was `loadPlant` called?","options":["4","5","2","3"],"answer":3},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(37);\nconst results = [3, 1, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`[3,1]`","`1`","`[1]`","`[3]`"],"answer":2},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(73);\nconst results = [3, 4].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`[3,4]`","`[4]`","`4`","`[3]`"],"answer":1}]
---
# Testing Drill: Mock function calls #68

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
