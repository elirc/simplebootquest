// mutant: the trial lasts 15 days
const DAY = 24 * 60 * 60 * 1000;

function trialStatus(user, now) {
  if (user.plan === 'pro') return { active: false, daysLeft: 0 };
  const endsAt = user.signedUpAt.getTime() + 15 * DAY;
  const remaining = endsAt - now.getTime();
  if (remaining <= 0) return { active: false, daysLeft: 0 };
  return { active: true, daysLeft: Math.ceil(remaining / DAY) };
}
