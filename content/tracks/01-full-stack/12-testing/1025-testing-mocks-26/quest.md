---
slug: "testing-mocks-26"
title: "Testing Drill: Mock function calls #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(64);\nconst results = [4, 1, 4, 3].map((id) => loadProduct(id));\n```\n\nAfter this runs, what is `loadProduct.mock.calls[1]`?","options":["`[4]`","`[4,1]`","`1`","`[1]`"],"answer":3},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(27);\nconst results = [4, 5, 4, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what is `loadEmployee.mock.calls[1]`?","options":["`5`","`[5]`","`[4,5]`","`[4]`"],"answer":1},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(76);\nconst results = [2, 4, 1, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["3","5","4"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(78);\nconst results = [4, 3, 3, 5].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(5)` pass?","options":["No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(16);\nconst results = [5, 1, 5, 1].map((id) => loadHotel(id));\n```\n\nAfter this runs, what is `loadHotel.mock.calls[1]`?","options":["`[1]`","`[5,1]`","`[5]`","`1`"],"answer":0}]
---
# Testing Drill: Mock function calls #26

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
