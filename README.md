# Run the Docs — Hono.js

Code examples for the **Run the Docs** YouTube series on [Hono.js](https://hono.dev).

> Technical docs. Made watchable.

## Episodes

| Episode | Topic | Folder |
|---------|-------|--------|
| 1 | What is Hono? | [ep1-what-is-hono](./ep1-what-is-hono/) |
| 2 | Routing & Params | *coming soon* |
| 3 | Middleware | *coming soon* |
| 4 | Validation & Error Handling | *coming soon* |
| 5 | Deploy Anywhere | *coming soon* |

## About

Each folder contains the exact code shown in the video, with a README linking back to the episode.

Built with [Hono](https://hono.dev) — the fast, lightweight web framework built on Web Standards.

## How updates work

The `_engine/` folder contains:
- `registry.json` — every tracked doc URL with content hash, episode status, and publish metadata
- `checker.py` — fetches all URLs, detects content changes, flags episodes that need updating

Run manually: `python3 _engine/checker.py`

A scheduled job checks weekly and posts a Discord notification if any published episode's source doc has changed.
