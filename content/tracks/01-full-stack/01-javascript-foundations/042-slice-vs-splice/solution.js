function insertAt(array, index, item) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

function removeAt(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

function replaceAt(array, index, item) {
  return array.map((value, i) => (i === index ? item : value));
}

function move(array, from, to) {
  const item = array[from];
  return insertAt(removeAt(array, from), to, item);
}
