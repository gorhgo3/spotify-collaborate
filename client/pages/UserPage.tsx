import { useAuth0 } from '@auth0/auth0-react'
import Profile from '@components/Profile'
import App from '@components/App'
import { useEffect, useState } from 'react'
import { testShadowAccount } from '../apis/serverAdmin'
import Notice from '@components/Notice'

function UserPage() {
  // render both client and server details during development
  const { user } = useAuth0()
  const [shadowUser, setShadowUser] = useState({})
  async function serverConnection() {
    const response = await testShadowAccount().then((res) => res.data)
    const data = {
      nickname: response.display_name,
      picture: response.images[0]?.url,
      email: response.email,
      profile: response.id,
      sub: response.id,
    }
    setShadowUser(data)
  }

  useEffect(() => {
    serverConnection()
  }, [])

  return (
    <>
      <div className="container text-center d-flex justify-content-around profile-management">
        {user && (
          <div className="">
            <h4>ClientProfile</h4>
            <Profile {...user} />
          </div>
        )}
        {shadowUser && (
          <div className="">
            <h4>ServerProfile</h4>
            <Profile {...shadowUser} />
          </div>
        )}
      </div>
      <Notice />
      {/* <App /> */}
    </>
  )
}

export default UserPage
