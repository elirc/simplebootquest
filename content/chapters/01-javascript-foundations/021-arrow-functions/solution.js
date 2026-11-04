const double = (n) => n * 2;

const isEven = (n) => n % 2 === 0;

const makeUser = (name, age) => ({ name, age, isAdult: age >= 18 });

const applyTwice = (fn, value) => fn(fn(value));
