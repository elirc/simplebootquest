---
slug: "testing-mocks-25"
title: "Testing Drill: Mock function calls #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(83);\nconst results = [3, 3, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[83,3,2]`","`[3,3,2]`","`[83,6,4]`","`[6,6,4]`"],"answer":2},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(84);\nconst results = [2, 1].map((id) => loadPlant(id));\n```\n\nAfter this runs, does `expect(loadPlant).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(32);\nconst results = [4, 3].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[8,6]`","`[32,3]`","`[4,3]`","`[32,6]`"],"answer":3},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(16);\nconst results = [3, 1, 1].map((id) => loadRepo(id));\n```\n\nAfter this runs, does `expect(loadRepo).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(59);\nconst results = [2, 4, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["4","3","2"],"answer":1}]
---
# Testing Drill: Mock function calls #25

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
