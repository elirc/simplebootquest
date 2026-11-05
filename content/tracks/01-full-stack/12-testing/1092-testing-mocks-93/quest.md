---
slug: "testing-mocks-93"
title: "Testing Drill: Mock function calls #93"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(42);\nconst results = [5, 5, 5, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["3","2","5","4"],"answer":3},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(64);\nconst results = [3, 3, 3, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(89);\nconst results = [2, 1, 4].map((id) => loadCity(id));\n```\n\nAfter this runs, does `expect(loadCity).toHaveBeenCalledWith(4)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(67);\nconst results = [1, 2].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(53);\nconst results = [3, 2, 3, 3].map((id) => loadTicket(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[53,2,3,3]`","`[6,4,6,6]`","`[3,2,3,3]`","`[53,4,6,6]`"],"answer":3}]
---
# Testing Drill: Mock function calls #93

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
