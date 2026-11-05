---
slug: "testing-mocks-59"
title: "Testing Drill: Mock function calls #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(36);\nconst results = [4, 5, 2, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[36,10,4,4]`","`[4,5,2,2]`","`[36,5,2,2]`","`[8,10,4,4]`"],"answer":0},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(93);\nconst results = [4, 5, 1].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["2","4","5","3"],"answer":3},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(43);\nconst results = [2, 1, 4, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,2,8,4]`","`[2,1,4,2]`","`[43,2,8,4]`","`[43,1,4,2]`"],"answer":2},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(64);\nconst results = [2, 5, 3].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`5`","`[2,5]`","`[2]`","`[5]`"],"answer":3},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(73);\nconst results = [4, 1, 2, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, what is `loadCar.mock.calls[1]`?","options":["`1`","`[1]`","`[4,1]`","`[4]`"],"answer":1}]
---
# Testing Drill: Mock function calls #59

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
