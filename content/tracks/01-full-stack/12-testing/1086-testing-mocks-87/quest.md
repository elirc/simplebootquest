---
slug: "testing-mocks-87"
title: "Testing Drill: Mock function calls #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(33);\nconst results = [2, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(2)` pass?","options":["No: it compares return values","Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(55);\nconst results = [1, 3, 3].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[1]`","`[1,3]`","`3`","`[3]`"],"answer":3},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(17);\nconst results = [1, 5].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(5)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(78);\nconst results = [2, 4, 4, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, how many times was `loadRecipe` called?","options":["3","5","4"],"answer":2},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(72);\nconst results = [5, 1].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1}]
---
# Testing Drill: Mock function calls #87

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
