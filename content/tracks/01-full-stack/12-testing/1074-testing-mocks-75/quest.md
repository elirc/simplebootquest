---
slug: "testing-mocks-75"
title: "Testing Drill: Mock function calls #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(86);\nconst results = [2, 3].map((id) => loadTask(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[86,6]`","`[86,3]`","`[4,6]`","`[2,3]`"],"answer":0},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(86);\nconst results = [3, 5].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(23);\nconst results = [4, 4].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["2","1","3"],"answer":0},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(16);\nconst results = [4, 3, 5, 1].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`3`","`[4]`","`[3]`","`[4,3]`"],"answer":2},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(13);\nconst results = [2, 5, 3].map((id) => loadCity(id));\n```\n\nAfter this runs, how many times was `loadCity` called?","options":["5","4","3","2"],"answer":2}]
---
# Testing Drill: Mock function calls #75

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
