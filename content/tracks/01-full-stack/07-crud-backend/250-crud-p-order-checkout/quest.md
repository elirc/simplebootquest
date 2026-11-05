---
slug: "crud-p-order-checkout"
title: "Practice: Validating a Checkout"
type: "code"
language: "js"
xp: 15
hints: ["Merge with a `Map<productId, quantity>` first. Maps keep insertion order."]
---
# Practice: Validating a Checkout

Creating an order touches several tables, and lots can go wrong: the product doesn't exist, it's out of stock, or the client sent a price (never trust a client's price!).

## Your task
Write `prepareOrder(cart, products)`, where `cart` is `[{ productId, quantity }]` and `products` is an array of `{ id, name, priceCents, stock }`. Return either `{ ok: true, lines, totalCents }` or `{ ok: false, errors }`:
- An empty cart → `errors: ['Cart is empty']`.
- Merge duplicate lines for the same product (add up the quantities) **before** checking stock. Keep first-seen order.
- Quantity must be a positive integer: `'Invalid quantity for product <id>'`.
- Unknown product: `'Product <id> not found'`.
- Not enough stock: `'Only <stock> left of <name>'`.
- Collect **all** errors (one per merged line), so the user can fix everything at once.
- `lines` are `{ productId, name, quantity, unitPriceCents, lineTotalCents }`, priced from `products`, **never** from the cart.
