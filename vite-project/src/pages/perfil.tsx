import styled from 'styled-components'
import { Container, Box, Avatar } from '@mui/material'
import { Header, Card } from '../components'
import { pxToRem } from '../utils'

const PerfilContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

const ContentSection = styled.section`
  padding: ${pxToRem(40)} 0;
`

const PageTitle = styled.h1`
  font-size: ${pxToRem(36)};
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: ${pxToRem(32)};
  letter-spacing: -0.5px;
`

const ProfileCard = styled(Card)`
  text-align: center;
`

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${pxToRem(24)};
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${pxToRem(16)} 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};

  &:last-child {
    border-bottom: none;
  }
`

const InfoLabel = styled.span`
  font-size: ${pxToRem(14)};
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`

const InfoValue = styled.span`
  font-size: ${pxToRem(14)};
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`

const UserName = styled.h2`
  font-size: ${pxToRem(28)};
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0 0 ${pxToRem(8)} 0;
`

const UserRole = styled.p`
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.primary};
  margin: 0 0 ${pxToRem(24)} 0;
  font-weight: 600;
`

const Perfil = () => {
  return (
    <PerfilContainer>
      <Header />
      <Container maxWidth="md">
        <ContentSection>
          <PageTitle>Meu Perfil</PageTitle>

          <ProfileCard>
            <AvatarContainer>
              <Avatar
                alt="Usuário"
                src="/dncavatar.svg"
                sx={{
                  width: 120,
                  height: 120,
                  border: '4px solid',
                  borderColor: 'primary.main',
                }}
              />
            </AvatarContainer>

            <UserName>Felipe Trevizam</UserName>
            <UserRole>Gerente de Vendas</UserRole>

            <Box sx={{ mt: 3, textAlign: 'left' }}>
              <InfoRow>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>felipe.trevizam@dnc.com</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Telefone:</InfoLabel>
                <InfoValue>(11) 99999-9999</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Empresa:</InfoLabel>
                <InfoValue>DNC Sales</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Departamento:</InfoLabel>
                <InfoValue>Vendas</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Localização:</InfoLabel>
                <InfoValue>São Paulo, SP</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Membro desde:</InfoLabel>
                <InfoValue>Janeiro 2024</InfoValue>
              </InfoRow>
            </Box>
          </ProfileCard>
        </ContentSection>
      </Container>
    </PerfilContainer>
  )
}

export default Perfil
