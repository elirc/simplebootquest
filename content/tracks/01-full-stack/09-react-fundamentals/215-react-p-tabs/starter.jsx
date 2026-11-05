function Tabs({ tabs, activeId, onChange }) {
  return (
    <div>
      {tabs.map((t) => <button onClick={() => onChange(t.id)}>{t.label}</button>)}
      {tabs.map((t) => <div>{t.content}</div>)}
    </div>
  );
}
