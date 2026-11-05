---
slug: "testing-mocks-82"
title: "Testing Drill: Mock function calls #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(89);\nconst results = [3, 3, 3, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(44);\nconst results = [5, 1, 5].map((id) => loadSong(id));\n```\n\nAfter this runs, how many times was `loadSong` called?","options":["4","2","3"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(65);\nconst results = [2, 5, 1, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(68);\nconst results = [5, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(65);\nconst results = [5, 2].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`2`","`[2]`","`[5,2]`","`[5]`"],"answer":1}]
---
# Testing Drill: Mock function calls #82

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
