function initialFormState(values) {
  return { values, touched: {}, errors: {}, submitting: false, submitCount: 0 };
}

function formReducer(state, action) {
  switch (action.type) {
    case 'change': {
      const values = { ...state.values, [action.field]: action.value };
      return { ...state, values, errors: action.validate(values) };
    }
    case 'blur':
      return { ...state, touched: { ...state.touched, [action.field]: true } };
    case 'submit': {
      const errors = action.validate(state.values);
      const touched = Object.fromEntries(Object.keys(state.values).map((k) => [k, true]));
      return { ...state, errors, touched, submitCount: state.submitCount + 1, submitting: Object.keys(errors).length === 0 };
    }
    case 'serverErrors':
      return { ...state, errors: action.errors, submitting: false };
    case 'success':
      return initialFormState(state.values);
    default:
      return state;
  }
}

function visibleError(state, field) {
  return state.touched[field] || state.submitCount > 0 ? state.errors[field] : undefined;
}
