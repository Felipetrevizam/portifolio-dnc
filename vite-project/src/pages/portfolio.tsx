import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const PortfolioContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioContainer>
  )
}

export default Portfolio
