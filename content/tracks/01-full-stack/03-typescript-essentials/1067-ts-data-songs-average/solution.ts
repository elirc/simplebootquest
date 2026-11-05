interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function averageSeconds(songs: Song[]): number | null {
  if (songs.length === 0) return null;
  const total = songs.reduce((sum, x) => sum + x.seconds, 0);
  return Math.round((total / songs.length) * 10) / 10;
}
