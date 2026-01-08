import { useState } from 'react'
import styled from 'styled-components'
import { personalInfo } from '../data/portfolioData'

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
`

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  opacity: 0.9;
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
  }
`

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ContactCardIcon = styled.span`
  font-size: 1.5rem;
`

const ContactCardText = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: white;
    background: white;
  }

  &::placeholder {
    color: #718096;
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: white;
    background: white;
  }

  &::placeholder {
    color: #718096;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-3px);
  }
`

const SuccessMessage = styled.div`
  padding: 1rem;
  background: rgba(72, 187, 120, 0.2);
  border: 2px solid rgba(72, 187, 120, 0.5);
  border-radius: 8px;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio real do formulário
    console.log('Form data:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        <SectionSubtitle>
          Estou sempre aberto a novas oportunidades e colaborações
        </SectionSubtitle>

        <ContactContent>
          <ContactInfo>
            <ContactCard>
              <ContactCardTitle>
                <ContactCardIcon>📧</ContactCardIcon>
                Email
              </ContactCardTitle>
              <ContactCardText href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </ContactCardText>
            </ContactCard>

            <ContactCard>
              <ContactCardTitle>
                <ContactCardIcon>📱</ContactCardIcon>
                Telefone
              </ContactCardTitle>
              <ContactCardText href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone}
              </ContactCardText>
            </ContactCard>

            <ContactCard>
              <ContactCardTitle>
                <ContactCardIcon>📍</ContactCardIcon>
                Localização
              </ContactCardTitle>
              <ContactCardText as="p">{personalInfo.location}</ContactCardText>
            </ContactCard>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            {isSubmitted && (
              <SuccessMessage>
                ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
              </SuccessMessage>
            )}

            <FormGroup>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">Assunto</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Qual o motivo do contato?"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
          </ContactForm>
        </ContactContent>

        <SocialLinks>
          <SocialLink
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            💼
          </SocialLink>
          <SocialLink
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            🔗
          </SocialLink>
          <SocialLink href={`mailto:${personalInfo.email}`} title="Email">
            📧
          </SocialLink>
        </SocialLinks>
      </Container>
    </ContactSection>
  )
}

export default Contact
