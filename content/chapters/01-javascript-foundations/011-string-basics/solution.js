function shout(text) {
  return text.trim().toUpperCase() + '!';
}

function initials(fullName) {
  const words = fullName.trim().split(/\s+/);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function lastChar(text) {
  return text.length === 0 ? '' : text[text.length - 1];
}
