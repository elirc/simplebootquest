const COMMON_PASSWORDS = ['password', '12345678', '123456789', 'qwerty123', 'iloveyou', 'password1', 'letmein123'];

export function checkPassword(password: string, context: { email: string; name?: string }): string[] {
  const errors: string[] = [];
  const lower = password.toLowerCase();

  if (password.length < 8) errors.push('Must be at least 8 characters');
  if (password.length > 128) errors.push('Must be at most 128 characters');
  if (COMMON_PASSWORDS.includes(lower)) errors.push('Too common');

  const personal = [context.email.split('@')[0], context.name]
    .filter((s): s is string => typeof s === 'string' && s.length >= 3)
    .map((s) => s.toLowerCase());
  if (personal.some((s) => lower.includes(s))) errors.push('Must not contain your name or email');

  if (password.length > 0 && new Set(password).size === 1) errors.push('Too repetitive');
  return errors;
}

export function passwordStrength(password: string): 'weak' | 'ok' | 'strong' {
  if (password.length >= 16) return 'strong';
  if (password.length >= 10) return 'ok';
  return 'weak';
}
