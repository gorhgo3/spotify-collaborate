import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from './routes/index.tsx'
import Navbar from '@components/Navbar.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ServerSetup from '@components/ServerSetup.tsx'
import Authenticated from '@components/Authenticated.tsx'

const routes = createBrowserRouter(router)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="manaia-2023-murray.au.auth0.com"
      clientId="XkOBUlgkesz5PLbTkVYoytgfC1c8GYcb"
      authorizationParams={{
        redirect_uri: window.location.origin + '/home',
      }}
    >
      <ServerSetup>
        <QueryClientProvider client={queryClient}>
          <Authenticated>
            <Navbar />
            <RouterProvider router={routes} />
          </Authenticated>
        </QueryClientProvider>
      </ServerSetup>
    </Auth0Provider>
  </React.StrictMode>
)
