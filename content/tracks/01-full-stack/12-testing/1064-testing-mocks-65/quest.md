---
slug: "testing-mocks-65"
title: "Testing Drill: Mock function calls #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(12);\nconst results = [3, 4].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(4)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(99);\nconst results = [3, 3, 3, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[3,3,3,1]`","`[99,3,3,1]`","`[6,6,6,2]`","`[99,6,6,2]`"],"answer":3},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(59);\nconst results = [5, 4, 4, 1].map((id) => loadPlant(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[5,4,4,1]`","`[59,4,4,1]`","`[59,8,8,2]`","`[10,8,8,2]`"],"answer":2},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(99);\nconst results = [1, 2, 5].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[1,2,5]`","`[2,4,10]`","`[99,4,10]`","`[99,2,5]`"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(51);\nconst results = [5, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #65

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
