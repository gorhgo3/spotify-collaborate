import axios from 'axios'
import Playlist from '@models/playlists'

type Playlists = {
  playlists: Playlist
}

export function getPlaylists(): Promise<Playlists> {
  return axios.get('/api/v1/playlists/get-playlists').then((res) => res.data)
}
