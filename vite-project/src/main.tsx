import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppThemeProvider } from './context/AppThemeContext'
import { AuthProvider } from './context/AuthContext'
import GlobalStyle from './GlobalStyle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </AuthProvider>
  </StrictMode>
)
