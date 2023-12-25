import Header from '@components/Header'
import Notice from '@components/Notice'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container text-center">
        <div className="container d-flex my-5">
          <Link
            to="/playlists"
            className="nav-selectors"
            style={{ backgroundColor: '#1ED760' }}
          >
            Playlists
          </Link>
          <Link
            to="/playlists"
            className="nav-selectors"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            Profile
          </Link>
          <Link
            to="/playlists"
            className="nav-selectors"
            style={{ backgroundColor: '#191414', color: 'white' }}
          >
            Tracks
          </Link>
        </div>
      </div>
      <Notice />
    </div>
  )
}

export default HomePage
