---
slug: "testing-mocks-16"
title: "Testing Drill: Mock function calls #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(73);\nconst results = [5, 4].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[5,4]`","`[73,8]`","`[73,4]`","`[10,8]`"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(73);\nconst results = [4, 3, 5, 3].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(78);\nconst results = [3, 3, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[78,6,10]`","`[3,3,5]`","`[6,6,10]`","`[78,3,5]`"],"answer":0},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(27);\nconst results = [5, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[27,2]`","`[5,2]`","`[27,4]`","`[10,4]`"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(28);\nconst results = [5, 1].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1}]
---
# Testing Drill: Mock function calls #16

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
