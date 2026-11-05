---
slug: "testing-mocks-50"
title: "Testing Drill: Mock function calls #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(80);\nconst results = [4, 4].map((id) => loadRepo(id));\n```\n\nAfter this runs, does `expect(loadRepo).toHaveBeenCalledWith(4)` pass?","options":["Yes","No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(17);\nconst results = [1, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":1},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(13);\nconst results = [4, 2, 4, 5].map((id) => loadOrder(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[13,2,4,5]`","`[8,4,8,10]`","`[13,4,8,10]`","`[4,2,4,5]`"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(21);\nconst results = [2, 2, 2].map((id) => loadTicket(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,2,2]`","`[4,4,4]`","`[21,2,2]`","`[21,4,4]`"],"answer":3},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(80);\nconst results = [5, 1, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2}]
---
# Testing Drill: Mock function calls #50

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
