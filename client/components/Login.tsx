import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0()

  isAuthenticated && (
    <div className="">
      <h1>user is currently logged in</h1>
    </div>
  )

  isLoading && <div>Loading..</div>

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>
        Log a user in with Auth0
      </button>
      <div className="">{user?.address}</div>
    </div>
  )
}

export default Login
