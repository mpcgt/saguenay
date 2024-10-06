import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/pages/home'
import Discovery from './components/pages/discovery'
import Saved from "./components/pages/saved"
import Notification from "./components/pages/notifications"
import Profile from './components/pages/profile'
import Settings from "./components/pages/settings"
import Login from "./components/pages/login"
import About from './components/pages/about'
import Error from './components/pages/404'

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<Error />} />
          </Routes>
    </Router>
  )
}