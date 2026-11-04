import type { QuestStatus, QuestType } from '@sbq/shared';

const TYPE_ICON: Record<QuestType, string> = { code: '⌨️', quiz: '❓', project: '🛠️', design: '📐' };

export function StatusIcon({ status }: { status: QuestStatus }) {
  if (status === 'completed') return <span className="status status-done" aria-label="Completed">✓</span>;
  if (status === 'in_progress') return <span className="status status-progress" aria-label="In progress">•</span>;
  return <span className="status status-todo" aria-label="Not started" />;
}

export function TypeIcon({ type, boss }: { type: QuestType; boss?: boolean }) {
  return (
    <span className="type-icon" title={boss ? 'Boss' : type}>
      {boss ? '👑' : TYPE_ICON[type]}
    </span>
  );
}
