---
slug: "testing-mocks-69"
title: "Testing Drill: Mock function calls #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(19);\nconst results = [1, 4].map((id) => loadHotel(id));\n```\n\nAfter this runs, what is `loadHotel.mock.calls[1]`?","options":["`[4]`","`[1]`","`4`","`[1,4]`"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(43);\nconst results = [5, 5].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["1","2","3"],"answer":1},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(28);\nconst results = [5, 5, 2, 1].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(81);\nconst results = [5, 4].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what is `loadRecipe.mock.calls[1]`?","options":["`[5]`","`[4]`","`[5,4]`","`4`"],"answer":1},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(67);\nconst results = [5, 2, 4].map((id) => loadFlight(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[67,4,8]`","`[10,4,8]`","`[67,2,4]`","`[5,2,4]`"],"answer":0}]
---
# Testing Drill: Mock function calls #69

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
