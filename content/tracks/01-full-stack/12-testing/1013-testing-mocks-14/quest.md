---
slug: "testing-mocks-14"
title: "Testing Drill: Mock function calls #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(76);\nconst results = [1, 3, 5, 3].map((id) => loadSong(id));\n```\n\nAfter this runs, how many times was `loadSong` called?","options":["3","5","4"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(40);\nconst results = [2, 4, 4, 3].map((id) => loadSong(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[40,4,4,3]`","`[4,8,8,6]`","`[2,4,4,3]`","`[40,8,8,6]`"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(67);\nconst results = [1, 1, 2].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what is `loadRecipe.mock.calls[1]`?","options":["`[1]`","`[1,1]`","`1`"],"answer":0},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(17);\nconst results = [3, 4, 3, 2].map((id) => loadRepo(id));\n```\n\nAfter this runs, what is `loadRepo.mock.calls[1]`?","options":["`[4]`","`4`","`[3]`","`[3,4]`"],"answer":0},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(32);\nconst results = [2, 1, 2, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2}]
---
# Testing Drill: Mock function calls #14

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
