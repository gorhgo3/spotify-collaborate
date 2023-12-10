import express from 'express'
import Shadow from './routes/spotifyLogin'
import cors from 'cors'
import session from 'express-session'

const server = express()

server.use(cors())
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' }
}));
server.use('/api/v1/server-master', Shadow)

export default server
