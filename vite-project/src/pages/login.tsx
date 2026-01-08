import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { usePost } from '../hooks/useAxios'
import { useAuth } from '../context'
import { pxToRem } from '../utils'
import { findMockUser } from '../utils/mockAuth'

const LoginArea = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LoginImage = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primaryHover} 100%
  );
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: ${pxToRem(200)};
    order: 1;
  }
`

const LogoSection = styled.div`
  text-align: center;
`

const LogoText = styled.h1`
  font-size: ${pxToRem(48)};
  font-weight: 700;
  margin: 0 0 ${pxToRem(8)} 0;
  letter-spacing: -1px;
`

const LogoSubtext = styled.p`
  font-size: ${pxToRem(18)};
  opacity: 0.9;
  margin: 0;
`

const LoginContent = styled.div`
  width: 50%;
  padding: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    padding: ${pxToRem(24)};
  }
`

const FormContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
`

const Title = styled.h2`
  font-size: ${pxToRem(32)};
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0 0 ${pxToRem(8)} 0;
  letter-spacing: -0.5px;
`

const Subtitle = styled.p`
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.textSecondary};
  margin: 0 0 ${pxToRem(32)} 0;
`

const FormGroup = styled.div`
  margin-bottom: ${pxToRem(20)};
`

const Label = styled.label`
  display: block;
  font-size: ${pxToRem(14)};
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: ${pxToRem(8)};
`

const Input = styled.input`
  width: 100%;
  padding: ${pxToRem(12)};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${pxToRem(8)};
  font-size: ${pxToRem(14)};
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textPrimary};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: ${pxToRem(12)};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primaryHover} 100%
  );
  color: white;
  border: none;
  border-radius: ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${pxToRem(24)};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowLg};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.error}20;
  color: ${({ theme }) => theme.error};
  border: 1px solid ${({ theme }) => theme.error};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(12)};
  margin-bottom: ${pxToRem(16)};
  font-size: ${pxToRem(14)};
`

const RegisterLink = styled(Link)`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: ${pxToRem(14)};
  margin-top: ${pxToRem(16)};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  border: 2px solid ${({ theme }) => theme.primaryLight};
  border-top-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

interface LoginData {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()
  const { loading, postData } = usePost<LoginResponse, LoginData>('/auth/login')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos')
      return
    }

    try {
      // Primeiro, tentar com API real
      const response = await postData({ email, password })
      if (response) {
        login(response.token, response.user)
        navigate('/')
        return
      }
    } catch {
      // Se API falhar, tentar com mock users
      const mockUser = findMockUser(email, password)
      if (mockUser) {
        // Simular token JWT
        const mockToken = `mock_token_${Date.now()}`
        login(mockToken, {
          id: mockUser.id,
          name: mockUser.name,
          email: mockUser.email,
        })
        navigate('/')
        return
      }

      // Se não encontrou no mock, mostrar erro
      setErrorMessage('Email ou senha incorretos')
    }
  }

  return (
    <LoginArea>
      <LoginImage>
        <LogoSection>
          <LogoText>DNC Sales</LogoText>
          <LogoSubtext>Dashboard de Vendas</LogoSubtext>
        </LogoSection>
      </LoginImage>
      <LoginContent>
        <FormContainer>
          <Title>Bem-vindo</Title>
          <Subtitle>Acesse sua conta para continuar</Subtitle>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? <LoadingSpinner /> : 'Entrar'}
            </SubmitButton>
          </form>

          <RegisterLink to="/cadastro">Não tem conta? Crie uma</RegisterLink>
        </FormContainer>
      </LoginContent>
    </LoginArea>
  )
}

export default Login
