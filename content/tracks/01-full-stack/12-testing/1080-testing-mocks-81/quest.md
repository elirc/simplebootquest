---
slug: "testing-mocks-81"
title: "Testing Drill: Mock function calls #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(52);\nconst results = [2, 2, 4].map((id) => loadTicket(id));\n```\n\nAfter this runs, does `expect(loadTicket).toHaveBeenCalledWith(4)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(79);\nconst results = [4, 1, 5, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["5","4","3"],"answer":1},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(71);\nconst results = [3, 2, 2, 5].map((id) => loadCity(id));\n```\n\nAfter this runs, does `expect(loadCity).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(82);\nconst results = [4, 2, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,2,2]`","`[82,4,4]`","`[8,4,4]`","`[82,2,2]`"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(89);\nconst results = [4, 5, 4, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, how many times was `loadTicket` called?","options":["3","5","2","4"],"answer":3}]
---
# Testing Drill: Mock function calls #81

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
