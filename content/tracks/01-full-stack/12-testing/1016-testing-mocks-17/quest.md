---
slug: "testing-mocks-17"
title: "Testing Drill: Mock function calls #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(86);\nconst results = [1, 5, 4].map((id) => loadOrder(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[86,10,8]`","`[1,5,4]`","`[86,5,4]`","`[2,10,8]`"],"answer":0},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(27);\nconst results = [2, 3].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(95);\nconst results = [2, 2, 4, 4].map((id) => loadSong(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,4,8,8]`","`[95,2,4,4]`","`[2,2,4,4]`","`[95,4,8,8]`"],"answer":3},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(51);\nconst results = [1, 5, 4, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`[1]`","`[5]`","`5`","`[1,5]`"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(67);\nconst results = [1, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":0}]
---
# Testing Drill: Mock function calls #17

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
