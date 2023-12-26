import axios from 'axios'
import Playlist from '@models/playlists'
import TracksResults from '@models/trackResults'

type Playlists = {
  playlists: Playlist
} 

export function getPlaylists(): Promise<Playlists> {
  return axios.get('/api/v1/playlists/get-playlists').then((res) => res.data)
}

export function getPlaylistDetails(playlistId: string): Promise<Playlist> {
  return axios.get(`/api/v1/playlists/details/${playlistId}`)
}

export function addPlaylistTrack(playlistId: string, trackUri: string): any {
  console.log(trackUri, playlistId);

  return axios.post(`/api/v1/playlists/add-track/${trackUri}`, {
    data: {
      playlistId,
    },
  })
}

export function checkSpotifyTracks(search: string): Promise<TracksResults> {
  return axios.get(`/api/v1/playlists/search/${search}`)
}
