---
slug: "testing-mocks-19"
title: "Testing Drill: Mock function calls #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(77);\nconst results = [1, 3].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(14);\nconst results = [5, 5, 1, 2].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it compares return values","No: it only checks the first call"],"answer":0},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(23);\nconst results = [5, 3, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, does `expect(loadFlight).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it compares return values","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(77);\nconst results = [4, 5, 4, 1].map((id) => loadEmployee(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[77,5,4,1]`","`[77,10,8,2]`","`[4,5,4,1]`","`[8,10,8,2]`"],"answer":1},{"prompt":"```js\nconst loadProduct = vi.fn((id) => id * 2);\nloadProduct.mockReturnValueOnce(23);\nconst results = [5, 5, 2].map((id) => loadProduct(id));\n```\n\nAfter this runs, how many times was `loadProduct` called?","options":["4","3","2"],"answer":1}]
---
# Testing Drill: Mock function calls #19

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
