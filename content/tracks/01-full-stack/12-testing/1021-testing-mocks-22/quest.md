---
slug: "testing-mocks-22"
title: "Testing Drill: Mock function calls #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(40);\nconst results = [2, 3].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(42);\nconst results = [3, 3, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["3","4","2"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(88);\nconst results = [2, 3, 4].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[2,3]`","`[3]`","`3`","`[2]`"],"answer":1},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(35);\nconst results = [4, 5, 1, 3].map((id) => loadEmployee(id));\n```\n\nAfter this runs, does `expect(loadEmployee).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(23);\nconst results = [5, 1].map((id) => loadPlant(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[23,1]`","`[23,2]`","`[10,2]`","`[5,1]`"],"answer":1}]
---
# Testing Drill: Mock function calls #22

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
