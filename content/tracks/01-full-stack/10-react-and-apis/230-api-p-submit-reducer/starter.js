const initialSubmit = { status: 'idle', fieldErrors: {}, error: null };

function submitReducer(state, action) {
  if (action.type === 'submit') return { ...state, status: 'submitting' };
  return state;
}

function canSubmit(state) {
  return true;
}
