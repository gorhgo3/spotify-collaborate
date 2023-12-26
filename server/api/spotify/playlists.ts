import {
  Playlist,
  PlaylistDetails,
  NewPlaylistDetails,
  FetchPlaylistDetails,
} from '@models/playlists.ts'
import axios from 'axios'

export async function fetchUserPLaylists(
  access_token: string
): Promise<Playlist> {
  const api = 'https://api.spotify.com/v1/me/playlists'
  return axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data)
}

export async function fetchPlaylistId(
  data: FetchPlaylistDetails
): Promise<PlaylistDetails> {
  const api = `https://api.spotify.com/v1/playlists/${data.playlistId}`
  return axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data)
}

export async function addPlaylist(data: NewPlaylistDetails): Promise<string> {
  const api = `https://api.spotify.com/v1/users/${data.userId}/playlists`
  return axios
    .post(api, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        'Content-Type': 'application/json',
      },
      data: {
        name: data.playlistName,
        description: data.playlistDescription,
        public: true,
      },
    })
    .then((res) => res.data)
}

type AddTrackData = {
  accessToken: string
  playlistId: string
  trackUri: string
}

export async function addTrack(data: any) {
  const api = `https://api.spotify.com/v1/playlists/${data.playlistId}/tracks`
  return axios.post(
    api,
    { uris: [data.trackUri] },
    {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  )
}
