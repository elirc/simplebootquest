---
slug: "testing-mocks-98"
title: "Testing Drill: Mock function calls #98"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(68);\nconst results = [3, 2, 4].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(4)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes","No: it compares return values"],"answer":2},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(78);\nconst results = [4, 2, 3, 4].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`[4]`","`[4,2]`","`[2]`","`2`"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(59);\nconst results = [3, 1, 4].map((id) => loadTicket(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[59,2,8]`","`[3,1,4]`","`[6,2,8]`","`[59,1,4]`"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(25);\nconst results = [1, 1, 1, 1].map((id) => loadCar(id));\n```\n\nAfter this runs, what is `loadCar.mock.calls[1]`?","options":["`[1,1]`","`[1]`","`1`"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(20);\nconst results = [2, 2, 2, 5].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[2]`","`[2,2]`","`2`"],"answer":0}]
---
# Testing Drill: Mock function calls #98

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
