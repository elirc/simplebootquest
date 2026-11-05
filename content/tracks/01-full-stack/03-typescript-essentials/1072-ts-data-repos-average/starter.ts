interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function averageStars(repos: Repo[]): number | null {
  // TODO
  return 0 as any;
}
