class Raw {
  constructor(text) {
    this.text = text;
  }
}

function sql(strings, ...values) {
  let text = strings[0];
  const params = [];
  values.forEach((value, i) => {
    if (value instanceof Raw) {
      text += value.text;
    } else if (Array.isArray(value)) {
      if (value.length === 0) throw new Error('Empty list in sql');
      text += value.map((v) => {
        params.push(v);
        return `$${params.length}`;
      }).join(', ');
    } else {
      params.push(value);
      text += `$${params.length}`;
    }
    text += strings[i + 1];
  });
  return { text, values: params };
}
sql.raw = (s) => new Raw(s);
