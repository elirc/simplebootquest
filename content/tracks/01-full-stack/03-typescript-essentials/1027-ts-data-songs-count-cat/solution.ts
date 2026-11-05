interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function countSongsByMood(songs: Song[], value: string): number {
  let count = 0;
  for (const x of songs) if (x.mood === value) count++;
  return count;
}
