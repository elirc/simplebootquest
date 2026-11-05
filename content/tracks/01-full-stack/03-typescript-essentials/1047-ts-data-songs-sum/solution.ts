interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function totalPlays(songs: Song[]): number {
  return songs.reduce((sum, x) => sum + x.plays, 0);
}
