import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPlaylistDetails } from '../apis/playlists'
import { Playlist, Item } from '@models/playlist'

function PlaylistDetails() {
  const { playlistId } = useParams()

  const { data, error, isLoading } = useQuery<Playlist>({
    // fetch all playlists of shadow account and display
    queryKey: [playlistId],
    queryFn: async () =>
      getPlaylistDetails(playlistId as string).then(
        (res) => res.data.playlistDetails
      ),
  })

  if (error) return <p>Error collecting playlist</p>
  if (isLoading) return <p>Collecting playlist..</p>
  if (data)
    return (
      <div>
        <h4>PlaylistDetails</h4>
        <h4>{data.name}</h4>
        <img src={data.images[0]?.url} alt="" />
        <p>{data.description}</p>
        {data.tracks.items.map((item: Item) => (
          <div className="track" key={item.track.id}>
            <p>{item.track.album.name}</p>
          </div>
        ))}
      </div>
    )
}

export default PlaylistDetails
