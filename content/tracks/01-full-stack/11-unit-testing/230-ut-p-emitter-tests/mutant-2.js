// mutant: off removes every listener
function createEmitter() {
  const listeners = new Map();
  const off = (event, fn) => {
    const list = listeners.get(event);
    if (!list) return;
    const i = list.indexOf(fn);
    if (i !== -1) list.length = 0;
  };
  const on = (event, fn) => {
    if (!listeners.has(event)) listeners.set(event, []);
    listeners.get(event).push(fn);
    return () => off(event, fn);
  };
  const once = (event, fn) => {
    const wrapper = (...args) => {
      off(event, wrapper);
      fn(...args);
    };
    return on(event, wrapper);
  };
  const emit = (event, ...args) => {
    const list = [...(listeners.get(event) ?? [])];
    for (const fn of list) fn(...args);
    return list.length;
  };
  return { on, off, once, emit };
}
