---
slug: "testing-mocks-63"
title: "Testing Drill: Mock function calls #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(83);\nconst results = [2, 4, 2, 4].map((id) => loadCity(id));\n```\n\nAfter this runs, how many times was `loadCity` called?","options":["4","2","3","5"],"answer":0},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(81);\nconst results = [3, 1].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["3","1","4","2"],"answer":3},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(37);\nconst results = [1, 2, 2, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, does `expect(loadEmployee).toHaveBeenCalledWith(1)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(32);\nconst results = [5, 2, 4].map((id) => loadPlant(id));\n```\n\nAfter this runs, how many times was `loadPlant` called?","options":["2","3","5","4"],"answer":1},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(36);\nconst results = [3, 2, 2, 2].map((id) => loadPlant(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[6,4,4,4]`","`[36,4,4,4]`","`[36,2,2,2]`","`[3,2,2,2]`"],"answer":1}]
---
# Testing Drill: Mock function calls #63

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
