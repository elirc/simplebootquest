const COMMON_PASSWORDS = ['password', '12345678', '123456789', 'qwerty123', 'iloveyou', 'password1', 'letmein123'];

export function checkPassword(password: string, context: { email: string; name?: string }): string[] {
  const errors: string[] = [];
  // TODO
  return errors;
}

export function passwordStrength(password: string): 'weak' | 'ok' | 'strong' {
  // TODO
  return 'strong';
}
