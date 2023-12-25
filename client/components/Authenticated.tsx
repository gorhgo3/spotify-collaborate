import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'

function Authenticated(props: any) {
  const { isAuthenticated } = useAuth0()
  const loggedIn = Boolean(localStorage.getItem('loggedIn'))
  // faster refresh handling of user logged in when assigned to cookie
  if (isAuthenticated) localStorage.setItem('loggedIn', String(isAuthenticated))
  return loggedIn ? <div>{props.children}</div> : <Login />
}

export default Authenticated
