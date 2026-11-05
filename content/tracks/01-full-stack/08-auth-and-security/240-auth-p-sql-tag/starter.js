function sql(strings, ...values) {
  return { text: strings.reduce((acc, s, i) => acc + s + (i < values.length ? values[i] : ''), ''), values: [] };
}
sql.raw = (s) => s;
