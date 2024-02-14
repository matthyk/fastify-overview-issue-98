import Fastify from 'fastify'
import plugin from './plugin.js'

const app = Fastify()
await app.register(import('fastify-overview'), {
    addSource: true
})

// Here plugin is a function and not a Promise<{ default: pluginFn }>
app.register(plugin)

await app.ready()

console.log(JSON.stringify(app.overview(), null, 2));
