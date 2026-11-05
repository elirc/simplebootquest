interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function highestSeconds(songs: Song[]): string | null {
  // TODO
  return 0 as any;
}
