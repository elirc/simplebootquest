---
slug: "testing-mocks-41"
title: "Testing Drill: Mock function calls #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(85);\nconst results = [3, 5, 5, 5].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[6,10,10,10]`","`[85,5,5,5]`","`[3,5,5,5]`","`[85,10,10,10]`"],"answer":3},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(32);\nconst results = [5, 3, 4, 1].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`3`","`[5,3]`","`[5]`","`[3]`"],"answer":3},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(20);\nconst results = [5, 5, 2].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["3","4","2"],"answer":0},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(19);\nconst results = [1, 3, 1].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(1)` pass?","options":["No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(98);\nconst results = [2, 3].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["1","4","2","3"],"answer":2}]
---
# Testing Drill: Mock function calls #41

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
