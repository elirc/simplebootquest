---
slug: "js-rest-parameters"
title: "Rest Parameters & Arguments"
type: "code"
language: "js"
xp: 10
hints: ["`function sumAll(...numbers)` gives you an array called `numbers`.", "Filter out the unwanted parts before joining."]
---
# Rest Parameters & Arguments

A **rest parameter** collects any number of arguments into a real array:

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3); // 6
sum();        // 0

function tag(label, ...items) {
  return `${label}: ${items.join(', ')}`;
}
tag('Fruits', 'apple', 'pear'); // 'Fruits: apple, pear'
```

The rest parameter must come **last**. The opposite operation is **spread**, which expands an array into arguments: `Math.max(...[3, 9, 1])`.

## Your task

1. `sumAll(...numbers)` returns the sum (`0` if there are none).
2. `joinWith(separator, ...parts)` joins the parts with the separator, skipping empty strings, `null` and `undefined`.
3. `maxOf(numbers)` takes an **array** and returns its largest number using `Math.max` and spread. Return `-Infinity` for an empty array (which is what `Math.max()` does anyway).
