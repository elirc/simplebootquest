interface Repo {
  id: number;
  name: string;
  stars: number;
  openIssues: number;
  language: "TypeScript" | "Go" | "Python";
  archived: boolean;
}

export function countReposByLanguage(repos: Repo[], value: string): number {
  let count = 0;
  for (const x of repos) if (x.language === value) count++;
  return count;
}
