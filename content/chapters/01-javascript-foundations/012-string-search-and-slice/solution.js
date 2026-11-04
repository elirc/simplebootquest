function emailDomain(email) {
  const at = email.indexOf('@');
  return at === -1 ? null : email.slice(at + 1);
}

function truncate(text, max) {
  return text.length <= max ? text : text.slice(0, max - 1) + '…';
}

function fileExtension(filename) {
  const dot = filename.lastIndexOf('.');
  return dot === -1 ? '' : filename.slice(dot + 1).toLowerCase();
}
