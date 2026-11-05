---
slug: "testing-mocks-43"
title: "Testing Drill: Mock function calls #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(51);\nconst results = [2, 3, 1].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["2","3","4","5"],"answer":1},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(62);\nconst results = [3, 2].map((id) => loadEmployee(id));\n```\n\nAfter this runs, does `expect(loadEmployee).toHaveBeenCalledWith(2)` pass?","options":["No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(46);\nconst results = [4, 3, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,3,2]`","`[46,6,4]`","`[46,3,2]`","`[8,6,4]`"],"answer":1},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(94);\nconst results = [3, 3, 2, 1].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[3,3,2,1]`","`[94,3,2,1]`","`[6,6,4,2]`","`[94,6,4,2]`"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(67);\nconst results = [5, 1, 3].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["3","5","4","2"],"answer":0}]
---
# Testing Drill: Mock function calls #43

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
