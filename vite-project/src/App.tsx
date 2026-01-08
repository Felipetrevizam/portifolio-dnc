import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/home'
import Login from './pages/login'
import Registration from './pages/registration'
import Leads from './pages/leads'
import Perfil from './pages/perfil'
import './App.css'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/cadastro"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Registration />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
