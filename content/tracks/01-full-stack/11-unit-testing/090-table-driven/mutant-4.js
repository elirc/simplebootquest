// mutant: checks the common list case-sensitively
const COMMON = ['password1234', 'qwertyuiop12', '123456789abc'];

function isStrongPassword(pw) {
  if (pw.length < 12) return false;
  if (!/[a-z]/i.test(pw)) return false;
  if (!/[\d ]/.test(pw)) return false;
  if (COMMON.includes(pw)) return false;
  return true;
}
