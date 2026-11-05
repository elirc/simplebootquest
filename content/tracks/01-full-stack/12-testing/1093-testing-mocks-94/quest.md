---
slug: "testing-mocks-94"
title: "Testing Drill: Mock function calls #94"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(15);\nconst results = [1, 4, 1, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[1]`","`4`","`[4]`","`[1,4]`"],"answer":2},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(91);\nconst results = [4, 1, 5].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(31);\nconst results = [2, 5, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["4","2","3","5"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(51);\nconst results = [4, 4, 5, 5].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,4,5,5]`","`[51,8,10,10]`","`[8,8,10,10]`","`[51,4,5,5]`"],"answer":1},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(48);\nconst results = [2, 2, 2, 5].map((id) => loadPlant(id));\n```\n\nAfter this runs, does `expect(loadPlant).toHaveBeenCalledWith(5)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values"],"answer":0}]
---
# Testing Drill: Mock function calls #94

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
