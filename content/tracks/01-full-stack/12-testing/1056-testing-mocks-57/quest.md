---
slug: "testing-mocks-57"
title: "Testing Drill: Mock function calls #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(11);\nconst results = [5, 3].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[5,3]`","`3`","`[3]`","`[5]`"],"answer":2},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(25);\nconst results = [1, 5, 3].map((id) => loadPlant(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[25,5,3]`","`[1,5,3]`","`[2,10,6]`","`[25,10,6]`"],"answer":3},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(56);\nconst results = [4, 5, 1, 3].map((id) => loadPlant(id));\n```\n\nAfter this runs, how many times was `loadPlant` called?","options":["5","3","6","4"],"answer":3},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(48);\nconst results = [5, 5].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(64);\nconst results = [4, 4].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["3","1","2"],"answer":2}]
---
# Testing Drill: Mock function calls #57

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
