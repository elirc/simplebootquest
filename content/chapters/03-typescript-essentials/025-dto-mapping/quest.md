---
slug: "ts-dto-mapping"
title: "Mapping API DTOs to Domain Models"
type: "code"
language: "ts"
xp: 20
hints: ["Write both interfaces first, then the mappers almost write themselves.", "Use `Math.round(total * 100)` to avoid floating-point cents."]
---
# Mapping API DTOs to Domain Models

JSON from an API is a **DTO** (data transfer object): dates are strings, money might be strings, field names are snake_case. Converting it at the boundary into a clean **domain model** keeps the rest of your app simple:

```ts
interface OrderDto { id: string; created_at: string; total_cents: number; status: string }
interface Order    { id: string; createdAt: Date; total: number; status: OrderStatus }

function toOrder(dto: OrderDto): Order { ... }
```

One mapping function, at one boundary, so components never deal with snake_case or date strings.

## Your task

1. `toOrder(dto)` converts:
   - `created_at` (ISO string) → `createdAt: Date`
   - `total_cents` → `total` in currency units (`1999` → `19.99`)
   - `status` → one of `'pending' | 'paid' | 'shipped'`. Unknown statuses become `'pending'`.
   - `line_items` → `items: { name, quantity }[]` (from `{ product_name, qty }`)
2. `toOrderDto(order)` converts back (round to integer cents).
3. `camelize(obj)` converts the **top-level** snake_case keys of any object to camelCase.
