---
slug: "ts-p-overloads"
title: "Practice: Function Overloads"
type: "code"
language: "ts"
xp: 15
hints: ["Overload signatures come first; one implementation handles every case."]
resources: [{"title": "TS Handbook: Function overloads", "url": "https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads"}]
---
# Practice: Function Overloads

**Overloads** describe a function whose return type depends on its input:

```ts
function parse(value: string): number;
function parse(value: string[]): number[];
function parse(value: string | string[]): number | number[] {   // implementation signature
  return Array.isArray(value) ? value.map(Number) : Number(value);
}
```

Callers get precise types: `parse('1')` is `number`, while `parse(['1'])` is `number[]`.

## Your task
Implement `formatValue` with three overloads:

- `formatValue(n: number)` → `"1,234.5"` (en-US, up to 2 decimals)
- `formatValue(d: Date)` → `"2026-03-05"` (UTC)
- `formatValue(list: (number | Date)[])` → the formatted items joined with `", "`
