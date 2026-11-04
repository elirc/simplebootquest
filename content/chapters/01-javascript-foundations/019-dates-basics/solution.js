const DAY_MS = 24 * 60 * 60 * 1000;
const toDate = (iso) => new Date(`${iso}T00:00:00Z`);

function daysBetween(isoA, isoB) {
  return Math.round((toDate(isoB).getTime() - toDate(isoA).getTime()) / DAY_MS);
}

function addDays(iso, days) {
  const d = toDate(iso);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function isWeekend(iso) {
  const day = toDate(iso).getUTCDay();
  return day === 0 || day === 6;
}
