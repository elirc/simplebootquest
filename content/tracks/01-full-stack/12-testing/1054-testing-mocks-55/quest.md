---
slug: "testing-mocks-55"
title: "Testing Drill: Mock function calls #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(70);\nconst results = [1, 5, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(4)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(74);\nconst results = [4, 1, 2, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(4)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(62);\nconst results = [2, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, how many times was `loadTicket` called?","options":["1","2","4","3"],"answer":1},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(17);\nconst results = [2, 1, 4, 3].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`1`","`[2,1]`","`[1]`","`[2]`"],"answer":2},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(44);\nconst results = [5, 4, 3, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3}]
---
# Testing Drill: Mock function calls #55

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
