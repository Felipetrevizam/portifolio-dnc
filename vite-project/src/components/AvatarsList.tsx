import { Avatar, Box } from '@mui/material'
import styled from 'styled-components'
import { pxToRem } from '../utils'

const ListItem = styled(Box)`
  padding: ${pxToRem(12)} 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryLight};
    padding-left: ${pxToRem(8)};
    padding-right: ${pxToRem(8)};
    margin-left: ${pxToRem(-8)};
    margin-right: ${pxToRem(-8)};
    border-radius: ${pxToRem(8)};
  }
`

const Name = styled.span`
  font-size: ${pxToRem(16)};
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  display: block;
  margin-bottom: ${pxToRem(4)};
`

const Subtitle = styled.span`
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`

interface ListDataProps {
  avatar: string
  name: string
  subtitle: string
}

interface AvatarsListProps {
  listData: ListDataProps[]
}

const AvatarsList: React.FC<AvatarsListProps> = ({ listData }) => {
  return (
    <>
      {listData.map((item, index) => (
        <ListItem key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{
                width: 48,
                height: 48,
                marginRight: 2,
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            />
            <Box>
              <Name>{item.name}</Name>
              <Subtitle>{item.subtitle}</Subtitle>
            </Box>
          </Box>
        </ListItem>
      ))}
    </>
  )
}

export default AvatarsList
