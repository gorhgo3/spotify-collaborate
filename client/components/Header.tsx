import React from 'react'

function Header() {
  return (
    <div className="container pt-5 text-center">
      <h1 className="title" style={{ fontSize: '5rem', color: '#1ED760' }}>
        Spotify Collab.
      </h1>
      <img
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        alt=""
        className="img-fluid mx-auto d-block"
        style={{ width: '15rem' }}
      />
      <p className="mb-5" style={{ fontSize: '0.5rem', color: '#1ED760' }}>
        not official client of spotify
      </p>
    </div>
  )
}

export default Header
