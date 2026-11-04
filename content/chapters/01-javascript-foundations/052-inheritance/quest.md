---
slug: "js-inheritance"
title: "Inheritance & instanceof"
type: "code"
language: "js"
xp: 15
hints: ["The `Square` constructor can call `super(side, side)`, then set `this.name = \"square\"`.", "In `ValidationError`, call `super(message)` first."]
---
# Inheritance & instanceof

A class can **extend** another, inheriting its methods and overriding some:

```js
class Shape {
  constructor(name) { this.name = name; }
  area() { return 0; }
  describe() { return `${this.name} with area ${this.area().toFixed(2)}`; }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle');              // must call super() before using `this`
    this.radius = radius;
  }
  area() { return Math.PI * this.radius ** 2; }   // override
}

new Circle(1).describe();          // 'circle with area 3.14'
new Circle(1) instanceof Shape;    // true
```

The most common real use of inheritance in web apps is **custom errors**, which you've already met: `class NotFoundError extends Error`.

**Prefer composition** (objects containing other objects) over deep inheritance trees. One level of `extends` is usually plenty.

## Your task

1. `class Shape` with a constructor taking `name`, an `area()` that returns `0`, and a `describe()` method that returns `"<name> with area <area to 2 decimals>"`.
2. `class Rectangle extends Shape` (name `"rectangle"`) and `class Square extends Rectangle` (name `"square"`, constructor takes one `side`).
3. `class ValidationError extends Error` with a `field` property, `name = 'ValidationError'`, and message `"<field> is invalid"`.
