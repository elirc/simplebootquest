function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    getState: () => state,
    setState(update) {
      const partial = typeof update === 'function' ? update(state) : update;
      const changed = Object.keys(partial).some((key) => !Object.is(partial[key], state[key]));
      if (!changed) return;
      const prev = state;
      state = { ...state, ...partial };
      for (const listener of [...listeners]) listener(state, prev);
    },
    subscribe,
    select(selector, listener) {
      let current = selector(state);
      return subscribe((next) => {
        const value = selector(next);
        if (!Object.is(value, current)) {
          current = value;
          listener(value);
        }
      });
    },
  };
}
