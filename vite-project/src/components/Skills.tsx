import styled from 'styled-components'
import { skills } from '../data/portfolioData'

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const SkillCategory = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const CategoryIcon = styled.span`
  font-size: 1.75rem;
`

const SkillItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #2d3748;
`

const SkillLevel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #667eea;
`

const SkillBar = styled.div`
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
`

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  width: ${(props) => props.level}%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: width 1s ease-in-out;
`

const TechnicalSkills = styled.div`
  grid-column: 1 / -1;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`

const SkillTag = styled.span`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  color: #667eea;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`

const LanguagesGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

const LanguageCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`

const LanguageName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`

const LanguageLevel = styled.div`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
`

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Habilidades & Competências</SectionTitle>

        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>
              <CategoryIcon>💻</CategoryIcon>
              Linguagens de Programação
            </CategoryTitle>
            {skills.programming.map((skill, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillHeader>
                <SkillBar>
                  <SkillProgress level={skill.level} />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>
              <CategoryIcon>🛠️</CategoryIcon>
              Ferramentas & Tecnologias
            </CategoryTitle>
            {skills.tools.map((tool, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <SkillName>{tool.name}</SkillName>
                  <SkillLevel>{tool.level}%</SkillLevel>
                </SkillHeader>
                <SkillBar>
                  <SkillProgress level={tool.level} />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillCategory>

          <TechnicalSkills>
            <CategoryTitle>
              <CategoryIcon>⚙️</CategoryIcon>
              Competências Técnicas
            </CategoryTitle>
            <TagsContainer>
              {skills.technical.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </TagsContainer>
          </TechnicalSkills>

          <LanguagesGrid>
            {skills.languages.map((language, index) => (
              <LanguageCard key={index}>
                <CategoryIcon>🌐</CategoryIcon>
                <LanguageName>{language.name}</LanguageName>
                <LanguageLevel>{language.level}</LanguageLevel>
              </LanguageCard>
            ))}
          </LanguagesGrid>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  )
}

export default Skills
