import styled from 'styled-components'
import { personalInfo } from '../data/portfolioData'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')
      no-repeat;
    background-size: cover;
    background-position: bottom;
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`

const HeroText = styled.div`
  flex: 1;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.95;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
`

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  animation: fadeInUp 0.8s ease-out 0.6s backwards;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Button = styled.a`
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;

  &.primary {
    background-color: white;
    color: #667eea;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  }

  &.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: white;
      color: #667eea;
      transform: translateY(-2px);
    }
  }
`

const HeroImage = styled.div`
  flex: 0 0 350px;
  animation: fadeInRight 0.8s ease-out;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 250px;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroText>
          <HeroTitle>{personalInfo.name}</HeroTitle>
          <HeroSubtitle>{personalInfo.title}</HeroSubtitle>
          <HeroDescription>{personalInfo.subtitle}</HeroDescription>
          <HeroButtons>
            <Button
              className="primary"
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </Button>
            <Button
              className="secondary"
              onClick={() => scrollToSection('projects')}
            >
              Ver Projetos
            </Button>
          </HeroButtons>
        </HeroText>
        <HeroImage>
          <ProfileImage
            src="/foto.webp"
            alt={personalInfo.name}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const target = e.target as HTMLImageElement
              target.src = `https://ui-avatars.com/api/?name=${personalInfo.name}&size=400&background=667eea&color=fff&bold=true`
            }}
          />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
