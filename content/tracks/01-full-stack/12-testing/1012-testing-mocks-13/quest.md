---
slug: "testing-mocks-13"
title: "Testing Drill: Mock function calls #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(53);\nconst results = [1, 1, 1].map((id) => loadStudent(id));\n```\n\nAfter this runs, what is `loadStudent.mock.calls[1]`?","options":["`[1,1]`","`1`","`[1]`"],"answer":2},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(50);\nconst results = [5, 5, 4, 4].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["5","3","4","2"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(72);\nconst results = [4, 1, 1, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(1)` pass?","options":["Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(10);\nconst results = [5, 5, 2, 3].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,5,2,3]`","`[10,10,4,6]`","`[5,5,2,3]`"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(67);\nconst results = [3, 2, 1, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, how many times was `loadTransaction` called?","options":["5","4","3","6"],"answer":1}]
---
# Testing Drill: Mock function calls #13

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
