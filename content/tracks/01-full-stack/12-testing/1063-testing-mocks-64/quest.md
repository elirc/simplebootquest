---
slug: "testing-mocks-64"
title: "Testing Drill: Mock function calls #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(92);\nconst results = [5, 4, 1, 3].map((id) => loadCity(id));\n```\n\nAfter this runs, what is `loadCity.mock.calls[1]`?","options":["`[5]`","`4`","`[4]`","`[5,4]`"],"answer":2},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(98);\nconst results = [1, 1, 4, 2].map((id) => loadTask(id));\n```\n\nAfter this runs, what is `loadTask.mock.calls[1]`?","options":["`[1,1]`","`[1]`","`1`"],"answer":1},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(15);\nconst results = [3, 2].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(2)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(27);\nconst results = [1, 3, 1].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(56);\nconst results = [3, 3, 5, 4].map((id) => loadTicket(id));\n```\n\nAfter this runs, how many times was `loadTicket` called?","options":["4","3","5"],"answer":0}]
---
# Testing Drill: Mock function calls #64

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
