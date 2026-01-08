import styled from 'styled-components'
import { pxToRem } from '../utils'
import { Link } from 'react-router-dom'
import { Avatar, Box, Container, IconButton } from '@mui/material'
import { useContext } from 'react'
import { AppThemeContext } from '../context/AppThemeContext'

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

const Header = () => {
  const themeContext = useContext(AppThemeContext)

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
          <Link to="/">
            <LogoText>DNC Sales</LogoText>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ThemeToggle onClick={themeContext?.toggleTheme} size="small">
              {themeContext?.appTheme === 'light' ? '🌙' : '☀️'}
            </ThemeToggle>
            <Link to="/perfil">
              <Avatar
                alt="Usuário"
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
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
