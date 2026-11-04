function formatMoney(cents, currency, locale) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(cents / 100);
}

function compactNumber(n) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n);
}

function listNames(names) {
  return new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(names);
}

function formatDate(iso) {
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
}
