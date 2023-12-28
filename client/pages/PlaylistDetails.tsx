import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPlaylistDetails } from '../apis/playlists'
import { Playlist, Item } from '@models/playlist'
import NewTrack from '@components/NewTrack'
import Track from '@components/Track'

function PlaylistDetails() {
  const { playlistId } = useParams()

  // fetch all playlists of shadow account and display
  const { data, error, isLoading } = useQuery<Playlist>({
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
      <div className="container justify-content-center text-center">
        <div className="playlist">
          {/* playlist header */}
          <div className="playlist-header">
            <h1 style={{ color: '#1ED760' }}>Playlist</h1>
            <h4 className="playlist-title title">{data.name}</h4>
            <img
              className="playlist-image rounded"
              src={data.images[0]?.url}
              alt="playlist-image"
            />
            <p className="playlist-description">
              {data.description} edit button if owner
            </p>
            <div className="addToPlaylist">
              {/* playlist add track form */}
              <NewTrack id={playlistId as string} />
            </div>
          </div>
          {/* playlist tracks */}
          {data.tracks.items.map((item: Item) => (
            <Track key={item.track.id} {...item} />
          ))}
        </div>
      </div>
    )
}

export default PlaylistDetails
