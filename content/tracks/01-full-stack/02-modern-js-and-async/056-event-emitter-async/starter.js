function createStore(initialState) {
  let state = initialState;
  return {
    getState: () => state,
    setState(update) {},
    subscribe(listener) {},
    select(selector, listener) {},
  };
}
