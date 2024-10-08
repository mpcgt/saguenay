import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'
import './api/supabase.tsx'
const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN || ''
const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID || ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}>
    <App />
    </Auth0Provider>
  </StrictMode>,
)
