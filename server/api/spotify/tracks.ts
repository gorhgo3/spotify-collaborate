import axios from 'axios'
import TracksResults from '@models/tracks'

type TrackData = {
  trackName: string
  accessToken: string
}

export async function fetchTrack(data: TrackData): Promise<TracksResults> {
  const api = `https://api.spotify.com/v1/search`
  return axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        q: data.trackName,
        type: 'track',
      },
    })
    .then((res) => res.data)
}
