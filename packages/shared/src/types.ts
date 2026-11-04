export type QuestType = 'code' | 'quiz' | 'project';
export type CodeLanguage = 'js' | 'ts' | 'jsx' | 'sql';
export type QuestStatus = 'not_started' | 'in_progress' | 'completed';

export interface QuestSummary {
  slug: string;
  chapterSlug: string;
  title: string;
  type: QuestType;
  language?: CodeLanguage;
  xp: number;
  boss: boolean;
  status: QuestStatus;
}

export interface ChapterSummary {
  slug: string;
  number: number;
  title: string;
  description: string;
  quests: QuestSummary[];
}

export interface Curriculum {
  chapters: ChapterSummary[];
  totalXp: number;
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
  setup?: string;
  questions?: QuizQuestionPublic[];
  requirements?: string[];
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
  correct: boolean[];
  score: number;
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
}

export interface LevelProgress {
  level: number;
  xpIntoLevel: number;
  xpForNextLevel: number;
  percent: number;
}
