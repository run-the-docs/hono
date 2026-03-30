// /tmp/hono-ep1-demo/src/index.mjs
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

// Route 1: Plain text
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Route 2: JSON response
app.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello from Hono!',
    timestamp: new Date().toISOString()
  })
})

// Route 3: Path parameter
app.get('/user/:name', (c) => {
  const name = c.req.param('name')
  return c.json({ user: name, greeting: `Hello, ${name}!` })
})

serve({ fetch: app.fetch, port: 3456 }, (info) => {
  console.log(`Hono running on http://localhost:${info.port}`)
})
