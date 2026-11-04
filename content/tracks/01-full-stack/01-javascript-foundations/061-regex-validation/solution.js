function isHexColor(s) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s);
}

function isUsername(s) {
  return /^[a-zA-Z]\w{2,15}$/.test(s);
}

function parseDate(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  return m ? { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) } : null;
}

function extractHashtags(text) {
  return [...text.matchAll(/#(\w+)/g)].map((m) => m[1].toLowerCase());
}
