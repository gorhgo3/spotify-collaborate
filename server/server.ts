import express from 'express'
import Shadow from './routes/spotifyLogin'
// import session from 'express-session'

const server = express()

// implement session and cookie to handle shadow account // server.use(session());

server.use('/api/v1/server-master', Shadow)

export default server
