---
slug: "testing-mocks-58"
title: "Testing Drill: Mock function calls #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(47);\nconst results = [2, 3, 5, 1].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,3,5,1]`","`[47,3,5,1]`","`[4,6,10,2]`","`[47,6,10,2]`"],"answer":3},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(91);\nconst results = [1, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["4","1","3","2"],"answer":3},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(31);\nconst results = [5, 3].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["4","2","1","3"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(47);\nconst results = [1, 3, 2].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[47,3,2]`","`[2,6,4]`","`[47,6,4]`","`[1,3,2]`"],"answer":2},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(62);\nconst results = [1, 3, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what is `loadWorkout.mock.calls[1]`?","options":["`[3]`","`[1]`","`3`","`[1,3]`"],"answer":0}]
---
# Testing Drill: Mock function calls #58

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
