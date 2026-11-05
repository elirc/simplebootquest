function parseRows(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  let wasQuoted = false;
  const endField = () => {
    row.push(wasQuoted ? field : field.trim());
    field = '';
    wasQuoted = false;
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"' && field.trim() === '') {
      quoted = true;
      wasQuoted = true;
      field = '';
    } else if (ch === ',') {
      endField();
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      endField();
      rows.push(row);
      row = [];
    } else {
      field += ch;
    }
  }
  if (field !== '' || wasQuoted || row.length) {
    endField();
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ''));
}

function parseCsv(text) {
  const [header, ...data] = parseRows(text);
  if (!header) return [];
  return data.map((fields, i) => {
    if (fields.length !== header.length) throw new Error(`Row ${i + 1} has ${fields.length} fields, expected ${header.length}`);
    return Object.fromEntries(header.map((key, j) => [key, fields[j]]));
  });
}
