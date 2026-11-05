import type {
  ChapterDetail,
  CompletionResult,
  Curriculum,
  LeaderboardResponse,
  ReviewItem,
  SearchResult,
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
export type QuizResponse = QuizResult & { explanations: (string | null)[] | null };

export const api = {
  auth: {
    me: () => request<{ user: PublicUser }>('GET', '/auth/me'),
    login: (email: string, password: string) => request<{ user: PublicUser }>('POST', '/auth/login', { email, password }),
    register: (name: string, email: string, password: string) =>
      request<{ user: PublicUser }>('POST', '/auth/register', { name, email, password }),
    logout: () => request<void>('POST', '/auth/logout'),
  },
  curriculum: () => request<Curriculum>('GET', '/curriculum'),
  chapter: (slug: string) => request<ChapterDetail>('GET', `/chapters/${slug}`),
  search: (q: string) => request<{ results: SearchResult[]; total: number }>('GET', `/search?q=${encodeURIComponent(q)}`),
  review: () => request<{ items: ReviewItem[]; dueCount: number }>('GET', '/me/review'),
  updateSettings: (settings: { name?: string; showOnLeaderboard?: boolean }) => request<{ user: PublicUser }>('PATCH', '/me/settings', settings),
  quest: (slug: string) => request<QuestDetail>('GET', `/quests/${slug}`),
  solution: (slug: string) => request<{ solution: string }>('GET', `/quests/${slug}/solution`),
  saveDraft: (slug: string, code: string) => request<void>('PUT', `/quests/${slug}/draft`, { code }),
  submitCode: (slug: string, code: string, passed: boolean) =>
    request<SubmissionResult>('POST', `/quests/${slug}/submissions`, { code, passed }),
  submitQuiz: (slug: string, answers: number[]) => request<QuizResponse>('POST', `/quests/${slug}/quiz`, { answers }),
  submitDesign: (slug: string, document: string) => request<CompletionResult>('POST', `/quests/${slug}/design`, { document }),
  submitProject: (slug: string, repoUrl: string, liveUrl: string) =>
    request<CompletionResult>('POST', `/quests/${slug}/project`, { repoUrl, liveUrl }),
  profile: () => request<ProfileResponse>('GET', '/me/profile'),
  leaderboard: (period: 'week' | 'all' = 'week') => request<LeaderboardResponse>('GET', `/leaderboard?period=${period}`),
};
