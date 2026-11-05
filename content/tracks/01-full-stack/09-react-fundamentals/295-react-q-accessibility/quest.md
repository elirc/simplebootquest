---
slug: "react-q-accessibility"
title: "Quiz: Accessibility Basics"
type: "quiz"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "MDN: Accessibility", "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"}, {"title": "Testing Library: Which query should I use?", "url": "https://testing-library.com/docs/queries/about/#priority"}]
questions: [{"prompt": "Which is the accessible way to make a clickable \"Delete\" control?", "options": ["<div onClick={del}>Delete</div>", "<button type=\"button\" onClick={del}>Delete</button>", "<span role=\"link\">Delete</span>"], "answer": 1}, {"prompt": "An icon-only button shows 🗑. How do screen readers know what it does?", "options": ["They read the emoji", "Give it an accessible name, e.g. aria-label=\"Delete todo\"", "Add a title to the parent div"], "answer": 1}, {"prompt": "What alt text should a purely decorative divider image have?", "options": ["alt=\"image\"", "alt=\"\" (empty), so screen readers skip it", "No alt attribute at all"], "answer": 1}, {"prompt": "Which Testing Library query best reflects how users find a submit button?", "options": ["getByTestId(\"submit\")", "getByRole(\"button\", { name: /submit/i })", "container.querySelector(\".btn\")"], "answer": 1}, {"prompt": "An input is invalid. What should you add besides a red border?", "options": ["Nothing", "An error message linked with aria-describedby, and aria-invalid=\"true\"", "A tooltip on hover only"], "answer": 1}, {"prompt": "Should you add role=\"button\" to a native <button>?", "options": ["Yes, always", "No: native elements already have the right role. Redundant ARIA adds noise"], "answer": 1}]
---
# Quiz: Accessibility Basics

Accessible components are usually **better components**: they work with the keyboard, read clearly to screen readers, and are easier to test. Testing Library's `getByRole` queries only find what assistive tech can find.

1. **Use the right element**: `<button>` for actions, `<a href>` for navigation. A `<div onClick>` isn't focusable and doesn't respond to Enter or Space.
2. **Every input needs a label**: `<label htmlFor>`, or `aria-label` when there's no visible label.
3. **Images need `alt`**: describe the content, or use `alt=""` for decorative images.
4. **Don't rely on colour alone**: an error also needs text and `aria-invalid`.
5. **ARIA is a last resort**: "No ARIA is better than bad ARIA." Native elements come with roles and keyboard support built in.
