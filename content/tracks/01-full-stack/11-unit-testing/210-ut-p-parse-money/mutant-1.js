// mutant: one decimal is read as cents
function parseMoney(text) {
  const m = /^(-)?\$?(\d{1,3}(?:,\d{3})*|\d+)(?:\.(\d{1,2}))?$/.exec(text.trim());
  if (!m) throw new Error('Invalid amount');
  const [, sign, whole, frac = ''] = m;
  const cents = Number(whole.replace(/,/g, '')) * 100 + Number(frac.padStart(2, '0'));
  return sign ? -cents : cents;
}
