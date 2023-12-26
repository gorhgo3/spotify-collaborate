import React from 'react'
import Playlists from '@components/Playlists'

function PlaylistsPage() {
  return (
    <div>
      <h4>This is the playlists page</h4>
      <p>
        We need to display all the playlists, and then allow the current user to
        add to the collaborated playlists. All playlists are linked to the
        server account, and will be displayed and be customisable.
      </p>
      <p>
        <b>
          Displaying all the shadow account playlists that you have access to
          contribute to.
        </b>
      </p>
      <Playlists />
    </div>
  )
}

export default PlaylistsPage
