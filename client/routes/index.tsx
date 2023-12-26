import Login from '@components/Login'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import { createRoutesFromElements, Route } from 'react-router-dom'

export const router = createRoutesFromElements(
  <>
    <Route path="/">
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<UserPage />} />
    </Route>
  </>
)
