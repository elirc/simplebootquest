test('a brand new user has 14 days left', () => {
  const user = { plan: 'free', signedUpAt: new Date('2026-03-01T00:00:00Z') };
  expect(trialStatus(user, new Date('2026-03-01T00:00:00Z'))).toEqual({ active: true, daysLeft: 14 });
});
