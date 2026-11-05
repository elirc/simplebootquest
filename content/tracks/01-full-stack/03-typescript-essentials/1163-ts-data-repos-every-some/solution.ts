interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function allReposUnder(repos: Repo[], limit: number): boolean {
  return repos.every((x) => x.stars < limit);
}
