const SUPPORTED = ['en', 'fr', 'de'];
test('exact match', () => expect(pickLanguage('de', SUPPORTED)).toBe('de'));
test('highest q wins', () => expect(pickLanguage('en;q=0.5, de;q=0.9', SUPPORTED)).toBe('de'));
test('region falls back to primary tag', () => expect(pickLanguage('fr-CH, en;q=0.8', SUPPORTED)).toBe('fr'));
test('skips unsupported languages', () => expect(pickLanguage('ja, de;q=0.3', SUPPORTED)).toBe('de'));
test('q=0 means no', () => expect(pickLanguage('fr;q=0, de;q=0.1', SUPPORTED)).toBe('de'));
test('ties keep header order', () => expect(pickLanguage('de;q=0.8, fr;q=0.8', SUPPORTED)).toBe('de'));
test('wildcard', () => expect(pickLanguage('ja, *;q=0.5', SUPPORTED)).toBe('en'));
test('returns the supported spelling', () => expect(pickLanguage('pt-br', ['en', 'pt-BR'])).toBe('pt-BR'));
test('default', () => {
  expect(pickLanguage(undefined, SUPPORTED)).toBe('en');
  expect(pickLanguage('ja, zh', SUPPORTED)).toBe('en');
});
