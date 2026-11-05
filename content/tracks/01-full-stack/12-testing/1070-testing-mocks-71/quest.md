---
slug: "testing-mocks-71"
title: "Testing Drill: Mock function calls #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(60);\nconst results = [2, 1, 3].map((id) => loadProduct(id));\n```\n\nAfter this runs, does `expect(loadProduct).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(67);\nconst results = [1, 3, 5].map((id) => loadStudent(id));\n```\n\nAfter this runs, does `expect(loadStudent).toHaveBeenCalledWith(5)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(24);\nconst results = [1, 1, 4, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(2)` pass?","options":["No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(12);\nconst results = [3, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it compares return values","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(52);\nconst results = [5, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":1}]
---
# Testing Drill: Mock function calls #71

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
