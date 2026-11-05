---
slug: "testing-mocks-66"
title: "Testing Drill: Mock function calls #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(80);\nconst results = [5, 2, 3, 3].map((id) => loadTicket(id));\n```\n\nAfter this runs, how many times was `loadTicket` called?","options":["3","4","5"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(78);\nconst results = [1, 5].map((id) => loadBook(id));\n```\n\nAfter this runs, does `expect(loadBook).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values","Yes"],"answer":3},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(15);\nconst results = [5, 5].map((id) => loadHotel(id));\n```\n\nAfter this runs, does `expect(loadHotel).toHaveBeenCalledWith(5)` pass?","options":["Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(35);\nconst results = [1, 4, 3, 1].map((id) => loadFlight(id));\n```\n\nAfter this runs, what is `loadFlight.mock.calls[1]`?","options":["`[1,4]`","`[4]`","`[1]`","`4`"],"answer":1},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(14);\nconst results = [5, 2, 1].map((id) => loadCourse(id));\n```\n\nAfter this runs, what is `loadCourse.mock.calls[1]`?","options":["`[5,2]`","`[5]`","`[2]`","`2`"],"answer":2}]
---
# Testing Drill: Mock function calls #66

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
