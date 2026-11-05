---
slug: "testing-mocks-70"
title: "Testing Drill: Mock function calls #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(48);\nconst results = [1, 3, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, does `expect(loadTicket).toHaveBeenCalledWith(1)` pass?","options":["No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(18);\nconst results = [2, 2].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(60);\nconst results = [5, 5].map((id) => loadTask(id));\n```\n\nAfter this runs, how many times was `loadTask` called?","options":["3","2","1"],"answer":1},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(20);\nconst results = [2, 1].map((id) => loadSong(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,2]`","`[20,1]`","`[20,2]`","`[2,1]`"],"answer":2},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(49);\nconst results = [3, 5, 4].map((id) => loadRepo(id));\n```\n\nAfter this runs, what is `loadRepo.mock.calls[1]`?","options":["`5`","`[5]`","`[3]`","`[3,5]`"],"answer":1}]
---
# Testing Drill: Mock function calls #70

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
