function validateSignup(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Name is required';
  const email = values.email?.trim() ?? '';
  if (!email) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email is invalid';
  if ((values.password ?? '').length < 8) errors.password = 'Password must be at least 8 characters';
  if (values.confirmPassword !== values.password) errors.confirmPassword = 'Passwords do not match';
  return errors;
}

function FieldError({ error, touched }) {
  if (!touched || !error) return null;
  return (
    <p className="error" role="alert">
      {error}
    </p>
  );
}

function SubmitButton({ submitting, disabled }) {
  return (
    <button type="submit" disabled={Boolean(submitting || disabled)}>
      {submitting ? 'Saving…' : 'Sign up'}
    </button>
  );
}
