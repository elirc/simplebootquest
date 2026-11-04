---
slug: "sd-vertical-horizontal"
title: "Vertical vs Horizontal Scaling"
type: "quiz"
xp: 15
questions: [{"prompt": "A single Node process on an 8-core machine uses roughly…", "options": ["All 8 cores for JavaScript", "One core for your JavaScript (I/O happens elsewhere)", "Half the cores"], "answer": 1}, {"prompt": "What is the main limit of vertical scaling?", "options": ["It requires code changes", "There is a maximum machine size, and one machine is a single point of failure", "It is slower to set up"], "answer": 1}, {"prompt": "What must be true before you can scale an API horizontally?", "options": ["It must use microservices", "Instances must be stateless: any instance can serve any request", "It must use NoSQL"], "answer": 1}, {"prompt": "Where should a 30-second PDF generation job run?", "options": ["Inside the request handler", "In a background job or worker, off the request path", "In the browser"], "answer": 1}, {"prompt": "What is a sensible default strategy for a new app?", "options": ["Start with 50 microservices", "Start on one server, but write stateless code so you can scale out later", "Never scale"], "answer": 1}]
---
# Vertical vs Horizontal Scaling

- **Vertical scaling** ("scale up"): a bigger machine, with more CPU and RAM. It's simple, with no code changes, but there's a ceiling, it gets expensive, and it's still one point of failure.
- **Horizontal scaling** ("scale out"): more machines behind a load balancer. It's nearly unlimited, and one machine dying doesn't take you down, but your app must be **stateless**.

### Node specifics

A Node process uses **one CPU core** for JavaScript. A 16-core server running one Node process wastes 15 cores! Options:

- Run one process per core (PM2 cluster mode, Node's `cluster` module, or several containers).
- Keep CPU-heavy work (image processing, big reports) off the request path: in worker threads or a background job queue.

### Start vertical, design for horizontal

Most apps can go a long way on one decent server plus a managed database. But write your code **as if** there were several instances from day one: no in-memory sessions, no files on local disk. Then scaling out is a config change, not a rewrite.
