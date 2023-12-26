import axios from 'axios'
import Playlist from '@models/playlists'

type Playlists = {
  playlists: Playlist
}

export function getPlaylists(): Promise<Playlists> {
  return axios.get('/api/v1/playlists/get-playlists').then((res) => res.data)
}

export function getPlaylistDetails(playlistId: string): Promise<Playlist> {
  return axios.get(`/api/v1/playlists/details/${playlistId}`)
}
