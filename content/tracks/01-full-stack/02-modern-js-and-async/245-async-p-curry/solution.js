function partial(fn, ...preset) {
  return (...rest) => fn(...preset, ...rest);
}

function curry(fn) {
  const collect = (args) => (args.length >= fn.length ? fn(...args) : (...more) => collect([...args, ...more]));
  return (...args) => collect(args);
}
