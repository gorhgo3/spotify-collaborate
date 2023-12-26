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
            <i
              className="fa-solid fa-chart-column"
              style={{ fontSize: '2rem' }}
            ></i>
          </Link>
          <Link
            to="/profile"
            className="nav-selectors"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <i className="fa-solid fa-id-card" style={{ fontSize: '2rem' }}></i>
          </Link>
          <Link
            to="/tracks"
            className="nav-selectors"
            style={{ backgroundColor: '#191414', color: 'white' }}
          >
            <i className="fa-solid fa-music" style={{ fontSize: '2rem' }}></i>
          </Link>
        </div>
      </div>
      <Notice />
    </div>
  )
}

export default HomePage
