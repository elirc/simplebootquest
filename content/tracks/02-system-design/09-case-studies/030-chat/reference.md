# Real-time chat

## Requirements
- **Functional:** channels, send and edit messages, mentions, real-time delivery, typing indicators, presence, unread counts, paginated history.
- **Non-functional:** delivery p95 < 300 ms to online members, no lost messages, ordering consistent within a channel.
- **Scale:** 20k concurrent WebSocket connections, 500 msgs/s, ~43M messages/day ≈ 20 GB/day of text. Postgres is fine for a while, partitioned by month.

## High-level design
```
client ⇄ WebSocket gateway (N instances) ⇄ Redis pub/sub (channel topics)
client → REST API → Postgres (messages) → publish event
```

## Data model
`messages(id BIGSERIAL, channel_id, author_id, body, created_at, edited_at)`, indexed on `(channel_id, id)` and partitioned by month. `channel_members(channel_id, user_id, last_read_message_id)`.

## API
`POST /api/channels/:id/messages` (persists, then publishes), `GET /api/channels/:id/messages?before=<id>&limit=50` (cursor history). WebSocket events: `message.created`, `typing`, `presence`.

## Deep dive: fan-out and ordering
- **Sending:** clients send via REST, so the write is authoritative and gets a monotonically increasing id per message. After the commit, the API publishes to the Redis topic `channel:{id}`. Each gateway instance subscribes to the channels its connected users belong to and forwards the event. A client that reconnects calls `GET ...?after=<lastSeenId>` to catch up, so no message is lost even if pub/sub drops one.
- **Ordering:** order by message id per channel, and the client sorts and deduplicates by id.
- **Typing and presence:** ephemeral, sent only through pub/sub and never persisted. Presence is a Redis key with a 60 s TTL, refreshed by a heartbeat.
- **Unread counts:** `count(messages WHERE id > last_read_message_id)`, capped at "99+". It's cheap thanks to the `(channel_id, id)` index.

## Trade-offs & alternatives
- Sending via REST instead of the socket: simpler auth, validation and retries, at the cost of a little latency.
- Redis pub/sub is fire-and-forget; durability comes from Postgres plus catch-up on reconnect. Kafka would be overkill at this scale.
- A managed real-time service (Ably, Pusher) would remove the gateway to operate, but adds cost and vendor lock-in.
