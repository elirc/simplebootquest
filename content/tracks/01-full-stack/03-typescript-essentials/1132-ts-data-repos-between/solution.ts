interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function reposInRange(repos: Repo[], low: number, high: number): string[] {
  return repos.filter((x) => x.openIssues >= low && x.openIssues <= high).map((x) => x.name);
}
