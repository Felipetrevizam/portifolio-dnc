import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: ${(props) => (props.$scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${(props) =>
    props.$scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div<{ $scrolled: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.$scrolled ? '#667eea' : 'white')};
  transition: color 0.3s ease;
`

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: ${(props) =>
      props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${(props) => (props.$isOpen ? '1' : '0')};
    transition: all 0.3s ease;
    z-index: 999;
  }
`

const NavLink = styled.a<{ $scrolled: boolean }>`
  color: ${(props) => (props.$scrolled ? '#2d3748' : 'white')};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #667eea;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    color: #2d3748;
    font-size: 1.1rem;
  }
`

const MenuButton = styled.button<{ $scrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => (props.$scrolled ? '#2d3748' : 'white')};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo $scrolled={scrolled}>FT</Logo>

        <MenuButton
          $scrolled={scrolled}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? '✕' : '☰'}
        </MenuButton>

        <NavLinks $isOpen={isOpen}>
          <NavLink $scrolled={scrolled} onClick={() => scrollToSection('hero')}>
            Início
          </NavLink>
          <NavLink
            $scrolled={scrolled}
            onClick={() => scrollToSection('about')}
          >
            Sobre
          </NavLink>
          <NavLink
            $scrolled={scrolled}
            onClick={() => scrollToSection('experience')}
          >
            Experiência
          </NavLink>
          <NavLink
            $scrolled={scrolled}
            onClick={() => scrollToSection('skills')}
          >
            Habilidades
          </NavLink>
          <NavLink
            $scrolled={scrolled}
            onClick={() => scrollToSection('projects')}
          >
            Projetos
          </NavLink>
          <NavLink
            $scrolled={scrolled}
            onClick={() => scrollToSection('contact')}
          >
            Contato
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navigation
