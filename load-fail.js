import Fastify from 'fastify'

const app = Fastify()
await app.register(import('fastify-overview'), {
    addSource: true
})

// The problem here that import(...) returns a Promise<{ default: pluginFn }>
// but fastify-overview append expects the pluginFn directly and does not check whether the
// plugin was loaded from an ESM module or whether a Promise is present
app.register(import('./plugin.js'))

await app.ready()

console.log(JSON.stringify(app.overview(), null, 2));
