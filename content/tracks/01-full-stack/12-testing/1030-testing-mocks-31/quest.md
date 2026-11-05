---
slug: "testing-mocks-31"
title: "Testing Drill: Mock function calls #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(87);\nconst results = [3, 5, 1].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`[3]`","`[3,5]`","`[5]`","`5`"],"answer":2},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(69);\nconst results = [4, 4].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`4`","`[4,4]`","`[4]`"],"answer":2},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(97);\nconst results = [2, 1].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`[1]`","`[2,1]`","`1`","`[2]`"],"answer":0},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(18);\nconst results = [2, 3].map((id) => loadSong(id));\n```\n\nAfter this runs, what is `loadSong.mock.calls[1]`?","options":["`3`","`[2,3]`","`[3]`","`[2]`"],"answer":2},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(67);\nconst results = [3, 1, 2].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["5","4","2","3"],"answer":3}]
---
# Testing Drill: Mock function calls #31

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
