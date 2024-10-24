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
import TicTacToe from './components/pages/tictactoe'

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
  console.log(
    "%cWAIT!!!",
    "color: #A36EEB; font-size: 120px; font-weight: bold;"
  );

  console.log(
    "%cIf someone asks you to copy/paste something here, ABSOLUTELY don't, your risk of being hacked is 999%!!!",
    "color: #FFF; font-size: 30px; font-weight: bold;"
  );

  console.log(
    "%cPlease, for your own safety, don't do anything! If you paste, you could be attacked!",
    "color: #FF0000; font-size: 30px; font-weight: bold;"
  );

  console.log(
    "%cYou'll be safe only if you CLOSE this tab!",
    "color: #FFF; font-size: 30px; font-weight: bold;"
  );

  console.log(
    "%cIf you really don't know what to do in Saguenay, I suggest you play tic-tac-toe: https://www.saguenay.vercel.app/tictactoe.",
    "color: #FFF; font-size: 15px;"
  );


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
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/404" element={<Error />} />
          </Routes>
    </Router>
    </I18nextProvider>
    </>
  )
}