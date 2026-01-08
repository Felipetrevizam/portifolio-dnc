import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HomeDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>DNC Sales Dashboard</HomeTitle>
      <HomeDescription>Bem-vindo ao seu dashboard de vendas</HomeDescription>
    </HomeContainer>
  );
};

export default Home;
