function pipe(...fns) {
  return (input) => fns.reduce((value, fn) => fn(value), input);
}

function compose(...fns) {
  return pipe(...[...fns].reverse());
}

const normaliseEmail = pipe(
  (s) => s.trim(),
  (s) => s.toLowerCase(),
  (s) => s.replace(/\+[^@]*@/, '@'),
);
