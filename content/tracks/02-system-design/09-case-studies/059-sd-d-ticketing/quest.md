---
slug: "sd-d-ticketing"
title: "Design Doc: Concert Ticket Sales"
type: "design"
xp: 40
rubric: ["Estimates the peak load and recognises the extreme spike", "Uses a waiting room or admission queue to meter users into the purchase flow", "Serves the static event page from a CDN", "Prevents overselling with atomic holds or reservations in the database (or an equivalent)", "Gives holds an expiry, releasing seats when checkout is abandoned", "Handles payment failures and timeouts without losing or duplicating tickets", "Addresses bots (rate limits, CAPTCHA, per-account limits)"]
minWords: 150
---
# Design Doc: Concert Ticket Sales

A popular concert puts **20,000 seats** on sale at 10:00. About **500,000 people** will try to buy in the first minutes. Requirements: never oversell, be fair-ish, don't fall over, and let people choose a seating section.

Design the system.

### What to include
1. **Requirements and estimates**: peak requests, and the sell-out time.
2. **Protecting the backend**: virtual waiting room / queue, rate limiting, CDN.
3. **Inventory correctness**: holds, expiry, and no overselling.
4. **Checkout and payment**: timeouts and failures.
5. **Abuse**: bots and scalpers.
6. **Failure modes**, and what users see.
