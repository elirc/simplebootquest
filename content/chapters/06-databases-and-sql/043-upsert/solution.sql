INSERT INTO high_scores (player, score, updated_on) VALUES
  ('Ada', 70, '2026-03-05'),
  ('Grace', 60, '2026-03-05'),
  ('Linus', 40, '2026-03-05')
ON CONFLICT (player) DO UPDATE SET
  score = excluded.score,
  updated_on = excluded.updated_on
WHERE excluded.score > high_scores.score;
