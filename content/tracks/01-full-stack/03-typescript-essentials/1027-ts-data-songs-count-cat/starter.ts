interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function countSongsByMood(songs: Song[], value: string): number {
  // TODO
  return 0 as any;
}
