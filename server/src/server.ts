import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // Todas URLs de front-end que poderão ser acessadas no back-end
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Retorna uma Promisse: Algo que pode demorar pra acontecer
    console.log('⚡ Server is running on port 3333')
  })
