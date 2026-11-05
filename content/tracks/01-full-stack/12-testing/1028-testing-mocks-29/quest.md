---
slug: "testing-mocks-29"
title: "Testing Drill: Mock function calls #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(46);\nconst results = [5, 4, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(4)` pass?","options":["No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(22);\nconst results = [3, 5, 4, 4].map((id) => loadHotel(id));\n```\n\nAfter this runs, does `expect(loadHotel).toHaveBeenCalledWith(4)` pass?","options":["No: it compares return values","Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":1},{"prompt":"```js\nconst loadBook = vi.fn((id) => id * 2);\nloadBook.mockReturnValueOnce(88);\nconst results = [4, 1, 4].map((id) => loadBook(id));\n```\n\nAfter this runs, how many times was `loadBook` called?","options":["2","4","3"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(83);\nconst results = [3, 3, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(4)` pass?","options":["No: it compares return values","Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call"],"answer":1},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(90);\nconst results = [1, 4, 5].map((id) => loadTransaction(id));\n```\n\nAfter this runs, what is `loadTransaction.mock.calls[1]`?","options":["`[1]`","`[4]`","`[1,4]`","`4`"],"answer":1}]
---
# Testing Drill: Mock function calls #29

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
