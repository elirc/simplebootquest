interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function countReposByLanguage(repos: Repo[], value: string): number {
  // TODO
  return 0 as any;
}
