  import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
  import { SpeedInsights } from '@vercel/speed-insights/react'
  import { Analytics } from "@vercel/analytics/react"
  import Home from './components/pages/home'
  import Discovery from './components/pages/discovery'
  import CreatePost from './components/posts/CreatePost'
  import HashtagPage from './components/posts/hashtagPage'
  import Saved from "./components/pages/saved"
  import Notification from "./components/pages/notifications"
  import Profile from './components/pages/profile'
  import Settings from "./components/pages/settings"
  import Groups from './components/pages/groups'
  import ChatRooms from './components/pages/chatRooms'
  import AnimalsAbout from './components/pages/groups/animalsAbout'
  import DiscussionsAbout from './components/pages/groups/discussionsAbout'
  import FoodAbout from './components/pages/groups/foodAbout'
  import MusicAbout from './components/pages/groups/musicAbout'
  import NatureAbout from './components/pages/groups/natureAbout'
  import PhotographyAbout from './components/pages/groups/photographyAbout'
  import About from './components/pages/about'
  import Dashboard from './components/pages/dashboard'
  import Waitlist from './components/pages/waitlist'
  import Error from './components/pages/404'
  import TicTacToe from './components/pages/tictactoe'
  import { I18nextProvider } from 'react-i18next'
  import i18next from 'i18next';
  import { initReactI18next } from 'react-i18next'
  import enTranslation from './locales/en/translation.json'
  import frTranslation from './locales/fr/traduction.json'
  import esTranslation from './locales/es/traducción.json'
  import Rules from './components/pages/rules'
  import Invite from './components/pages/invite'
  import Help from './components/pages/help'
  import Development from './components/pages/development'
  import Faq from './components/pages/help/faq'
  import Guides from './components/pages/help/guides'
  import Security from './components/pages/help/security'
  import SettingsAccount from './components/pages/help/settings-account'
  import { AuthProvider } from './hooks/AuthContext'
import PostDetail from './components/posts/postDetail'
import LoginPage from './components/pages/account/login'
import SignupPage from './components/pages/account/register'
import ForgotPasswordPage from './components/pages/account/forgotPassword'

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
      "%cSTOP!!!",
      "color: #FF0000; font-size: 120px; font-weight: bold;"
    );

    console.log(
      "%cIf someone asks you to copy/paste something here, ABSOLUTELY don't, your risk of being hacked is 999%!!!",
      "color: #996DCF; font-size: 30px; font-weight: bold;"
    );

    console.log(
      "%cPlease, for your own safety, don't do anything! If you paste, you could be attacked!",
      "color: #FF0000; font-size: 30px; font-weight: bold;"
    );

    console.log(
      "%cYou'll be safe only if you CLOSE this tab!",
      "color: #996DCF; font-size: 30px; font-weight: bold;"
    );

    console.log(
      "%cIf you really don't know what to do in Saguenay, I suggest you play tic-tac-toe: https://saguenay.vercel.app/tictactoe.",
      "color: #996DCF; font-size: 15px;"
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/security" element={<Security />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/development" element={<Development />} />

            <Route path="/404" element={<Error />} />
          </Routes>

          <AuthProvider>
            <Routes>
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/rooms" element={<ChatRooms />} />
              <Route path="/rooms/:roomId" element={<ChatRooms />} />
              <Route path="/animals" element={<AnimalsAbout />} />
              <Route path="/discussions" element={<DiscussionsAbout />} />
              <Route path="/food" element={<FoodAbout />} />
              <Route path="/music" element={<MusicAbout />} />
              <Route path="/nature" element={<NatureAbout />} />
              <Route path="/photography" element={<PhotographyAbout />} />
              <Route path="/settings-account" element={<SettingsAccount />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </AuthProvider>
        </Router>
      </I18nextProvider>
      </>
    )
  }