function CarTabs({ items }) {
  const groups = [...new Set(items.map((x) => x.fuel))];
  const [active, setActive] = useState(groups[0]);
  return (
    <div>
      <div role="tablist">
        {groups.map((g) => (
          <button key={g} role="tab" aria-selected={g === active} onClick={() => setActive(g)}>{g}</button>
        ))}
      </div>
      <ul>
        {items.filter((x) => x.fuel === active).map((x) => <li key={x.id}>{x.model}</li>)}
      </ul>
    </div>
  );
}
