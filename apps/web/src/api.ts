import type {
  CompletionResult,
  Curriculum,
  LeaderboardEntry,
  ProfileResponse,
  PublicUser,
  QuestDetail,
  QuizResult,
} from '@sbq/shared';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: Record<string, string>,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * The only place the frontend calls fetch. Components use the typed `api`
 * object below, so URLs, headers and error handling live in one file.
 */
async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api${path}`, {
      method,
      headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      credentials: 'same-origin',
    });
  } catch {
    throw new ApiError(0, 'Could not reach the server. Check your connection and try again.');
  }
  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(res.status, data?.error ?? `Request failed (${res.status})`, data?.details);
  }
  return data as T;
}

export type SubmissionResult = CompletionResult & { attempts?: number; solutionAvailable?: boolean };
export type QuizResponse = QuizResult & { explanations: (string | null)[] };

export const api = {
  auth: {
    me: () => request<{ user: PublicUser }>('GET', '/auth/me'),
    login: (email: string, password: string) => request<{ user: PublicUser }>('POST', '/auth/login', { email, password }),
    register: (name: string, email: string, password: string) =>
      request<{ user: PublicUser }>('POST', '/auth/register', { name, email, password }),
    logout: () => request<void>('POST', '/auth/logout'),
  },
  curriculum: () => request<Curriculum>('GET', '/curriculum'),
  chapter: (slug: string) =>
    request<{ slug: string; number: number; title: string; description: string; intro: string }>('GET', `/chapters/${slug}`),
  quest: (slug: string) => request<QuestDetail>('GET', `/quests/${slug}`),
  solution: (slug: string) => request<{ solution: string }>('GET', `/quests/${slug}/solution`),
  saveDraft: (slug: string, code: string) => request<void>('PUT', `/quests/${slug}/draft`, { code }),
  submitCode: (slug: string, code: string, passed: boolean) =>
    request<SubmissionResult>('POST', `/quests/${slug}/submissions`, { code, passed }),
  submitQuiz: (slug: string, answers: number[]) => request<QuizResponse>('POST', `/quests/${slug}/quiz`, { answers }),
  submitProject: (slug: string, repoUrl: string, liveUrl: string) =>
    request<CompletionResult>('POST', `/quests/${slug}/project`, { repoUrl, liveUrl }),
  profile: () => request<ProfileResponse>('GET', '/me/profile'),
  leaderboard: () => request<{ entries: LeaderboardEntry[] }>('GET', '/leaderboard'),
};
