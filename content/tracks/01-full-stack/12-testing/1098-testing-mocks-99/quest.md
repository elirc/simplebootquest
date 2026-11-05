---
slug: "testing-mocks-99"
title: "Testing Drill: Mock function calls #99"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(60);\nconst results = [4, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[4,1]`","`[1]`","`1`","`[4]`"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(54);\nconst results = [2, 4].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["3","4","1","2"],"answer":3},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(68);\nconst results = [3, 2].map((id) => loadHotel(id));\n```\n\nAfter this runs, does `expect(loadHotel).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(11);\nconst results = [3, 2, 4, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, what is `loadStudent.mock.calls[1]`?","options":["`[2]`","`[3]`","`[3,2]`","`2`"],"answer":0},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(30);\nconst results = [4, 3].map((id) => loadRecipe(id));\n```\n\nAfter this runs, how many times was `loadRecipe` called?","options":["3","2","1","4"],"answer":1}]
---
# Testing Drill: Mock function calls #99

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
