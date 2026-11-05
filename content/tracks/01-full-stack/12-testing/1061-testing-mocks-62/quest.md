---
slug: "testing-mocks-62"
title: "Testing Drill: Mock function calls #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(81);\nconst results = [4, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, how many times was `loadTransaction` called?","options":["2","3","1","4"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(38);\nconst results = [1, 2, 4, 3].map((id) => loadRepo(id));\n```\n\nAfter this runs, what is `loadRepo.mock.calls[1]`?","options":["`2`","`[2]`","`[1,2]`","`[1]`"],"answer":1},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(30);\nconst results = [3, 1, 5, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(17);\nconst results = [1, 5, 5].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(93);\nconst results = [1, 3, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0}]
---
# Testing Drill: Mock function calls #62

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
