interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function summariseSongs(songs: Song[]): { id: number; title: string; seconds: number }[] {
  return songs.map(({ id, title, seconds }) => ({ id, title, seconds }));
}
