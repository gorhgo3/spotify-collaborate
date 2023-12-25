import { useAuth0 } from '@auth0/auth0-react'

function useLogout() {
  // logout hook to handle localstorage cookies
  // cookie initialised @components/Authenticated*
  const { logout } = useAuth0()

  function handleBrowserLogout() {
    localStorage.removeItem('loggedIn')
    logout()
  }
  return handleBrowserLogout
}

export default useLogout
