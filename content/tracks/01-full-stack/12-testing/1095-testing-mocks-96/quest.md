---
slug: "testing-mocks-96"
title: "Testing Drill: Mock function calls #96"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(61);\nconst results = [3, 1].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(41);\nconst results = [2, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,6]`","`[2,3]`","`[41,6]`","`[41,3]`"],"answer":2},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(46);\nconst results = [1, 3, 2, 5].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(5)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(23);\nconst results = [3, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["2","1","4","3"],"answer":0},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(91);\nconst results = [2, 2, 5, 5].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what is `loadWorkout.mock.calls[1]`?","options":["`[2]`","`2`","`[2,2]`"],"answer":0}]
---
# Testing Drill: Mock function calls #96

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
