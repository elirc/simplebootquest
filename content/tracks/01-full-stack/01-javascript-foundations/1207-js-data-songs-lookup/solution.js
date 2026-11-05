export function playsOf(songs, title) {
  const found = songs.find((x) => x.title === title);
  return found ? found.plays : null;
}
