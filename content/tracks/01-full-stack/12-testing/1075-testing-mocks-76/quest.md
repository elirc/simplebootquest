---
slug: "testing-mocks-76"
title: "Testing Drill: Mock function calls #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(84);\nconst results = [1, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`[2]`","`2`","`[1]`","`[1,2]`"],"answer":0},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(67);\nconst results = [2, 3].map((id) => loadMovie(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[67,6]`","`[2,3]`","`[4,6]`","`[67,3]`"],"answer":0},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(19);\nconst results = [5, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, does `expect(loadTicket).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes"],"answer":3},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(62);\nconst results = [1, 3, 5].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["4","3","5","2"],"answer":1},{"prompt":"```js\nconst loadTask = vi.fn((id) => id * 2);\nloadTask.mockReturnValueOnce(11);\nconst results = [2, 1].map((id) => loadTask(id));\n```\n\nAfter this runs, does `expect(loadTask).toHaveBeenCalledWith(1)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values"],"answer":0}]
---
# Testing Drill: Mock function calls #76

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
