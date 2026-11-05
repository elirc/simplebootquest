---
slug: "testing-mocks-78"
title: "Testing Drill: Mock function calls #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(70);\nconst results = [4, 4, 3, 4].map((id) => loadCar(id));\n```\n\nAfter this runs, what is `loadCar.mock.calls[1]`?","options":["`[4]`","`4`","`[4,4]`"],"answer":0},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(77);\nconst results = [2, 5, 4, 5].map((id) => loadMovie(id));\n```\n\nAfter this runs, how many times was `loadMovie` called?","options":["4","5","3"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(42);\nconst results = [3, 1, 1].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[6,2,2]`","`[3,1,1]`","`[42,2,2]`","`[42,1,1]`"],"answer":2},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(23);\nconst results = [3, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, how many times was `loadCar` called?","options":["2","3","1"],"answer":0},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(52);\nconst results = [5, 5, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, what is `loadTask.mock.calls[1]`?","options":["`5`","`[5]`","`[5,5]`"],"answer":1}]
---
# Testing Drill: Mock function calls #78

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
