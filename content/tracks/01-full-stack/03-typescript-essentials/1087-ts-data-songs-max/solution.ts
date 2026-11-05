interface Song {
  id: number;
  title: string;
  seconds: number;
  plays: number;
  artist: "Nova" | "The Pines" | "Kairo";
  mood: "calm" | "happy" | "dark";
}

export function highestSeconds(songs: Song[]): string | null {
  let best = null;
  for (const x of songs) if (best === null || x.seconds > best.seconds) best = x;
  return best ? best.title : null;
}
