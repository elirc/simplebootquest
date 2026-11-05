---
slug: "testing-mocks-74"
title: "Testing Drill: Mock function calls #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(47);\nconst results = [1, 3, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[1,3,5]`","`[47,3,5]`","`[2,6,10]`","`[47,6,10]`"],"answer":3},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(87);\nconst results = [4, 1, 5, 3].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(55);\nconst results = [3, 1, 4, 4].map((id) => loadStudent(id));\n```\n\nAfter this runs, what is `loadStudent.mock.calls[1]`?","options":["`[1]`","`1`","`[3]`","`[3,1]`"],"answer":0},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(18);\nconst results = [5, 1, 5].map((id) => loadProduct(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[5,1,5]`","`[10,2,10]`","`[18,2,10]`","`[18,1,5]`"],"answer":2},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(95);\nconst results = [1, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["2","3","1"],"answer":0}]
---
# Testing Drill: Mock function calls #74

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
