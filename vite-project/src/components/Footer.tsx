import styled from 'styled-components'
import { personalInfo } from '../data/portfolioData'

const FooterContainer = styled.footer`
  background: #2d3748;
  color: white;
  padding: 3rem 2rem 1.5rem;
  text-align: center;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterText = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const Copyright = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  opacity: 0.7;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Desenvolvido com React, TypeScript e Styled Components
        </FooterText>

        <FooterLinks>
          <FooterLink
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </FooterLink>
          <FooterLink
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </FooterLink>
          <FooterLink href={`mailto:${personalInfo.email}`}>Email</FooterLink>
        </FooterLinks>

        <Copyright>
          © {currentYear} {personalInfo.name}. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
