function cx(...args) {
  const out = [];
  const add = (arg) => {
    if (!arg) return;
    if (typeof arg === 'string') out.push(...arg.split(/\s+/).filter(Boolean));
    else if (Array.isArray(arg)) arg.forEach(add);
    else if (typeof arg === 'object') for (const [k, v] of Object.entries(arg)) if (v) out.push(k);
  };
  args.forEach(add);
  return [...new Set(out)].join(' ');
}

function Button({ variant = 'secondary', size, loading, disabled, children, onClick }) {
  return (
    <button className={cx('btn', `btn-${variant}`, size && `btn-${size}`, { 'is-loading': loading })} disabled={Boolean(disabled || loading)} onClick={onClick}>
      {loading ? 'Loading…' : children}
    </button>
  );
}
