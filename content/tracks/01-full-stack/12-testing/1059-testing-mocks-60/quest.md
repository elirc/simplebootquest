---
slug: "testing-mocks-60"
title: "Testing Drill: Mock function calls #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(71);\nconst results = [1, 4, 1, 1].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(20);\nconst results = [5, 5, 5, 1].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(92);\nconst results = [2, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["3","2","1"],"answer":1},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(81);\nconst results = [1, 3, 3].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["3","4","2"],"answer":0},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(52);\nconst results = [4, 5].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`[4,5]`","`[5]`","`5`","`[4]`"],"answer":1}]
---
# Testing Drill: Mock function calls #60

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
