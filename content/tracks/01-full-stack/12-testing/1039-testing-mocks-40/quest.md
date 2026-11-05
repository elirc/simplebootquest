---
slug: "testing-mocks-40"
title: "Testing Drill: Mock function calls #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(90);\nconst results = [1, 1, 5].map((id) => loadStudent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[90,1,5]`","`[1,1,5]`","`[2,2,10]`","`[90,2,10]`"],"answer":3},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(55);\nconst results = [5, 4, 5].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[4]`","`4`","`[5,4]`","`[5]`"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(58);\nconst results = [3, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[6,10]`","`[58,5]`","`[58,10]`","`[3,5]`"],"answer":2},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(15);\nconst results = [3, 4, 5, 3].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`[3]`","`[3,4]`","`[4]`","`4`"],"answer":2},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(53);\nconst results = [4, 2, 3].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[8,4,6]`","`[4,2,3]`","`[53,2,3]`","`[53,4,6]`"],"answer":3}]
---
# Testing Drill: Mock function calls #40

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
