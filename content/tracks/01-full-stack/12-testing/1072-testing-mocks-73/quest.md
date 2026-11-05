---
slug: "testing-mocks-73"
title: "Testing Drill: Mock function calls #73"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(57);\nconst results = [1, 2, 3].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[57,4,6]`","`[1,2,3]`","`[57,2,3]`","`[2,4,6]`"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(32);\nconst results = [5, 2, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, does `expect(loadStudent).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(27);\nconst results = [1, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(64);\nconst results = [5, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, what is `loadStudent.mock.calls[1]`?","options":["`3`","`[3]`","`[5,3]`","`[5]`"],"answer":1},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(77);\nconst results = [2, 4, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`4`","`[2]`","`[2,4]`","`[4]`"],"answer":3}]
---
# Testing Drill: Mock function calls #73

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
