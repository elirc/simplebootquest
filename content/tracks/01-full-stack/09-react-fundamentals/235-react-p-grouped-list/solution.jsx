function groupByDay(items, today) {
  const yesterday = new Date(Date.parse(`${today}T00:00:00Z`) - 86400000).toISOString().slice(0, 10);
  const sorted = [...items].sort((a, b) => (a.at < b.at ? 1 : a.at > b.at ? -1 : 0));
  const groups = [];
  for (const item of sorted) {
    const day = item.at.slice(0, 10);
    const label = day === today ? 'Today' : day === yesterday ? 'Yesterday' : day;
    const last = groups[groups.length - 1];
    if (last && last.label === label) last.items.push(item);
    else groups.push({ label, items: [item] });
  }
  return groups;
}

function Feed({ items, today }) {
  if (items.length === 0) return <p>No activity yet</p>;
  return (
    <div>
      {groupByDay(items, today).map((g) => [
        <h3 key={`h-${g.label}`}>{g.label}</h3>,
        <ul key={`l-${g.label}`}>
          {g.items.map((i) => <li key={i.id}>{i.text}</li>)}
        </ul>,
      ])}
    </div>
  );
}
