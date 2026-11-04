---
title: "Queues & Background Jobs"
description: "Moving slow work off the request path: queues, delivery guarantees, the outbox pattern and scheduled jobs."
---
Users shouldn't wait for an email to send or a video to encode. Background jobs make apps feel fast and absorb traffic spikes, but they bring their own failure modes.
