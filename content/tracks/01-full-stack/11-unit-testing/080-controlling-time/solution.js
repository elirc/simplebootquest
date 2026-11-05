const signedUpAt = new Date('2026-03-01T00:00:00Z');
const free = { plan: 'free', signedUpAt };
const at = (iso) => new Date(iso);

describe('trialStatus', () => {
  test('14 days left at signup', () => {
    expect(trialStatus(free, signedUpAt)).toEqual({ active: true, daysLeft: 14 });
  });

  test('rounds partial days up', () => {
    expect(trialStatus(free, at('2026-03-01T12:00:00Z'))).toEqual({ active: true, daysLeft: 14 });
    expect(trialStatus(free, at('2026-03-14T23:59:59Z'))).toEqual({ active: true, daysLeft: 1 });
  });

  test('expires exactly 14 days after signup', () => {
    expect(trialStatus(free, at('2026-03-15T00:00:00Z'))).toEqual({ active: false, daysLeft: 0 });
    expect(trialStatus(free, at('2026-04-01T00:00:00Z'))).toEqual({ active: false, daysLeft: 0 });
  });

  test('pro users are never on a trial', () => {
    expect(trialStatus({ plan: 'pro', signedUpAt }, signedUpAt)).toEqual({ active: false, daysLeft: 0 });
  });
});
