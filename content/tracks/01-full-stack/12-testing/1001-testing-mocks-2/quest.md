---
slug: "testing-mocks-2"
title: "Testing Drill: Mock function calls #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(33);\nconst results = [5, 4, 5, 4].map((id) => loadPlant(id));\n```\n\nAfter this runs, how many times was `loadPlant` called?","options":["5","4","3","2"],"answer":1},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(48);\nconst results = [4, 2, 5, 4].map((id) => loadSong(id));\n```\n\nAfter this runs, what is `loadSong.mock.calls[1]`?","options":["`2`","`[4]`","`[2]`","`[4,2]`"],"answer":2},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(37);\nconst results = [3, 1].map((id) => loadCity(id));\n```\n\nAfter this runs, does `expect(loadCity).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(82);\nconst results = [3, 3, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["4","2","3"],"answer":2},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(21);\nconst results = [4, 2, 3].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what is `loadRecipe.mock.calls[1]`?","options":["`2`","`[4,2]`","`[4]`","`[2]`"],"answer":3}]
---
# Testing Drill: Mock function calls #2

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
