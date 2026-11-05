function pluralize(count, word, plural) {
  let form = word;
  if (count !== 1) {
    if (plural) form = plural;
    else if (/[^aeiou]y$/.test(word)) form = word.slice(0, -1) + 'ies';
    else form = word + 's';
  }
  return `${count.toLocaleString('en-US')} ${form}`;
}
