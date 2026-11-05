function convert(cell) {
  if (cell === 'true') return true;
  if (cell === 'false') return false;
  if (cell === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(cell)) return Number(cell);
  if (cell.length >= 2 && cell.startsWith('"') && cell.endsWith('"')) return cell.slice(1, -1);
  return cell;
}

function parseTable(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return [];
  const header = lines[0].split('|').map((c) => c.trim());
  return lines.slice(1).map((line, i) => {
    const cells = line.split('|').map((c) => c.trim());
    if (cells.length !== header.length) throw new Error(`Row ${i + 1} has ${cells.length} cells, expected ${header.length}`);
    return Object.fromEntries(header.map((h, j) => [h, convert(cells[j])]));
  });
}

function formatName(template, row) {
  return template.replace(/\$(\w+)/g, (match, key) => {
    if (!(key in row)) return match;
    const v = row[key];
    return typeof v === 'string' ? `"${v}"` : String(v);
  });
}
