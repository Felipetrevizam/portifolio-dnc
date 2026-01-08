import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Registration, Leads, Perfil } from './pages';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
