function Converter() {
  const [value, setValue] = useState('');
  const x = Number(value);
  const valid = value.trim() !== '' && !Number.isNaN(x);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <output>{valid ? Math.round((x * 2.20462) * 10) / 10 : ''}</output>
    </div>
  );
}
