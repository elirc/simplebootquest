interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function percentArchived(repos: Repo[]): number {
  if (repos.length === 0) return 0;
  return Math.round((repos.filter((x) => x.archived).length / repos.length) * 100);
}
