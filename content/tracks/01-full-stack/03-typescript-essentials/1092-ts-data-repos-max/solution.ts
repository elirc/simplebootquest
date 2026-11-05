interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function highestStars(repos: Repo[]): string | null {
  let best = null;
  for (const x of repos) if (best === null || x.stars > best.stars) best = x;
  return best ? best.name : null;
}
