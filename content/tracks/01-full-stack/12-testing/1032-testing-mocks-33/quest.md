---
slug: "testing-mocks-33"
title: "Testing Drill: Mock function calls #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(82);\nconst results = [3, 4, 5, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`[3]`","`[4]`","`4`","`[3,4]`"],"answer":1},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(38);\nconst results = [1, 5, 2].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["2","4","3","5"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(26);\nconst results = [3, 5, 5, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(41);\nconst results = [4, 2, 5, 5].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(15);\nconst results = [1, 3].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`[1,3]`","`3`","`[3]`","`[1]`"],"answer":2}]
---
# Testing Drill: Mock function calls #33

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
