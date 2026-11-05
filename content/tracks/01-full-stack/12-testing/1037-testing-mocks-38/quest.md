---
slug: "testing-mocks-38"
title: "Testing Drill: Mock function calls #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(37);\nconst results = [5, 4, 1, 3].map((id) => loadCity(id));\n```\n\nAfter this runs, does `expect(loadCity).toHaveBeenCalledWith(3)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(38);\nconst results = [4, 3].map((id) => loadCity(id));\n```\n\nAfter this runs, how many times was `loadCity` called?","options":["3","2","1","4"],"answer":1},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(78);\nconst results = [2, 4, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, does `expect(loadStudent).toHaveBeenCalledWith(3)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(89);\nconst results = [4, 2].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["4","1","2","3"],"answer":2},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(52);\nconst results = [1, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[1]`","`4`","`[4]`","`[1,4]`"],"answer":2}]
---
# Testing Drill: Mock function calls #38

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
