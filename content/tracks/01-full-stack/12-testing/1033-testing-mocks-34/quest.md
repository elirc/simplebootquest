---
slug: "testing-mocks-34"
title: "Testing Drill: Mock function calls #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(27);\nconst results = [3, 4, 1].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`4`","`[4]`","`[3,4]`","`[3]`"],"answer":1},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(79);\nconst results = [1, 2, 5, 5].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["5","4","3"],"answer":1},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(68);\nconst results = [4, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, how many times was `loadRepo` called?","options":["4","1","2","3"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(23);\nconst results = [2, 3, 4].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["5","3","4","2"],"answer":1},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(56);\nconst results = [2, 3, 5].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["4","2","5","3"],"answer":3}]
---
# Testing Drill: Mock function calls #34

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
