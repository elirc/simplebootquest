interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function averageStars(repos: Repo[]): number | null {
  if (repos.length === 0) return null;
  const total = repos.reduce((sum, x) => sum + x.stars, 0);
  return Math.round((total / repos.length) * 10) / 10;
}
