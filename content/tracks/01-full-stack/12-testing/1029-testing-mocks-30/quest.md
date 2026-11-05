---
slug: "testing-mocks-30"
title: "Testing Drill: Mock function calls #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(15);\nconst results = [1, 3].map((id) => loadRepo(id));\n```\n\nAfter this runs, what is `loadRepo.mock.calls[1]`?","options":["`[3]`","`[1,3]`","`[1]`","`3`"],"answer":0},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(56);\nconst results = [5, 5, 4, 3].map((id) => loadOrder(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[56,5,4,3]`","`[5,5,4,3]`","`[56,10,8,6]`","`[10,10,8,6]`"],"answer":2},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(15);\nconst results = [1, 5].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(5)` pass?","options":["Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(69);\nconst results = [2, 3, 1, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(3)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(51);\nconst results = [2, 3].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`[3]`","`[2]`","`[2,3]`","`3`"],"answer":0}]
---
# Testing Drill: Mock function calls #30

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
