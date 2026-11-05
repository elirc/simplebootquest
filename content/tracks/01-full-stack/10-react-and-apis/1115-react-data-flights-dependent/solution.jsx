function FlightBrowser({ loadGroups, loadItems }) {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadGroups().then(setGroups);
  }, [loadGroups]);
  useEffect(() => {
    if (!group) return;
    let ignore = false;
    loadItems(group).then((list) => !ignore && setItems(list));
    return () => {
      ignore = true;
    };
  }, [group, loadItems]);
  return (
    <div>
      {groups.map((g) => <button key={g} onClick={() => setGroup(g)}>{g}</button>)}
      {group ? <ul>{items.map((x) => <li key={x.id}>{x.number}</li>)}</ul> : <p>Pick a group</p>}
    </div>
  );
}
