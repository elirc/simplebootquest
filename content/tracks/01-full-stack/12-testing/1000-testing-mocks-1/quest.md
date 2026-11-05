---
slug: "testing-mocks-1"
title: "Testing Drill: Mock function calls #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(70);\nconst results = [4, 2, 2].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(2)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(68);\nconst results = [5, 4, 4].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(4)` pass?","options":["Yes","No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(38);\nconst results = [3, 1, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["3","4","2"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(64);\nconst results = [1, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[1,1]`","`[64,2]`","`[2,2]`","`[64,1]`"],"answer":1},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(92);\nconst results = [2, 3, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[92,6,6]`","`[4,6,6]`","`[92,3,3]`","`[2,3,3]`"],"answer":0}]
---
# Testing Drill: Mock function calls #1

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
