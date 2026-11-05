function initials(name) {
  return name[0];
}

function Avatar({ name, src, size = 32 }) {
  return <img src={src} />;
}
