interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function songsInRange(songs: Song[], low: number, high: number): string[] {
  return songs.filter((x) => x.seconds >= low && x.seconds <= high).map((x) => x.title);
}
