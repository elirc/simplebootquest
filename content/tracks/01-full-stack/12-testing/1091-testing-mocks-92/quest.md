---
slug: "testing-mocks-92"
title: "Testing Drill: Mock function calls #92"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(85);\nconst results = [1, 2, 3].map((id) => loadMovie(id));\n```\n\nAfter this runs, how many times was `loadMovie` called?","options":["3","2","4","5"],"answer":0},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(20);\nconst results = [1, 3, 1].map((id) => loadBook(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[2,6,2]`","`[20,6,2]`","`[1,3,1]`","`[20,3,1]`"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(72);\nconst results = [2, 4, 3].map((id) => loadRecipe(id));\n```\n\nAfter this runs, does `expect(loadRecipe).toHaveBeenCalledWith(3)` pass?","options":["No: it only checks the first call","Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":1},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(84);\nconst results = [5, 4].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what is `loadWorkout.mock.calls[1]`?","options":["`[4]`","`4`","`[5]`","`[5,4]`"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(82);\nconst results = [2, 1, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, how many times was `loadEvent` called?","options":["3","5","2","4"],"answer":0}]
---
# Testing Drill: Mock function calls #92

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
