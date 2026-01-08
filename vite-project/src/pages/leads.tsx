import styled from 'styled-components'
import { Container } from '@mui/material'
import { Header, Card, CustomTable } from '../components'
import { pxToRem } from '../utils'

const LeadsContainer = styled.div`
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
  margin-bottom: ${pxToRem(24)};
  letter-spacing: -0.5px;
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
      case 'Perdido':
        return theme.error + '20'
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
      case 'Perdido':
        return theme.error
      default:
        return theme.textSecondary
    }
  }};
`

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: ${pxToRem(6)} ${pxToRem(12)};
  border-radius: ${pxToRem(6)};
  font-size: ${pxToRem(13)};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: ${pxToRem(8)};

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    transform: translateY(-1px);
  }
`

const SecondaryButton = styled(ActionButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    background-color: ${({ theme }) => theme.primaryLight};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`

const Leads = () => {
  const leadsTableData = {
    headers: ['ID', 'Nome', 'Email', 'Telefone', 'Empresa', 'Status', 'Ações'],
    rows: [
      [
        '#001',
        'Pedro Alves',
        'pedro.alves@email.com',
        '(11) 99999-1111',
        'Tech Solutions',
        <StatusBadge status="Novo">Novo</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#002',
        'Juliana Mendes',
        'juliana.mendes@email.com',
        '(11) 99999-2222',
        'Digital Corp',
        <StatusBadge status="Contato">Contato</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#003',
        'Ricardo Souza',
        'ricardo.souza@email.com',
        '(11) 99999-3333',
        'Innovation Labs',
        <StatusBadge status="Negociação">Negociação</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#004',
        'Fernanda Lima',
        'fernanda.lima@email.com',
        '(11) 99999-4444',
        'Global Systems',
        <StatusBadge status="Convertido">Convertido</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#005',
        'Paulo Ferreira',
        'paulo.ferreira@email.com',
        '(11) 99999-5555',
        'Smart Business',
        <StatusBadge status="Novo">Novo</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#006',
        'Carla Rodrigues',
        'carla.rodrigues@email.com',
        '(11) 99999-6666',
        'Future Tech',
        <StatusBadge status="Contato">Contato</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#007',
        'Marcos Oliveira',
        'marcos.oliveira@email.com',
        '(11) 99999-7777',
        'Cloud Services',
        <StatusBadge status="Perdido">Perdido</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#008',
        'Beatriz Santos',
        'beatriz.santos@email.com',
        '(11) 99999-8888',
        'Data Analytics',
        <StatusBadge status="Negociação">Negociação</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#009',
        'Rafael Costa',
        'rafael.costa@email.com',
        '(11) 99999-9999',
        'Web Solutions',
        <StatusBadge status="Convertido">Convertido</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
      [
        '#010',
        'Amanda Silva',
        'amanda.silva@email.com',
        '(11) 99999-0000',
        'Mobile Apps',
        <StatusBadge status="Novo">Novo</StatusBadge>,
        <>
          <ActionButton>Editar</ActionButton>
          <SecondaryButton>Detalhes</SecondaryButton>
        </>,
      ],
    ],
  }

  return (
    <LeadsContainer>
      <Header />
      <Container maxWidth="xl">
        <ContentSection>
          <PageTitle>Gerenciamento de Leads</PageTitle>
          <Card>
            <CustomTable headers={leadsTableData.headers} rows={leadsTableData.rows} />
          </Card>
        </ContentSection>
      </Container>
    </LeadsContainer>
  )
}

export default Leads
