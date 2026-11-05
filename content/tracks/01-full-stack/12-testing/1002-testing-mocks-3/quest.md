---
slug: "testing-mocks-3"
title: "Testing Drill: Mock function calls #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(99);\nconst results = [3, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, does `expect(loadTicket).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(14);\nconst results = [2, 2, 5, 4].map((id) => loadSong(id));\n```\n\nAfter this runs, how many times was `loadSong` called?","options":["4","3","5"],"answer":0},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(36);\nconst results = [1, 4, 3, 1].map((id) => loadProduct(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[36,4,3,1]`","`[36,8,6,2]`","`[1,4,3,1]`","`[2,8,6,2]`"],"answer":1},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(81);\nconst results = [5, 3, 5].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[81,6,10]`","`[10,6,10]`","`[5,3,5]`","`[81,3,5]`"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(44);\nconst results = [2, 3, 1].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[44,6,2]`","`[4,6,2]`","`[44,3,1]`","`[2,3,1]`"],"answer":0}]
---
# Testing Drill: Mock function calls #3

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
