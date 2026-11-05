---
slug: "testing-mocks-95"
title: "Testing Drill: Mock function calls #95"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(97);\nconst results = [2, 2, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,4,10]`","`[2,2,5]`","`[97,4,10]`","`[97,2,5]`"],"answer":2},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(21);\nconst results = [5, 2].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(10);\nconst results = [4, 2].map((id) => loadMovie(id));\n```\n\nAfter this runs, what is `loadMovie.mock.calls[1]`?","options":["`[2]`","`2`","`[4]`","`[4,2]`"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(48);\nconst results = [1, 1, 3, 5].map((id) => loadStudent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,2,6,10]`","`[48,1,3,5]`","`[1,1,3,5]`","`[48,2,6,10]`"],"answer":3},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(64);\nconst results = [1, 2, 2].map((id) => loadCar(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,4,4]`","`[64,2,2]`","`[1,2,2]`","`[64,4,4]`"],"answer":3}]
---
# Testing Drill: Mock function calls #95

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
