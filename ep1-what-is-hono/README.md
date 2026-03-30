# Episode 1: What is Hono?

> **Watch:** [Run the Docs — Hono.js Ep 1](https://youtube.com/@run-the-docs) *(coming soon)*

## What you'll learn

- Why Hono exists (the problem with Express)
- What "Web Standards" means and why it matters
- How to build a basic Hono app with 3 routes
- Running Hono on Node.js

## Run it

```bash
npm install
npm start
```

Then try:

```bash
curl http://localhost:3456/
# Hello Hono!

curl http://localhost:3456/api/hello
# {"ok":true,"message":"Hello from Hono!","timestamp":"..."}

curl http://localhost:3456/user/Alice
# {"user":"Alice","greeting":"Hello, Alice!"}
```

## Key concepts

| Concept | Code |
|---------|------|
| Plain text response | `c.text('Hello')` |
| JSON response | `c.json({ key: 'value' })` |
| Path parameter | `c.req.param('name')` |
| Query parameter | `c.req.query('page')` |

## Next episode

Episode 2 covers routing in depth: nested routes, grouped routes, query params, and request bodies.
