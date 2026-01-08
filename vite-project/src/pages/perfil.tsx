import styled from 'styled-components';

const PerfilContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PerfilCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PerfilTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const PerfilInfo = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Perfil = () => {
  return (
    <PerfilContainer>
      <PerfilTitle>Perfil do Usuário</PerfilTitle>
      <PerfilCard>
        <PerfilInfo><strong>Nome:</strong> Usuário</PerfilInfo>
        <PerfilInfo><strong>Email:</strong> usuario@example.com</PerfilInfo>
        <PerfilInfo><strong>Empresa:</strong> DNC Sales</PerfilInfo>
      </PerfilCard>
    </PerfilContainer>
  );
};

export default Perfil;
