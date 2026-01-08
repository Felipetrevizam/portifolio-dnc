import styled from 'styled-components'
import { experience } from '../data/portfolioData'

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
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

const Timeline = styled.div`
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -3rem;
    top: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;

    &::before {
      left: -1.6rem;
      width: 16px;
      height: 16px;
    }
  }
`

const ExperienceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    border-color: #667eea;
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`

const ExperienceCompany = styled.div`
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const ExperienceLocation = styled.div`
  font-size: 0.875rem;
  color: #718096;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const ExperiencePeriod = styled.div`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  align-self: flex-start;
`

const ExperienceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
`

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const AchievementItem = styled.li`
  padding: 0.5rem 0;
  color: #4a5568;
  display: flex;
  align-items: start;
  gap: 0.75rem;

  &::before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 50%;
    flex-shrink: 0;
    font-weight: bold;
    font-size: 0.875rem;
  }
`

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experiência Profissional</SectionTitle>

        <Timeline>
          {experience.map((exp) => (
            <TimelineItem key={exp.id}>
              <ExperienceCard>
                <ExperienceHeader>
                  <div>
                    <ExperienceTitle>{exp.title}</ExperienceTitle>
                    <ExperienceCompany>{exp.company}</ExperienceCompany>
                    <ExperienceLocation>📍 {exp.location}</ExperienceLocation>
                  </div>
                  <ExperiencePeriod>{exp.period}</ExperiencePeriod>
                </ExperienceHeader>

                <ExperienceDescription>{exp.description}</ExperienceDescription>

                <AchievementsList>
                  {exp.achievements.map((achievement, index) => (
                    <AchievementItem key={index}>{achievement}</AchievementItem>
                  ))}
                </AchievementsList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  )
}

export default Experience
