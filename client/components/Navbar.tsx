import { useAuth0 } from '@auth0/auth0-react'
import useLogout from '../hooks/Logout'

function Navbar() {
  const { user } = useAuth0()
  const handleBrowserLogout = useLogout()

  return (
    <div className="navbar">
      <a href="/home">Home</a>
      <div className="">
        {user && <span>Hello, {user.nickname}</span>}
        <button
          className="btn btn-danger ml-4"
          onClick={() => handleBrowserLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
