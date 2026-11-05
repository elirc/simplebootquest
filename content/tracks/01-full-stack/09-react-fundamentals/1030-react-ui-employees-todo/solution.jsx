function EmployeeList() {
  const [items, setItems] = useState([]);
  const [draft, setDraft] = useState('');
  const nextId = useRef(1);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = draft.trim();
          if (!text) return;
          setItems((list) => [...list, { id: nextId.current++, text }]);
          setDraft('');
        }}
      >
        <input value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button type="button" onClick={() => setItems((list) => list.filter((x) => x.id !== item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
