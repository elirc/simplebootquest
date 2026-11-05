interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function reposInRange(repos: Repo[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
