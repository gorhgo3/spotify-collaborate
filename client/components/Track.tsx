import React from 'react'
import { Item } from '@models/playlist'

function Track(props: Item) {
  // Single tracks displayed in playlists
  const item = props
  // TODO: delete this track
  
  return (
    <div className="track">
      <div className="details d-flex">
        <img
          src={item.track.album.images[0]?.url}
          alt=""
          style={{ width: '3rem', height: '3rem' }}
          className="mr-2"
        />
        <div className="details-text text-left">
          <p className="mb-0">{item.track.name}</p>
          <p className="mb-0" style={{ color: 'grey' }}>
            {item.track.explicit && '🅴'}
            {item.track.artists[0].name}
          </p>
        </div>
        <div className="ml-auto mr-2 align-self-center">
          <i
            className="fa-regular fa-circle-play"
            style={{ fontSize: '1.5rem', color: '#1ED760' }}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Track
