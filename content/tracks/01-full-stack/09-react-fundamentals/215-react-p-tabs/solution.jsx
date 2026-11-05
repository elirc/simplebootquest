function Tabs({ tabs, activeId, onChange }) {
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];
  return (
    <div>
      <div role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            aria-selected={t.id === active.id}
            tabIndex={t.id === active.id ? 0 : -1}
            onClick={() => onChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${active.id}`} aria-labelledby={`tab-${active.id}`}>
        {active.content}
      </div>
    </div>
  );
}
