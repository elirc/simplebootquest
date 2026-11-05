---
slug: "testing-mocks-89"
title: "Testing Drill: Mock function calls #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(69);\nconst results = [1, 2, 1, 4].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[69,4,2,8]`","`[2,4,2,8]`","`[1,2,1,4]`","`[69,2,1,4]`"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(31);\nconst results = [2, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(82);\nconst results = [5, 3].map((id) => loadCity(id));\n```\n\nAfter this runs, does `expect(loadCity).toHaveBeenCalledWith(3)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(12);\nconst results = [5, 5].map((id) => loadEvent(id));\n```\n\nAfter this runs, what is `loadEvent.mock.calls[1]`?","options":["`[5,5]`","`[5]`","`5`"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(84);\nconst results = [3, 3].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(3)` pass?","options":["No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":1}]
---
# Testing Drill: Mock function calls #89

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
