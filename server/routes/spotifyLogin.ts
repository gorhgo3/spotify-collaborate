import Router from 'express'
import { config } from 'dotenv'
import * as querystring from 'querystring'
import generateRandomString from '../functions/randomString'
import axios from 'axios'
import shadowCredentials from '../shadow'

const router = Router()
config()

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = process.env.SERVER_ADDRESS + '/api/v1/shadow/callback'

//api/v1/shadow

// GET server login
router.get('/login', (req, res) => {
  // Initialise server-spotify connection
  try {
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
      'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state,
        })
    )
  } catch (error) {
    res.status(500).send(error.message)
  }
})

// GET server login callback
router.get('/callback', async (req, res) => {
  // Spotify authenticate callback
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
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    })
    shadowCredentials.access_token = response?.data.access_token
    shadowCredentials.refresh_token = response?.data.refresh_token
    shadowCredentials.expires_in = response?.data.expires_in
    // handle the user_id?
    res.redirect(process.env.CLIENT_ADDRESS + '/home')
  }
})

// GET shadow profile credentials
router.get('/session/test', async (req, res) => {
  try {
    const data = await axios
      .get('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${shadowCredentials.access_token}` },
      })
      .then((res) => res.data)
    shadowCredentials.user = data
    res.json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

export default router
