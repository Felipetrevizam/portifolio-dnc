import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context'
import { pxToRem } from '../utils'
import { createMockUser } from '../utils/mockAuth'

const RegisterArea = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const RegisterImage = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primaryHover} 100%);
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

const RegisterContent = styled.div`
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
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primaryHover} 100%);
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

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.success}20;
  color: ${({ theme }) => theme.success};
  border: 1px solid ${({ theme }) => theme.success};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(12)};
  margin-bottom: ${pxToRem(16)};
  font-size: ${pxToRem(14)};
`

const LoginLink = styled(Link)`
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

interface RegisterData {
  name: string
  email: string
  password: string
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  // Redirecionar se já autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Nome é obrigatório')
      return false
    }

    if (!formData.email.trim()) {
      setErrorMessage('Email é obrigatório')
      return false
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Email inválido')
      return false
    }

    if (!formData.password) {
      setErrorMessage('Senha é obrigatória')
      return false
    }

    if (formData.password.length < 6) {
      setErrorMessage('Senha deve ter no mínimo 6 caracteres')
      return false
    }

    if (formData.password !== confirmPassword) {
      setErrorMessage('Senhas não coincidem')
      return false
    }

    return true
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Criar usuário usando mock storage
      const newUser = createMockUser(formData.name, formData.email, formData.password)

      if (!newUser) {
        setErrorMessage('Este email já está registrado')
        setLoading(false)
        return
      }

      // Simular token JWT (em produção viria da API)
      const mockToken = `mock_token_${Date.now()}`

      // Fazer login automaticamente após registro
      login(mockToken, newUser)

      setSuccessMessage('Conta criada com sucesso! Redirecionando...')

      // Redirecionar após 1.5 segundos
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      setErrorMessage('Erro ao criar conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <RegisterArea>
      <RegisterImage>
        <LogoSection>
          <LogoText>DNC Sales</LogoText>
          <LogoSubtext>Dashboard de Vendas</LogoSubtext>
        </LogoSection>
      </RegisterImage>

      <RegisterContent>
        <FormContainer>
          <Title>Criar Conta</Title>
          <Subtitle>Registre-se para começar a usar o dashboard</Subtitle>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

          <form onSubmit={handleRegister}>
            <FormGroup>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? <LoadingSpinner /> : 'Criar Conta'}
            </SubmitButton>
          </form>

          <LoginLink to="/login">Já tem uma conta? Faça login</LoginLink>
        </FormContainer>
      </RegisterContent>
    </RegisterArea>
  )
}

export default Register
