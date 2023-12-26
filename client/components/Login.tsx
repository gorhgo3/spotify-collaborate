import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { user, logout, loginWithRedirect } = useAuth0()
  if (!user)
    return (
      <div className="container pt-5">
        <h1 className="title">Hi! Welcome to spotify collab</h1>
        <p className="subtitle">
          <b>Experimenting with a shadow account in the server</b> connection
          with shadow established, now
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            log in
          </button>
          via Spotify.
        </p>
      </div>
    )

  // if (user)
  //   return (
  //     <div className="container my-4">
  //       <p className="my-1">
  //         Currently logged in as <b>{user?.nickname}.</b>
  //       </p>
  //       <button className="btn btn-danger" onClick={() => logout()}>
  //         Log out
  //       </button>
  //     </div>
  //   )
}

export default Login
