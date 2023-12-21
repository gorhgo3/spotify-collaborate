import { useAuth0 } from '@auth0/auth0-react'

function Title() {
  const { isAuthenticated, user, logout } = useAuth0()
  console.log(user);
  return (
    <div className="container pt-5">
      <h1 className="title">Hi! Welcome to spotify collab</h1>
      <p className="subtitle">
        <b>Experimenting with a shadow account in the server</b> log in with the
        server, then <a href="/login">log in</a> via Spotify.
      </p>
      {isAuthenticated && (
        <div className="container my-4">
          <p className='my-1'>
            Currently logged in as <b>{user?.nickname}.</b>
          </p>
          <button className="btn btn-danger" onClick={() => logout()}>
            Log out
          </button>
        </div>
      )}
    </div>
  )
}

export default Title
