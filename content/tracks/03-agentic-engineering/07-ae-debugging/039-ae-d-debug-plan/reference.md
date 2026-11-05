# Debug plan: "Invalid session"

## Evidence
- From the logs: every "Invalid session" event since Monday with its request id, user agent, the load balancer's node or instance id, and the time since login. (Only the reason codes from auth failures, never token values.)
- Compare the share of mobile vs desktop, and Safari vs Chrome.
- Check whether the failures correlate with **one instance** or with requests that switch instances.
- The diff of Monday's deploy: the cookie options, the session or JWT config, and the load balancer config (health checks, stickiness, proxy headers).

## Hypotheses
1. **Cookie attribute change**: `SameSite`/`Secure`/domain changes make some browsers (Safari's ITP, in-app browsers) drop or not send the cookie. *Confirm*: in the failing requests, is the cookie missing entirely (no cookie header) or present but rejected?
2. **Instances disagree on the secret**: a new instance in the load balancer pool has a different `JWT_SECRET`, or an in-memory session store, so tokens issued by A fail on B. *Confirm*: do failures cluster on specific instance ids? Do the secrets' hashes match across instances?
3. **Proxy or HTTPS detection**: behind the new load balancer, Express doesn't trust the proxy, so `req.secure` is false and `Secure` cookies are handled oddly. *Confirm*: check the `trust proxy` setting, and log `req.protocol` in staging.
4. **Clock skew**: an instance with a wrong clock rejects tokens as expired or "not yet valid". *Confirm*: compare the instance clocks, and the `iat`/`exp` failure reasons.

## Reproduction
- Staging with the same load balancer setup: log in on iOS Safari (a BrowserStack-type tool), then make requests that rotate between instances (round-robin, with stickiness off).
- An automated script that logs in and makes 50 requests, recording which instance answered each.

## Agent instructions
1. Read the auth middleware, the cookie options and the session/JWT verification, and summarise how sessions work, with file references.
2. Write the reproduction script for staging (not production).
3. For each hypothesis, propose the smallest diagnostic (a log field, a config check), and wait for my OK before adding it.
4. **No fixes until a hypothesis is confirmed with evidence.** No production config changes. Report any secret mismatches as hashes, never as values.
5. Once the cause is confirmed, propose a minimal fix and a regression test.

## Verification & prevention
- The reproduction script passes 50/50 in staging on Safari and Chrome.
- A regression test for the cookie options (attributes per environment).
- A startup check that fails fast if the required secrets are missing, plus a config consistency check in deploys.
- Monitoring: an alert on the rate of auth failures per instance, and a dashboard by user agent.
