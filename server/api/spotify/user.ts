import axios from 'axios'
import { UserDetails } from '@models/user'
import { config } from 'dotenv'

export async function fetchSpotifyUser(
  access_token: string
): Promise<UserDetails> {
  return axios
    .get('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    .then((res) => res.data)
}

type SpotifyAuth = {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

export async function fetchSpotifyAuth(
  code: string,
  state: string
): Promise<SpotifyAuth> {
  config()
  const client_id = process.env.CLIENT_ID
  const client_secret = process.env.CLIENT_SECRET
  const redirect_uri = process.env.SERVER_ADDRESS + '/api/v1/shadow/callback'

  return axios({
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
  }).then((res) => res.data)
}
 