import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { sql } from '@codemirror/lang-sql';
import type { CodeLanguage } from '@sbq/shared';

function languageExtension(language: CodeLanguage) {
  if (language === 'sql') return sql();
  return javascript({ typescript: language === 'ts' || language === 'jsx', jsx: language === 'jsx' });
}

function usePrefersDark() {
  const query = '(prefers-color-scheme: dark)';
  const [dark, setDark] = useState(() => typeof window !== 'undefined' && window.matchMedia?.(query).matches);
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return;
    const onChange = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return dark;
}

export function CodeEditor(props: {
  value: string;
  onChange?: (value: string) => void;
  language: CodeLanguage;
  readOnly?: boolean;
  height?: string;
  label: string;
}) {
  const dark = usePrefersDark();
  return (
    <div className="editor" aria-label={props.label}>
      <CodeMirror
        value={props.value}
        onChange={props.onChange}
        extensions={[languageExtension(props.language)]}
        theme={dark ? 'dark' : 'light'}
        readOnly={props.readOnly}
        editable={!props.readOnly}
        height={props.height ?? '100%'}
        basicSetup={{ tabSize: 2, foldGutter: false }}
      />
    </div>
  );
}
