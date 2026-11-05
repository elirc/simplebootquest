---
slug: "testing-mocks-51"
title: "Testing Drill: Mock function calls #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(52);\nconst results = [1, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[52,2]`","`[1,2]`","`[2,4]`","`[52,4]`"],"answer":3},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(15);\nconst results = [4, 3].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["2","1","3","4"],"answer":0},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(60);\nconst results = [2, 3, 4, 3].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[60,6,8,6]`","`[4,6,8,6]`","`[60,3,4,3]`","`[2,3,4,3]`"],"answer":0},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(25);\nconst results = [5, 2, 4, 3].map((id) => loadPlant(id));\n```\n\nAfter this runs, how many times was `loadPlant` called?","options":["6","4","3","5"],"answer":1},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(12);\nconst results = [3, 1, 3, 3].map((id) => loadFlight(id));\n```\n\nAfter this runs, what is `loadFlight.mock.calls[1]`?","options":["`[3]`","`[1]`","`[3,1]`","`1`"],"answer":1}]
---
# Testing Drill: Mock function calls #51

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
