import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PavingPage from './pages/PavingPage'
import BobcatPage from './pages/BobcatPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/paving" element={<PavingPage />} />
      <Route path="/bobcat" element={<BobcatPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
