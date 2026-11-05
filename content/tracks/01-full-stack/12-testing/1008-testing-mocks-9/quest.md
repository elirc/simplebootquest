---
slug: "testing-mocks-9"
title: "Testing Drill: Mock function calls #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(93);\nconst results = [1, 5, 2].map((id) => loadPlant(id));\n```\n\nAfter this runs, does `expect(loadPlant).toHaveBeenCalledWith(2)` pass?","options":["No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(58);\nconst results = [3, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, does `expect(loadStudent).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(15);\nconst results = [5, 5].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["2","1","3"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(29);\nconst results = [2, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, does `expect(loadRepo).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(20);\nconst results = [1, 5].map((id) => loadPlant(id));\n```\n\nAfter this runs, what is `loadPlant.mock.calls[1]`?","options":["`[1,5]`","`[5]`","`5`","`[1]`"],"answer":1}]
---
# Testing Drill: Mock function calls #9

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
