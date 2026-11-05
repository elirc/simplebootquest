interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function totalOpenIssues(repos: Repo[]): number {
  return repos.reduce((sum, x) => sum + x.openIssues, 0);
}
