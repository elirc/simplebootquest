---
slug: "testing-mocks-12"
title: "Testing Drill: Mock function calls #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(81);\nconst results = [5, 4].map((id) => loadSong(id));\n```\n\nAfter this runs, what is `loadSong.mock.calls[1]`?","options":["`[5]`","`[4]`","`4`","`[5,4]`"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(49);\nconst results = [4, 2, 2, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`[4,2]`","`[4]`","`[2]`","`2`"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(30);\nconst results = [4, 3, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[3]`","`[4]`","`3`","`[4,3]`"],"answer":0},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(18);\nconst results = [3, 2, 3, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, does `expect(loadEmployee).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(90);\nconst results = [4, 3].map((id) => loadRepo(id));\n```\n\nAfter this runs, how many times was `loadRepo` called?","options":["4","3","2","1"],"answer":2}]
---
# Testing Drill: Mock function calls #12

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
