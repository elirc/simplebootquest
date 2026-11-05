---
slug: "testing-mocks-49"
title: "Testing Drill: Mock function calls #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(55);\nconst results = [2, 1, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["5","4","3","2"],"answer":2},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(44);\nconst results = [4, 2, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, does `expect(loadStudent).toHaveBeenCalledWith(4)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(86);\nconst results = [2, 5, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`5`","`[2]`","`[2,5]`","`[5]`"],"answer":3},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(73);\nconst results = [1, 5, 1, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,10,2,8]`","`[73,5,1,4]`","`[73,10,2,8]`","`[1,5,1,4]`"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(54);\nconst results = [1, 4, 4, 1].map((id) => loadFlight(id));\n```\n\nAfter this runs, what is `loadFlight.mock.calls[1]`?","options":["`[1]`","`4`","`[4]`","`[1,4]`"],"answer":2}]
---
# Testing Drill: Mock function calls #49

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
