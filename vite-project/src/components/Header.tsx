import styled from 'styled-components'
import { pxToRem } from '../utils'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, Box, Container, IconButton } from '@mui/material'
import { useContext } from 'react'
import { AppThemeContext } from '../context/AppThemeContext'
import { useAuth } from '../context'

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.cardBackground};
  border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.borderColor};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadowSm};
  transition: all 0.3s ease;
`

const LogoText = styled.span`
  font-size: ${pxToRem(24)};
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  letter-spacing: -0.5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const ThemeToggle = styled(IconButton)`
  && {
    margin-right: ${pxToRem(16)};
    color: ${({ theme }) => theme.textSecondary};

    &:hover {
      background-color: ${({ theme }) => theme.primaryLight};
      color: ${({ theme }) => theme.primary};
    }
  }
`

const LogoutButton = styled(IconButton)`
  && {
    margin-left: ${pxToRem(12)};
    color: ${({ theme }) => theme.error};

    &:hover {
      background-color: ${({ theme }) => theme.error}20;
    }
  }
`

const Header = () => {
  const themeContext = useContext(AppThemeContext)
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <StyledHeader>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: pxToRem(70),
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoText>DNC Sales</LogoText>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ThemeToggle onClick={themeContext?.toggleTheme} size="small">
              {themeContext?.appTheme === 'light' ? '🌙' : '☀️'}
            </ThemeToggle>
            {user && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span style={{ fontSize: '0.875rem' }}>{user.name}</span>
                <Link to="/perfil">
                  <Avatar
                    alt={user.name}
                    src="/dncavatar.svg"
                    sx={{
                      width: 40,
                      height: 40,
                      cursor: 'pointer',
                      border: '2px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                </Link>
              </Box>
            )}
            <LogoutButton onClick={handleLogout} size="small" title="Sair">
              🚪
            </LogoutButton>
          </Box>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
