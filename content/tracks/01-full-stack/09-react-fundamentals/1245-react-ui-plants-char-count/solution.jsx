function NoteField({ onSave }) {
  const [text, setText] = useState('');
  const tooLong = text.length > 30;
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text.length}/30</p>
      {tooLong && <p role="alert">Too long</p>}
      <button disabled={!text.trim() || tooLong} onClick={() => onSave(text)}>Save</button>
    </div>
  );
}
