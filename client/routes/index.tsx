import Login from '@components/Login'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import PlaylistsPage from '../pages/PlaylistsPage'
import PlaylistDetails from '../pages/PlaylistDetails'
import { createRoutesFromElements, Route } from 'react-router-dom'

export const router = createRoutesFromElements(
  <>
    <Route path="/">
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<UserPage />} />
      <Route path="playlists" element={<PlaylistsPage />} />
      <Route path="playlists/:playlistId" element={<PlaylistDetails />} />
    </Route>
  </>
)
