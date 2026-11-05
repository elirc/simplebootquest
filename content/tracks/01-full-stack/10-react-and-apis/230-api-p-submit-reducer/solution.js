const initialSubmit = { status: 'idle', fieldErrors: {}, error: null };

function submitReducer(state, action) {
  switch (action.type) {
    case 'submit':
      if (state.status === 'submitting') return state;
      return { status: 'submitting', fieldErrors: {}, error: null };
    case 'success':
      return { status: 'success', fieldErrors: {}, error: null };
    case 'failure': {
      const issues = action.body?.error?.issues;
      if (action.status === 400 && Array.isArray(issues)) {
        const fieldErrors = {};
        for (const { path, message } of issues) if (!(path in fieldErrors)) fieldErrors[path] = message;
        return { status: 'error', fieldErrors, error: 'Please fix the highlighted fields' };
      }
      const error = action.status === 0 ? 'You appear to be offline' : action.body?.error?.message ?? 'Something went wrong';
      return { status: 'error', fieldErrors: {}, error };
    }
    case 'edit': {
      if (!(action.field in state.fieldErrors)) return state;
      const { [action.field]: _gone, ...fieldErrors } = state.fieldErrors;
      return { ...state, fieldErrors };
    }
    default:
      return state;
  }
}

function canSubmit(state) {
  return state.status !== 'submitting';
}
