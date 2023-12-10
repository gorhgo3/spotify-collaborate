import Router from 'express'
import { config } from 'dotenv'
import * as querystring from 'querystring'
import generateRandomString from '../functions/randomString'
import axios from 'axios'

const router = Router()
/*      /api/v1/server-master     */

config()
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri =
  process.env.SERVER_ADDRESS + '/api/v1/server-master/callback'


// GET server account login
router.get('/login', (req, res) => {
  try {
    const state = generateRandomString(16)
    const scope = 'user-read-private user-read-email'
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
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

// GET server spotify callback route
router.get('/callback', async (req, res) => {
  const code = req.query.code || null
  const state = req.query.state || null
  if (state === null) {
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    )
  } else {
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
    req.session.access_token = response?.data.access_token
    req.session.refresh_token = response?.data.refresh_token
    req.session.expires_in = response?.data.expires_in
    req.session.save()
    res.redirect('http://localhost:5173/')
  }
})

// GET server test current session
router.get('/session/test', async (req, res) => {
  try {
    const data = await axios
      .get('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${req.session.access_token}` },
      })
      .then((res) => res.data)
    res.json(data)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

export default router
