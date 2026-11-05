---
slug: "testing-mocks-8"
title: "Testing Drill: Mock function calls #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(22);\nconst results = [1, 2, 4].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what is `loadEmployee.mock.calls[1]`?","options":["`[2]`","`[1,2]`","`[1]`","`2`"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(75);\nconst results = [2, 2, 2].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[75,4,4]`","`[4,4,4]`","`[75,2,2]`","`[2,2,2]`"],"answer":0},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(13);\nconst results = [3, 1, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(24);\nconst results = [3, 3, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[3,3,5]`","`[6,6,10]`","`[24,3,5]`","`[24,6,10]`"],"answer":3},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(78);\nconst results = [5, 4, 1].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,8,2]`","`[5,4,1]`","`[78,8,2]`","`[78,4,1]`"],"answer":2}]
---
# Testing Drill: Mock function calls #8

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
