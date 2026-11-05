---
slug: "testing-mocks-45"
title: "Testing Drill: Mock function calls #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(63);\nconst results = [3, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[3,4]`","`[63,4]`","`[6,8]`","`[63,8]`"],"answer":3},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(99);\nconst results = [2, 4, 5, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["3","4","5"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(70);\nconst results = [4, 5].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(79);\nconst results = [1, 1, 5].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(29);\nconst results = [1, 1].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(1)` pass?","options":["No: it compares return values","Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":1}]
---
# Testing Drill: Mock function calls #45

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
