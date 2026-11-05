const NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const toDate = (iso) => new Date(`${iso}T00:00:00Z`);
const toIso = (d) => d.toISOString().slice(0, 10);

function weekdayName(iso) {
  return NAMES[toDate(iso).getUTCDay()];
}

function nextWeekday(iso) {
  const d = toDate(iso);
  do d.setUTCDate(d.getUTCDate() + 1);
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6);
  return toIso(d);
}

function businessDaysBetween(startIso, endIso) {
  let count = 0;
  for (const d = toDate(startIso); d < toDate(endIso); d.setUTCDate(d.getUTCDate() + 1)) {
    const day = d.getUTCDay();
    if (day !== 0 && day !== 6) count++;
  }
  return count;
}
