interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function totalOpenIssues(repos: Repo[]): number {
  // TODO
  return 0 as any;
}
