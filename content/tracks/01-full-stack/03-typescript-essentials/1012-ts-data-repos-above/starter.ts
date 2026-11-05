interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function reposAbove(repos: Repo[], min: number): string[] {
  // TODO
  return [] as any;
}
