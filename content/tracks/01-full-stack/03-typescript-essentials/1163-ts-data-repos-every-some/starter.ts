interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function allReposUnder(repos: Repo[], limit: number): boolean {
  // TODO
  return 0 as any;
}
