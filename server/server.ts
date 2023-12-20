import express from 'express'
import Shadow from './routes/spotifyLogin'
import ShadowPlaylists from './routes/spotifyPlaylists'
// import session from 'express-session'

const server = express()
server.use(express.json())

// implement session and cookie to handle shadow account // server.use(session());

server.use('/api/v1/shadow', Shadow)
server.use('/api/v1/playlists', ShadowPlaylists)

export default server
