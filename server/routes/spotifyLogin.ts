import Router from 'express'
import { config } from 'dotenv'
import * as querystring from 'querystring'
import generateRandomString from '../functions/randomString'
import shadowCredentials from '../shadow'
import { fetchSpotifyAuth, fetchSpotifyUser } from '../api/spotify/user'

const router = Router()

//api/v1/shadow

// GET initialise server-spotify connection
router.get('/login', (req, res) => {
  try {
    config()
    const client_id = process.env.CLIENT_ID
    const redirect_uri = process.env.SERVER_ADDRESS + '/api/v1/shadow/callback'
    const state = generateRandomString(16)
    const scope = `
      ugc-image-upload 
      user-read-playback-state 
      user-modify-playback-state 
      user-read-currently-playing 
      app-remote-control 
      playlist-read-private 
      playlist-read-collaborative 
      playlist-modify-private 
      playlist-modify-public 
      user-follow-modify 
      user-follow-read 
      user-read-playback-position 
      user-top-read 
      user-read-recently-played 
      user-library-modify 
      user-library-read 
      user-read-email 
      user-read-private`
    res.redirect(
      `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })}`
    )
  } catch (error) {
    res.status(500).send(error.message)
  }
})

// GET server Spotify authenticate callback
router.get('/callback', async (req, res) => {
  const code = req.query.code || null
  const state = req.query.state || null
  if (state === null) {
    // Failed
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    )
  } else {
    // Success
    const spotifyAuth = await fetchSpotifyAuth(code, state)
    // global shadowCredentials
    shadowCredentials.access_token = spotifyAuth.access_token
    shadowCredentials.refresh_token = spotifyAuth.refresh_token
    shadowCredentials.expires_in = spotifyAuth.expires_in
    shadowCredentials.user = await fetchSpotifyUser(spotifyAuth.access_token)
    res.redirect(process.env.CLIENT_ADDRESS + '/home')
  }
})

// GET shadow profile credentials
router.get('/session/test', async (req, res) => {
  try {
    res.json(shadowCredentials.user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

export default router
