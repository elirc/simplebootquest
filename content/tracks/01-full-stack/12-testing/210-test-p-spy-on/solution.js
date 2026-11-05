function spyOn(obj, name) {
  const original = obj[name];
  if (typeof original !== 'function') throw new TypeError(`${name} is not a function`);
  let impl = null;
  const spy = function (...args) {
    spy.calls.push(args);
    return (impl ?? original).apply(this, args);
  };
  spy.calls = [];
  spy.mockReturnValue = (value) => {
    impl = () => value;
    return spy;
  };
  spy.mockImplementation = (fn) => {
    impl = fn;
    return spy;
  };
  spy.restore = () => {
    obj[name] = original;
  };
  obj[name] = spy;
  return spy;
}
