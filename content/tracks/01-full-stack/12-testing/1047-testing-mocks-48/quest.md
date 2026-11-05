---
slug: "testing-mocks-48"
title: "Testing Drill: Mock function calls #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(99);\nconst results = [1, 5].map((id) => loadPlant(id));\n```\n\nAfter this runs, does `expect(loadPlant).toHaveBeenCalledWith(5)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(92);\nconst results = [1, 1].map((id) => loadOrder(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[1,1]`","`[92,2]`","`[92,1]`","`[2,2]`"],"answer":1},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(69);\nconst results = [4, 1, 1, 2].map((id) => loadMovie(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,1,1,2]`","`[69,2,2,4]`","`[69,1,1,2]`","`[8,2,2,4]`"],"answer":1},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(47);\nconst results = [2, 4, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["4","3","2"],"answer":1},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(40);\nconst results = [5, 1, 4, 2].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(2)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #48

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
