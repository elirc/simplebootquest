---
slug: "testing-mocks-27"
title: "Testing Drill: Mock function calls #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(96);\nconst results = [2, 4, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, what is `loadBook.mock.calls[1]`?","options":["`[2,4]`","`4`","`[4]`","`[2]`"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(33);\nconst results = [2, 4, 4].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["4","3","2"],"answer":1},{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(59);\nconst results = [5, 2, 1].map((id) => loadStudent(id));\n```\n\nAfter this runs, how many times was `loadStudent` called?","options":["4","2","5","3"],"answer":3},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(18);\nconst results = [3, 2, 5, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[3,2,5,5]`","`[18,2,5,5]`","`[6,4,10,10]`","`[18,4,10,10]`"],"answer":3},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(10);\nconst results = [2, 1, 2, 5].map((id) => loadRepo(id));\n```\n\nAfter this runs, how many times was `loadRepo` called?","options":["4","5","3"],"answer":0}]
---
# Testing Drill: Mock function calls #27

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
