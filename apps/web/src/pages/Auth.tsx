import { useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { ApiError } from '../api';
import { useAuth } from '../auth';

function Field(props: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  hint?: string;
}) {
  const id = `field-${props.name}`;
  return (
    <div className="field">
      <label htmlFor={id}>{props.label}</label>
      <input
        id={id}
        name={props.name}
        type={props.type ?? 'text'}
        value={props.value}
        autoComplete={props.autoComplete}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${id}-error` : undefined}
        onChange={(e) => props.onChange(e.target.value)}
        required
      />
      {props.hint && !props.error && <small className="muted">{props.hint}</small>}
      {props.error && (
        <small id={`${id}-error`} className="field-error">
          {props.error}
        </small>
      )}
    </div>
  );
}

function useAfterAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/learn';
  return () => navigate(from, { replace: true });
}

export function LoginPage() {
  const { user, login } = useAuth();
  const done = useAfterAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (user) return <Navigate to="/learn" replace />;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login(email, password);
      done();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="card auth-card" onSubmit={onSubmit} noValidate>
        <h1>Welcome back</h1>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <Field label="Email" name="email" type="email" autoComplete="email" value={email} onChange={setEmail} />
        <Field label="Password" name="password" type="password" autoComplete="current-password" value={password} onChange={setPassword} />
        <button className="btn btn-primary btn-block" disabled={submitting}>
          {submitting ? 'Logging in…' : 'Log in'}
        </button>
        <p className="muted center">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export function RegisterPage() {
  const { user, register } = useAuth();
  const done = useAfterAuth();
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (user) return <Navigate to="/learn" replace />;
  const set = (key: keyof typeof values) => (v: string) => setValues((s) => ({ ...s, [key]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    // Client-side checks are for fast feedback only — the server validates again.
    const local: Record<string, string> = {};
    if (!values.name.trim()) local.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) local.email = 'Email is invalid';
    if (values.password.length < 8) local.password = 'Password must be at least 8 characters';
    setErrors(local);
    if (Object.keys(local).length) return;

    setSubmitting(true);
    setFormError(null);
    try {
      await register(values.name, values.email, values.password);
      done();
    } catch (err) {
      if (err instanceof ApiError && err.details) setErrors(err.details);
      setFormError(err instanceof ApiError ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="card auth-card" onSubmit={onSubmit} noValidate>
        <h1>Start your quest</h1>
        <p className="muted">Save your progress, earn XP and keep your streak.</p>
        {formError && (
          <p className="form-error" role="alert">
            {formError}
          </p>
        )}
        <Field label="Name" name="name" autoComplete="nickname" value={values.name} onChange={set('name')} error={errors.name} />
        <Field label="Email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} error={errors.email} />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={set('password')}
          error={errors.password}
          hint="At least 8 characters. A passphrase is great."
        />
        <button className="btn btn-primary btn-block" disabled={submitting}>
          {submitting ? 'Creating account…' : 'Create account'}
        </button>
        <p className="muted center">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
