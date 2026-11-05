---
slug: "sd-q-autoscaling"
title: "Autoscaling Without Surprises"
type: "quiz"
xp: 15
questions: [{"prompt": "What is a good autoscaling signal for queue workers?", "options": ["CPU of the API", "Queue depth or job age", "Number of developers"], "answer": 1}, {"prompt": "Why keep a minimum number of instances even at night?", "options": ["Licence rules", "New instances take time to start, so a sudden spike would otherwise hit too little capacity", "Databases need it"], "answer": 1}, {"prompt": "Autoscaling to 40 instances causes \"too many connections\" errors from Postgres. What happened?", "options": ["Postgres crashed randomly", "Each instance opened its own pool, and the total exceeded the database connection limit", "The load balancer failed"], "answer": 1}, {"prompt": "Why set a maximum instance count?", "options": ["To cap cost and blast radius if a bug or an attack drives runaway scaling", "Clouds require it", "More instances are slower"], "answer": 0}, {"prompt": "What should an instance do when it receives SIGTERM during scale-in?", "options": ["Exit immediately", "Stop accepting new requests, finish in-flight ones, then exit", "Ignore it"], "answer": 1}]
---
# Autoscaling Without Surprises

Autoscaling adds instances when load rises and removes them when it falls. It sounds automatic, but there are sharp edges:

- **Pick the right signal.** CPU works for CPU-bound apps. For I/O-bound Node APIs, **request concurrency** or **latency** is often a better signal. For queue workers, use **queue depth** (the number of jobs waiting).
- **Scaling takes time.** New containers need to start, warm up and pass health checks, which can take 30 to 90 seconds. Keep a **minimum** number of instances so a sudden spike doesn't hit cold capacity.
- **Downstream limits don't scale with you.** 20 instances × a pool of 10 = 200 database connections, which may exceed what Postgres allows. Scale the pool or add a pooler (PgBouncer).
- **Scale in gently.** Removing instances too fast causes flapping. Use a cool-down, and drain connections gracefully (handle `SIGTERM`).
- **Set a maximum.** A bug or an attack shouldn't create an unlimited cloud bill.
