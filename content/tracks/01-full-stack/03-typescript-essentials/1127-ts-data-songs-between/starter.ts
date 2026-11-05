interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function songsInRange(songs: Song[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
