interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function allSongsUnder(songs: Song[], limit: number): boolean {
  return songs.every((x) => x.plays < limit);
}
