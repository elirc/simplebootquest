# Ticket sale design

## Requirements & estimates
- 500k users arrive within ~5 minutes, maybe 100k in the first 30 seconds. Each refreshes the page, so that's **tens of thousands of requests per second** at the start.
- Only 20,000 seats, so most people will be disappointed. The goal is a fair and stable "sorry, sold out", not 500k checkouts.
- Max 4 tickets per account. Expected sell-out in 10–20 minutes.

## Protecting the backend
- The event page is **static, on the CDN**. The sale's opening is controlled by a config flag, also served from the CDN with a short TTL.
- **A virtual waiting room**: at 10:00 everyone on the page gets a random position (fairer than "whoever refreshes fastest") via a lightweight edge or Redis-backed service. Users are **admitted at a controlled rate** (say 500 per minute) with a signed, short-lived admission token. Only token holders can call the inventory and checkout APIs.
- Everyone else sees their position and an estimate, polled cheaply from the edge.
- Rate limits per IP and per account on all the APIs.

## Inventory & holds
- `seats(id, section, status, hold_id, hold_expires_at)`, or a per-section counter for general admission.
- Choosing seats runs `UPDATE seats SET status='held', hold_id=$1, hold_expires_at=now()+'8 minutes' WHERE id = ANY($2) AND status='available' RETURNING id` in one transaction. Only rows that were actually available are held, so two users can never hold the same seat.
- For general admission: `UPDATE sections SET remaining = remaining - $n WHERE id=$1 AND remaining >= $n`, then check the affected row count.
- A sweeper job (every 30 s) releases expired holds and returns the seats.

## Checkout & payment
- Checkout creates an order with an **idempotency key**, and calls the payment provider with the same key.
- When payment succeeds (confirmed via webhook), the held seats are marked `sold`, in a transaction checking that the hold is still ours.
- If payment succeeds **after** the hold expired (rare), try to re-hold the seats. If they're gone, automatically refund and apologise.
- Tickets are emailed by a background job (outbox pattern).

## Abuse
- Logged-in accounts only, with verified email or phone, a max of 4 tickets per account, and bot detection or CAPTCHA at admission.
- Admission tokens are bound to the account and expire, so they can't be shared.

## Failure modes
- If the queue service fails, close admissions (fail closed) and show "please wait". Never let everyone through at once.
- If the payment provider is slow, holds are long enough to absorb it, and the UI shows clear progress.
- Monitoring: admission rate, holds versus sold, payment errors, and DB CPU, with a kill switch to pause admissions.
