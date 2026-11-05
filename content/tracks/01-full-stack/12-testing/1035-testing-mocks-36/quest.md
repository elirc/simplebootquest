---
slug: "testing-mocks-36"
title: "Testing Drill: Mock function calls #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(11);\nconst results = [3, 1, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, how many times was `loadEvent` called?","options":["3","5","4","2"],"answer":0},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(41);\nconst results = [3, 5, 4, 5].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(35);\nconst results = [5, 1, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`[5]`","`[5,1]`","`1`","`[1]`"],"answer":3},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(42);\nconst results = [2, 4, 5, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(3)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(88);\nconst results = [1, 4, 5, 2].map((id) => loadRepo(id));\n```\n\nAfter this runs, what is `loadRepo.mock.calls[1]`?","options":["`[1,4]`","`[4]`","`[1]`","`4`"],"answer":1}]
---
# Testing Drill: Mock function calls #36

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
