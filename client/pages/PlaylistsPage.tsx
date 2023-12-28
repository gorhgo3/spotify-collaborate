import React from 'react'
import Playlists from '@components/Playlists'

function PlaylistsPage() {
  return (
    <div className="playlists-container container text-center">
      <h1 className="title p-5">Spotify Collab library</h1>
      <img
        src="client/assets/Spotify-logo.png"
        alt=""
        className="img-fluid mx-auto d-block"
        style={{ width: '15rem' }}
      />
      <p className="m-5">
        <b>Developers disclaimer** </b>
        <br />
        All playlists are from server account- collaborate via authenticated
        client account.
      </p>
      <Playlists />
    </div>
  )
}

export default PlaylistsPage
