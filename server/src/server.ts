import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// Stop at 49:20

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Retorna uma Promisse: Algo que pode demorar pra acontecer
    console.log('⚡ Server is running on port 3333')
  })
