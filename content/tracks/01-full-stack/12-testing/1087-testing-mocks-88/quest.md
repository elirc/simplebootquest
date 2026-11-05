---
slug: "testing-mocks-88"
title: "Testing Drill: Mock function calls #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(81);\nconst results = [2, 5].map((id) => loadCity(id));\n```\n\nAfter this runs, what is `loadCity.mock.calls[1]`?","options":["`[5]`","`5`","`[2,5]`","`[2]`"],"answer":0},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(89);\nconst results = [5, 2, 1, 2].map((id) => loadOrder(id));\n```\n\nAfter this runs, what is `loadOrder.mock.calls[1]`?","options":["`2`","`[5]`","`[2]`","`[5,2]`"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(70);\nconst results = [1, 2, 1].map((id) => loadSong(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[1,2,1]`","`[2,4,2]`","`[70,4,2]`","`[70,2,1]`"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(69);\nconst results = [5, 3, 3, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, how many times was `loadEvent` called?","options":["5","4","3"],"answer":1},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(17);\nconst results = [5, 3].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[5,3]`","`[17,3]`","`[10,6]`","`[17,6]`"],"answer":3}]
---
# Testing Drill: Mock function calls #88

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
