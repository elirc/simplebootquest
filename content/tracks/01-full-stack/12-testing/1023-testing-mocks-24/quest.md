---
slug: "testing-mocks-24"
title: "Testing Drill: Mock function calls #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(86);\nconst results = [3, 3, 1].map((id) => loadWorkout(id));\n```\n\nAfter this runs, does `expect(loadWorkout).toHaveBeenCalledWith(1)` pass?","options":["Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(11);\nconst results = [1, 2, 3].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(3)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(71);\nconst results = [2, 3, 2].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["3","2","4"],"answer":0},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(29);\nconst results = [3, 5, 1, 5].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["3","4","5"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(33);\nconst results = [5, 3, 5, 2].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`3`","`[5,3]`","`[3]`","`[5]`"],"answer":2}]
---
# Testing Drill: Mock function calls #24

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
