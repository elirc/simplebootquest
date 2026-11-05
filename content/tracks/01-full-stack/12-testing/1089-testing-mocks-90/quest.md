---
slug: "testing-mocks-90"
title: "Testing Drill: Mock function calls #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(35);\nconst results = [2, 5, 5, 4].map((id) => loadWorkout(id));\n```\n\nAfter this runs, how many times was `loadWorkout` called?","options":["5","4","3"],"answer":1},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(98);\nconst results = [4, 5, 1].map((id) => loadCar(id));\n```\n\nAfter this runs, what is `loadCar.mock.calls[1]`?","options":["`[4,5]`","`[4]`","`5`","`[5]`"],"answer":3},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(55);\nconst results = [1, 2, 1, 3].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(3)` pass?","options":["No: it compares return values","Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(37);\nconst results = [5, 3, 4, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,6,8,10]`","`[37,6,8,10]`","`[5,3,4,5]`","`[37,3,4,5]`"],"answer":1},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(19);\nconst results = [5, 5].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["3","2","1"],"answer":1}]
---
# Testing Drill: Mock function calls #90

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
