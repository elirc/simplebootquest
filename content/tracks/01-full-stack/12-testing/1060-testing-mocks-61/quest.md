---
slug: "testing-mocks-61"
title: "Testing Drill: Mock function calls #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(22);\nconst results = [3, 4, 1].map((id) => loadProduct(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[22,8,2]`","`[3,4,1]`","`[6,8,2]`","`[22,4,1]`"],"answer":0},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(97);\nconst results = [5, 5].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(62);\nconst results = [3, 5, 3].map((id) => loadHotel(id));\n```\n\nAfter this runs, how many times was `loadHotel` called?","options":["4","2","3"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(99);\nconst results = [4, 3, 4, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, does `expect(loadTicket).toHaveBeenCalledWith(5)` pass?","options":["No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(13);\nconst results = [1, 3].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":1}]
---
# Testing Drill: Mock function calls #61

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
