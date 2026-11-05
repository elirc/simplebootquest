interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function summariseRepos(repos: Repo[]): { id: number; name: string; openIssues: number }[] {
  // TODO
  return {} as any;
}
