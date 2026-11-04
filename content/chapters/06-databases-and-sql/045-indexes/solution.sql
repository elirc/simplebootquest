CREATE INDEX idx_events_user_created ON events(user_id, created_at);
CREATE INDEX idx_events_type ON events(type);
