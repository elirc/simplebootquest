---
slug: "testing-mocks-44"
title: "Testing Drill: Mock function calls #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(13);\nconst results = [2, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, how many times was `loadRepo` called?","options":["1","3","4","2"],"answer":3},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(54);\nconst results = [5, 1, 5, 2].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(92);\nconst results = [1, 3, 4, 3].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[92,6,8,6]`","`[1,3,4,3]`","`[2,6,8,6]`","`[92,3,4,3]`"],"answer":0},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(57);\nconst results = [4, 4, 2].map((id) => loadCity(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[8,8,4]`","`[4,4,2]`","`[57,8,4]`","`[57,4,2]`"],"answer":2},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(74);\nconst results = [4, 5, 2, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call"],"answer":0}]
---
# Testing Drill: Mock function calls #44

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
