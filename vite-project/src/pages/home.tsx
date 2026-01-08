import styled from 'styled-components'
import { Container, Box } from '@mui/material'
import { Header, Card, CardTitle, CardValue, CardLabel, CustomChart, AvatarsList, CustomTable } from '../components'
import { pxToRem, currencyConverter } from '../utils'

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

const HeroSection = styled.section`
  padding: ${pxToRem(48)} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primaryHover} 100%);
  color: white;
  text-align: center;
  margin-bottom: ${pxToRem(40)};
`

const HeroTitle = styled.h1`
  font-size: ${pxToRem(48)};
  font-weight: 700;
  margin: 0 0 ${pxToRem(16)} 0;
  letter-spacing: -1px;
`

const HeroSubtitle = styled.p`
  font-size: ${pxToRem(18)};
  opacity: 0.95;
  margin: 0;
  font-weight: 400;
`

const Section = styled.section`
  margin-bottom: ${pxToRem(48)};
`

const StatusBadge = styled.span<{ status: string }>`
  padding: ${pxToRem(4)} ${pxToRem(12)};
  border-radius: ${pxToRem(12)};
  font-size: ${pxToRem(12)};
  font-weight: 600;
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'Novo':
        return theme.info + '20'
      case 'Contato':
        return theme.warning + '20'
      case 'Negociação':
        return theme.primary + '20'
      case 'Convertido':
        return theme.success + '20'
      default:
        return theme.borderColor
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'Novo':
        return theme.info
      case 'Contato':
        return theme.warning
      case 'Negociação':
        return theme.primary
      case 'Convertido':
        return theme.success
      default:
        return theme.textSecondary
    }
  }};
`

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  border-radius: ${pxToRem(6)};
  font-size: ${pxToRem(14)};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    transform: translateY(-1px);
  }
`

const Home = () => {
  // Mock data
  const salesData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    data: [45000, 52000, 48000, 61000, 58000, 70000],
  }

  const leadsData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    data: [32, 45, 38, 52, 48, 65],
  }

  const topSellers = [
    {
      avatar: '/dncavatar.svg',
      name: 'Maria Silva',
      subtitle: currencyConverter(125000),
    },
    {
      avatar: '/dncavatar.svg',
      name: 'João Santos',
      subtitle: currencyConverter(98000),
    },
    {
      avatar: '/dncavatar.svg',
      name: 'Ana Costa',
      subtitle: currencyConverter(87000),
    },
    {
      avatar: '/dncavatar.svg',
      name: 'Carlos Oliveira',
      subtitle: currencyConverter(76000),
    },
  ]

  const recentLeads = {
    headers: ['Nome', 'Email', 'Telefone', 'Status', 'Ações'],
    rows: [
      ['Pedro Alves', 'pedro@email.com', '(11) 99999-1111', <StatusBadge status="Novo">Novo</StatusBadge>, <ActionButton>Ver detalhes</ActionButton>],
      ['Juliana Mendes', 'juliana@email.com', '(11) 99999-2222', <StatusBadge status="Contato">Contato</StatusBadge>, <ActionButton>Ver detalhes</ActionButton>],
      ['Ricardo Souza', 'ricardo@email.com', '(11) 99999-3333', <StatusBadge status="Negociação">Negociação</StatusBadge>, <ActionButton>Ver detalhes</ActionButton>],
      ['Fernanda Lima', 'fernanda@email.com', '(11) 99999-4444', <StatusBadge status="Convertido">Convertido</StatusBadge>, <ActionButton>Ver detalhes</ActionButton>],
      ['Paulo Ferreira', 'paulo@email.com', '(11) 99999-5555', <StatusBadge status="Novo">Novo</StatusBadge>, <ActionButton>Ver detalhes</ActionButton>],
    ],
  }

  return (
    <HomeContainer>
      <Header />
      
      <HeroSection>
        <Container maxWidth="xl">
          <HeroTitle>DNC Sales Dashboard</HeroTitle>
          <HeroSubtitle>Gerencie suas vendas de forma inteligente e eficiente</HeroSubtitle>
        </Container>
      </HeroSection>

      <Container maxWidth="xl">
        <Section>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
            <Card variant="info">
                <CardLabel>Total de Vendas</CardLabel>
                <CardValue>{currencyConverter(334000)}</CardValue>
                <CardLabel>+15% este mês</CardLabel>
              </Card>
              <Card variant="success">
                <CardLabel>Leads Convertidos</CardLabel>
                <CardValue>280</CardValue>
                <CardLabel>+23% este mês</CardLabel>
              </Card>
              <Card variant="warning">
                <CardLabel>Taxa de Conversão</CardLabel>
                <CardValue>68%</CardValue>
                <CardLabel>+5% este mês</CardLabel>
              </Card>
              <Card variant="error">
                <CardLabel>Ticket Médio</CardLabel>
                <CardValue>{currencyConverter(1193)}</CardValue>
                <CardLabel>-2% este mês</CardLabel>
              </Card>
            </Box>
        </Section>

        <Section>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
            <Card>
                <CardTitle>Vendas nos últimos 6 meses</CardTitle>
                <Box sx={{ mt: 2 }}>
                  <CustomChart
                    labels={salesData.labels}
                    data={salesData.data}
                    type="line"
                    label="Vendas"
                  />
                </Box>
              </Card>
              <Card>
                <CardTitle>Top Vendedores</CardTitle>
                <Box sx={{ mt: 2 }}>
                  <AvatarsList listData={topSellers} />
                </Box>
              </Card>
            </Box>
        </Section>

        <Section>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 3 }}>
            <Card>
                <CardTitle>Novos Leads</CardTitle>
                <Box sx={{ mt: 2 }}>
                  <CustomChart
                    labels={leadsData.labels}
                    data={leadsData.data}
                    type="bar"
                    label="Leads"
                  />
                </Box>
              </Card>
              <Card>
                <CardTitle>Leads Recentes</CardTitle>
                <Box sx={{ mt: 2 }}>
                  <CustomTable headers={recentLeads.headers} rows={recentLeads.rows} />
                </Box>
              </Card>
            </Box>
        </Section>
      </Container>
    </HomeContainer>
  )
}

export default Home
