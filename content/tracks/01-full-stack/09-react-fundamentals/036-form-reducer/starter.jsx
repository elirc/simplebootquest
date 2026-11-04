function initialFormState(values) {
  return { values };
}

function formReducer(state, action) {
  return state;
}

function visibleError(state, field) {
  return state.errors?.[field];
}
