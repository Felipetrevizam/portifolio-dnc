import styled from 'styled-components'
import { personalInfo, education } from '../data/portfolioData'

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #2d3748;
    font-weight: 600;
  }
`

const InfoGrid = styled.div`
  display: grid;
  gap: 1rem;
`

const InfoItem = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`

const InfoText = styled.div`
  flex: 1;

  .label {
    font-size: 0.875rem;
    color: #718096;
    margin-bottom: 0.25rem;
  }

  .value {
    font-size: 1rem;
    color: #2d3748;
    font-weight: 600;
  }
`

const EducationGrid = styled.div`
  display: grid;
  gap: 2rem;
`

const EducationCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border-left: 4px solid #667eea;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }
`

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const EducationTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`

const EducationInstitution = styled.div`
  font-size: 1rem;
  color: #667eea;
  font-weight: 500;
`

const EducationPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #718096;
  white-space: nowrap;
`

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`

const EducationDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-top: 0.5rem;
`

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>

        <AboutContent>
          <AboutText>
            <p>{personalInfo.description}</p>
            <p>
              Com <strong>{personalInfo.age} anos</strong> e experiência em
              instituições de excelência como o{' '}
              <strong>ITA (Instituto Tecnológico de Aeronáutica)</strong> e a{' '}
              <strong>UNIFESP</strong>, minha atuação se concentra na aplicação
              de tecnologias emergentes para solucionar desafios complexos da
              indústria moderna.
            </p>
            <p>
              Meu trabalho atual envolve a integração entre o ecossistema
              acadêmico e a indústria, promovendo a inovação através de pesquisa
              aplicada e transferência de tecnologia.
            </p>
          </AboutText>

          <InfoGrid>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoText>
                <div className="label">Localização</div>
                <div className="value">{personalInfo.location}</div>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>🎓</InfoIcon>
              <InfoText>
                <div className="label">Formação Atual</div>
                <div className="value">Mestrando - ITA</div>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>💼</InfoIcon>
              <InfoText>
                <div className="label">Posição</div>
                <div className="value">Pesquisador - Fundep</div>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>🌐</InfoIcon>
              <InfoText>
                <div className="label">Idiomas</div>
                <div className="value">
                  Português (Nativo), Inglês (Avançado)
                </div>
              </InfoText>
            </InfoItem>
          </InfoGrid>
        </AboutContent>

        <SectionTitle style={{ marginTop: '3rem' }}>
          Formação Acadêmica
        </SectionTitle>

        <EducationGrid>
          {education.map((edu) => (
            <EducationCard key={edu.id}>
              <EducationHeader>
                <div>
                  <EducationTitle>{edu.degree}</EducationTitle>
                  <EducationInstitution>{edu.institution}</EducationInstitution>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <EducationPeriod>📅 {edu.period}</EducationPeriod>
                  {edu.status === 'Em andamento' && (
                    <StatusBadge style={{ marginTop: '0.5rem' }}>
                      {edu.status}
                    </StatusBadge>
                  )}
                </div>
              </EducationHeader>
              <EducationDescription>{edu.description}</EducationDescription>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </AboutSection>
  )
}

export default About
