---
slug: "testing-mocks-20"
title: "Testing Drill: Mock function calls #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(28);\nconst results = [1, 5].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what is `loadEmployee.mock.calls[1]`?","options":["`5`","`[1]`","`[5]`","`[1,5]`"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(46);\nconst results = [4, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`4`","`[4,4]`","`[4]`"],"answer":2},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(20);\nconst results = [4, 4].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,4]`","`[8,8]`","`[20,8]`","`[20,4]`"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(73);\nconst results = [1, 2, 2].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(95);\nconst results = [3, 4, 1, 2].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["3","6","4","5"],"answer":2}]
---
# Testing Drill: Mock function calls #20

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
