function NoteField({ onSave }) {
  const [text, setText] = useState('');
  const tooLong = text.length > 40;
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text.length}/40</p>
      {tooLong && <p role="alert">Too long</p>}
      <button disabled={!text.trim() || tooLong} onClick={() => onSave(text)}>Save</button>
    </div>
  );
}
