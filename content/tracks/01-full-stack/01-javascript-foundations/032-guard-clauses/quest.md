---
slug: "js-guard-clauses"
title: "Guard Clauses & Early Returns"
type: "code"
language: "js"
xp: 15
hints: ["Start with `if (!user) return \"Please log in\";`.", "Use `find` to locate the first out-of-stock item."]
resources: [{"title": "Refactoring Guru: Replace nested conditional with guard clauses", "url": "https://refactoring.guru/replace-nested-conditional-with-guard-clauses"}]
---
# Guard Clauses & Early Returns

Deeply nested `if`s are hard to read:

```js
function canCheckout(user, cart) {
  if (user) {
    if (user.verified) {
      if (cart.items.length > 0) {
        return true;
      } else { return false; }
    } else { return false; }
  } else { return false; }
}
```

**Guard clauses** handle the bad cases first and return early, so the happy path stays un-indented:

```js
function canCheckout(user, cart) {
  if (!user) return false;
  if (!user.verified) return false;
  if (cart.items.length === 0) return false;
  return true;
}
```

This is one of the simplest ways to make code more readable, and reviewers love it.

## Your task

Refactor `checkoutError` using guard clauses. It returns the **first** applicable error message, or `null` if checkout can proceed:

1. No user → `"Please log in"`
2. User not verified → `"Please verify your email"`
3. Empty cart → `"Your cart is empty"`
4. Any item with `quantity > stock` → `"<name> is out of stock"`
5. Total (`price * quantity` summed) over the user's `creditLimit` → `"Over your credit limit"`
