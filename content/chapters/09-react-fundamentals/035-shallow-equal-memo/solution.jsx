function shallowEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((k) => Object.prototype.hasOwnProperty.call(b, k) && Object.is(a[k], b[k]));
}

function memo(component) {
  let lastProps;
  let lastResult;
  let hasRun = false;
  const wrapped = (props) => {
    if (hasRun && shallowEqual(lastProps, props)) return lastResult;
    hasRun = true;
    lastProps = props;
    wrapped.renders++;
    lastResult = component(props);
    return lastResult;
  };
  wrapped.renders = 0;
  return wrapped;
}
