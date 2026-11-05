---
slug: "testing-mocks-42"
title: "Testing Drill: Mock function calls #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(85);\nconst results = [4, 2].map((id) => loadStudent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[85,2]`","`[4,2]`","`[8,4]`","`[85,4]`"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(28);\nconst results = [4, 2, 5, 5].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["3","4","5"],"answer":1},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(99);\nconst results = [1, 5, 3, 2].map((id) => loadMovie(id));\n```\n\nAfter this runs, how many times was `loadMovie` called?","options":["5","4","6","3"],"answer":1},{"prompt":"```js\nconst loadPlant = vi.fn((id) => id * 2);\nloadPlant.mockReturnValueOnce(20);\nconst results = [1, 1, 5, 2].map((id) => loadPlant(id));\n```\n\nAfter this runs, does `expect(loadPlant).toHaveBeenCalledWith(2)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(42);\nconst results = [4, 5, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`5`","`[4]`","`[4,5]`","`[5]`"],"answer":3}]
---
# Testing Drill: Mock function calls #42

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
