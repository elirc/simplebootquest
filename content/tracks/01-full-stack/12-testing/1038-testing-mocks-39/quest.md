---
slug: "testing-mocks-39"
title: "Testing Drill: Mock function calls #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(14);\nconst results = [1, 1, 5, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["4","5","3"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(50);\nconst results = [5, 5, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, what is `loadCar.mock.calls[1]`?","options":["`5`","`[5,5]`","`[5]`"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(22);\nconst results = [5, 3, 4].map((id) => loadTicket(id));\n```\n\nAfter this runs, does `expect(loadTicket).toHaveBeenCalledWith(4)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(28);\nconst results = [1, 4].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(4)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(87);\nconst results = [5, 2, 4].map((id) => loadCity(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,4,8]`","`[87,2,4]`","`[5,2,4]`","`[87,4,8]`"],"answer":3}]
---
# Testing Drill: Mock function calls #39

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
