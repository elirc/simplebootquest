---
slug: "testing-mocks-35"
title: "Testing Drill: Mock function calls #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(83);\nconst results = [5, 4, 4].map((id) => loadCity(id));\n```\n\nAfter this runs, what is `loadCity.mock.calls[1]`?","options":["`[4]`","`[5]`","`4`","`[5,4]`"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(10);\nconst results = [3, 2, 5, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, does `expect(loadRepo).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(26);\nconst results = [5, 3, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(4)` pass?","options":["Yes","No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(28);\nconst results = [2, 4, 5, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["3","4","5"],"answer":1},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(30);\nconst results = [1, 4, 4, 2].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["3","5","4"],"answer":2}]
---
# Testing Drill: Mock function calls #35

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
