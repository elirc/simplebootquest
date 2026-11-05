---
slug: "testing-mocks-46"
title: "Testing Drill: Mock function calls #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(11);\nconst results = [1, 4, 2].map((id) => loadHotel(id));\n```\n\nAfter this runs, what is `loadHotel.mock.calls[1]`?","options":["`4`","`[1]`","`[1,4]`","`[4]`"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(44);\nconst results = [1, 2, 1].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["2","3","4"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(31);\nconst results = [3, 3, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`[3,3]`","`3`","`[3]`"],"answer":2},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(36);\nconst results = [5, 3, 2, 4].map((id) => loadTicket(id));\n```\n\nAfter this runs, how many times was `loadTicket` called?","options":["6","5","3","4"],"answer":3},{"prompt":"```js\nconst loadOrder = vi.fn((id) => id * 2);\nloadOrder.mockReturnValueOnce(53);\nconst results = [2, 2, 3, 1].map((id) => loadOrder(id));\n```\n\nAfter this runs, how many times was `loadOrder` called?","options":["5","4","3"],"answer":1}]
---
# Testing Drill: Mock function calls #46

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
