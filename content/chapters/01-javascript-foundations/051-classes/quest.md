---
slug: "js-classes"
title: "Classes"
type: "code"
language: "js"
xp: 20
hints: ["Declare `#items = [];` as a class field.", "Getters are written `get total() { ... }` and used without parentheses."]
resources: [{"title": "javascript.info: Classes", "url": "https://javascript.info/class"}, {"title": "MDN: Private properties", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties"}]
---
# Classes

Classes bundle data and the functions that operate on it:

```js
class Todo {
  static #nextId = 1;            // private static field (#)

  constructor(title) {
    this.id = Todo.#nextId++;
    this.title = title;
    this.done = false;
  }

  toggle() {                     // method
    this.done = !this.done;
    return this;                 // returning `this` allows chaining
  }

  get label() {                  // getter: accessed like a property
    return `${this.done ? '✓' : '○'} ${this.title}`;
  }
}

const t = new Todo('Learn classes');
t.toggle().label;  // '✓ Learn classes'
```

`#private` fields can't be read from outside the class. Real encapsulation, like the closures you wrote earlier.

## Your task

Write `class ShoppingCart`:

- `constructor()` starts with no items.
- `add(name, price, qty = 1)`: adds the item, or increases the quantity if an item with that name exists. Returns `this`.
- `remove(name)`: removes the item. Returns `this`.
- getter `count`: the total quantity of all items.
- getter `total`: the sum of `price * qty`.
- `items()`: returns a **copy** of the items as `{ name, price, qty }` objects.

Store the items in a private `#items` field.
