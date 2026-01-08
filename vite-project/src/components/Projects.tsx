import styled from 'styled-components'
import { projects } from '../data/portfolioData'

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
`

const ProjectHeader = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const ProjectPeriod = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ProjectBody = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
`

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  color: #667eea;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #667eea30;
`

const HighlightsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
`

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`

const HighlightItem = styled.li`
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.925rem;
  display: flex;
  align-items: start;
  gap: 0.5rem;

  &::before {
    content: '🚀';
    flex-shrink: 0;
  }
`

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projetos em Destaque</SectionTitle>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectPeriod>📅 {project.period}</ProjectPeriod>
              </ProjectHeader>

              <ProjectBody>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechnologiesContainer>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechnologiesContainer>

                <div>
                  <HighlightsTitle>Destaques:</HighlightsTitle>
                  <HighlightsList>
                    {project.highlights.map((highlight, index) => (
                      <HighlightItem key={index}>{highlight}</HighlightItem>
                    ))}
                  </HighlightsList>
                </div>
              </ProjectBody>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
