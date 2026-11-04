function multiplicationTable(n) {
  const table = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push((i + 1) * (j + 1));
    table.push(row);
  }
  return table;
}

function transpose(matrix) {
  if (matrix.length === 0) return [];
  const out = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const row = [];
    for (let r = 0; r < matrix.length; r++) row.push(matrix[r][col]);
    out.push(row);
  }
  return out;
}

function hasPairWithSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return true;
    }
  }
  return false;
}
