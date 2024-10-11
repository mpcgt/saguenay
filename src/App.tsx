import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from "@vercel/analytics/react"
import Home from './components/pages/home'
import Discovery from './components/pages/discovery'
import Saved from "./components/pages/saved"
import Notification from "./components/pages/notifications"
import Profile from './components/pages/profile'
import Settings from "./components/pages/settings"
import Groups from './components/pages/groups'
import About from './components/pages/about'
import Dashboard from './components/pages/dashboard'
import Waitlist from './components/pages/waitlist'
import Error from './components/pages/404'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en/translation.json'
import frTranslation from './locales/fr/traduction.json'
import esTranslation from './locales/es/traducción.json'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    es: { translation: esTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function App() {
  return (
    <>
    <I18nextProvider i18n={i18next}>
    <Router>
      <Analytics />
      <SpeedInsights />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/404" element={<Error />} />
          </Routes>
    </Router>
    </I18nextProvider>
    </>
  )
}