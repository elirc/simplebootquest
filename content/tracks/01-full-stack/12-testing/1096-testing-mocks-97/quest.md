---
slug: "testing-mocks-97"
title: "Testing Drill: Mock function calls #97"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(29);\nconst results = [2, 1, 5].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["5","3","2","4"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(46);\nconst results = [1, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["1","3","4","2"],"answer":3},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(90);\nconst results = [5, 1, 1].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[5,1,1]`","`[90,2,2]`","`[90,1,1]`","`[10,2,2]`"],"answer":1},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(56);\nconst results = [1, 5, 1].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[1,5,1]`","`[56,10,2]`","`[2,10,2]`","`[56,5,1]`"],"answer":1},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(19);\nconst results = [1, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["2","3","1"],"answer":0}]
---
# Testing Drill: Mock function calls #97

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
