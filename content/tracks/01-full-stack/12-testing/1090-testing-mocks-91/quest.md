---
slug: "testing-mocks-91"
title: "Testing Drill: Mock function calls #91"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(78);\nconst results = [5, 1, 3, 4].map((id) => loadProduct(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[78,2,6,8]`","`[10,2,6,8]`","`[5,1,3,4]`","`[78,1,3,4]`"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(72);\nconst results = [5, 4, 4, 5].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["4","5","3","2"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(28);\nconst results = [3, 1, 3, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`[1]`","`1`","`[3]`","`[3,1]`"],"answer":0},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(31);\nconst results = [4, 3].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[31,3]`","`[4,3]`","`[8,6]`","`[31,6]`"],"answer":3},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(53);\nconst results = [4, 2].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["1","4","2","3"],"answer":2}]
---
# Testing Drill: Mock function calls #91

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
