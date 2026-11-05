interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function lowestOpenIssues(repos: Repo[]): string | null {
  // TODO
  return 0 as any;
}
