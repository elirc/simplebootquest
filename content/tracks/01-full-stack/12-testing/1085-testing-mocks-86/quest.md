---
slug: "testing-mocks-86"
title: "Testing Drill: Mock function calls #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(10);\nconst results = [4, 4, 4, 1].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,4,4,1]`","`[4,4,4,1]`","`[8,8,8,2]`","`[10,8,8,2]`"],"answer":3},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(40);\nconst results = [3, 2, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["5","2","4","3"],"answer":3},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(59);\nconst results = [1, 1].map((id) => loadTask(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,2]`","`[59,1]`","`[59,2]`","`[1,1]`"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(21);\nconst results = [3, 1, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[21,1,2]`","`[6,2,4]`","`[21,2,4]`","`[3,1,2]`"],"answer":2},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(75);\nconst results = [3, 1, 2].map((id) => loadHotel(id));\n```\n\nAfter this runs, how many times was `loadHotel` called?","options":["2","5","3","4"],"answer":2}]
---
# Testing Drill: Mock function calls #86

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
