---
slug: "react-p-tabs"
title: "Practice: Accessible Tabs"
type: "code"
language: "jsx"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "WAI-ARIA Authoring Practices: Tabs", "url": "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"}]
---
# Practice: Accessible Tabs

Tabs look simple, but screen readers need the WAI-ARIA **tabs pattern**: a `tablist` of `tab`s, each linked to its `tabpanel`.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<Tabs tabs={[{ id, label, content }]} activeId onChange />` rendering a `<div>` containing:
1. `<div role="tablist">` with one `<button>` per tab:
   - `role="tab"`, `id="tab-<id>"`, `aria-controls="panel-<id>"`
   - `aria-selected` true or false
   - `tabIndex` 0 for the active tab and -1 for the others (arrow keys move between tabs, and Tab jumps to the panel)
   - clicking calls `onChange(id)`
2. Only the **active** panel: `<div role="tabpanel" id="panel-<id>" aria-labelledby="tab-<id>">{content}</div>`.

If `activeId` doesn't match any tab, the first tab is active.
