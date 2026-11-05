---
slug: "testing-mocks-6"
title: "Testing Drill: Mock function calls #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(25);\nconst results = [1, 1, 5, 2].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`1`","`[1]`","`[1,1]`"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(92);\nconst results = [2, 1, 1, 5].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(5)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(67);\nconst results = [3, 4].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(88);\nconst results = [2, 5, 4].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["2","4","5","3"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(97);\nconst results = [5, 2].map((id) => loadOrder(id));\n```\n\nAfter this runs, does `expect(loadOrder).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0}]
---
# Testing Drill: Mock function calls #6

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
