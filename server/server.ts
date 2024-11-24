import * as Path from 'node:path'
import express from 'express'
import adminRoutes from './routes/admin'
import privateRoutes from './routes/private'
import publicRoutes from './routes/public'

const server = express()
server.use(express.json())

server.use('/api/v1/admin/', adminRoutes)
server.use('/api/v1/user/', privateRoutes)
server.use('/api/v1', publicRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
