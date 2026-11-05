export type QuestType = 'code' | 'quiz' | 'project' | 'design';
export type CodeLanguage = 'js' | 'ts' | 'jsx' | 'sql';
export type QuestStatus = 'not_started' | 'in_progress' | 'completed';

export interface QuestSummary {
  slug: string;
  trackSlug: string;
  chapterSlug: string;
  title: string;
  type: QuestType;
  language?: CodeLanguage;
  xp: number;
  boss: boolean;
  /** Practice quests are optional: they don't count toward chapter completion. */
  optional: boolean;
  /** Section heading within the chapter ("Core" when not set). */
  section?: string;
  status: QuestStatus;
}

/** A chapter without its full quest list (the curriculum overview stays small). */
export interface ChapterSummary {
  slug: string;
  trackSlug: string;
  number: number;
  title: string;
  description: string;
  /** Required ("core") quests and how many are done. */
  coreTotal: number;
  coreCompleted: number;
  /** All quests including optional practice. */
  total: number;
  completed: number;
  xp: number;
  /** The next core quest to do (null when the core is complete). */
  next: QuestSummary | null;
  /** A few upcoming quests, for the overview cards. */
  preview: QuestSummary[];
}

export interface ChapterDetail extends Omit<ChapterSummary, 'preview' | 'next'> {
  intro: string;
  quests: QuestSummary[];
}

export interface TrackSummary {
  slug: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  chapters: ChapterSummary[];
}

export interface ResumeTarget {
  slug: string;
  chapterSlug: string;
  title: string;
  /** Why this quest: you were working on it, or it's the next core quest. */
  reason: 'in_progress' | 'next';
}

export interface Curriculum {
  tracks: TrackSummary[];
  totalXp: number;
  totalQuests: number;
  /** Where a signed-in learner should continue (null for guests or when everything is done). */
  resume: ResumeTarget | null;
}

export interface SearchResult extends QuestSummary {
  chapterTitle: string;
  trackTitle: string;
}

export interface ReviewItem extends QuestSummary {
  chapterTitle: string;
  completedAt: string;
  /** How many times it has been reviewed already. */
  reviews: number;
}

export interface QuizQuestionPublic {
  prompt: string;
  options: string[];
}

export interface QuestDetail extends QuestSummary {
  lesson: string;
  chapterTitle: string;
  /** Starter code (or the learner's saved draft, when one exists). */
  code?: string;
  starter?: string;
  tests?: string;
  /** Code quests: 'write-tests' means the learner writes tests for `subject`. */
  mode?: 'implement' | 'write-tests';
  subject?: string;
  mutants?: { name: string; code: string }[];
  setup?: string;
  questions?: QuizQuestionPublic[];
  requirements?: string[];
  /** Design write-ups */
  rubric?: string[];
  template?: string;
  minWords?: number;
  hints?: string[];
  resources?: { title: string; url: string }[];
  attempts: number;
  solutionAvailable: boolean;
  repoUrl?: string | null;
  liveUrl?: string | null;
  prev?: { slug: string; chapterSlug: string; title: string } | null;
  next?: { slug: string; chapterSlug: string; title: string } | null;
}

export interface PublicUser {
  id: string;
  email: string;
  name: string;
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  /** Whether the learner appears on the public leaderboard. */
  showOnLeaderboard: boolean;
  createdAt: string;
}

export interface CompletionResult {
  completed: boolean;
  alreadyCompleted: boolean;
  xpAwarded: number;
  user: PublicUser | null;
  newAchievements: AchievementDefinition[];
}

export interface QuizResult extends CompletionResult {
  /** Per-question correctness is only revealed once every answer is right. */
  correct: boolean[] | null;
  score: number;
  total: number;
}

export interface AchievementDefinition {
  key: string;
  title: string;
  description: string;
  icon: string;
}

export interface EarnedAchievement extends AchievementDefinition {
  earnedAt: string;
}

export interface ProfileResponse {
  user: PublicUser;
  levelProgress: LevelProgress;
  completedQuests: number;
  totalQuests: number;
  tracks: { slug: string; title: string; icon: string; completed: number; total: number }[];
  achievements: EarnedAchievement[];
  lockedAchievements: AchievementDefinition[];
  recent: { questSlug: string; chapterSlug: string; title: string; completedAt: string }[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  level: number;
  streak: number;
  /** True for the signed-in viewer's own row. */
  you?: boolean;
}

export interface LeaderboardResponse {
  period: 'week' | 'all';
  entries: LeaderboardEntry[];
  /** The viewer's own position, even when outside the top entries. */
  me: LeaderboardEntry | null;
}

export interface LevelProgress {
  level: number;
  xpIntoLevel: number;
  xpForNextLevel: number;
  percent: number;
}
