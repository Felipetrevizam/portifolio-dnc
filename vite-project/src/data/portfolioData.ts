// Dados do portfólio de Felipe Trevizam
export const personalInfo = {
  name: 'Felipe Trevizam',
  title: 'Pesquisador e Desenvolvedor de Software',
  subtitle: 'Engenharia de Manufatura & Ciência de Dados',
  age: 25,
  location: 'São José dos Campos, SP',
  email: 'felipe.trevizam@exemplo.com',
  phone: '+55 (12) 99999-9999',
  linkedin: 'https://linkedin.com/in/felipetrevizam',
  github: 'https://github.com/felipetrevizam',
  description: `Profissional com sólida formação interdisciplinar, atuando na intersecção entre a Tecnologia da Informação e a Engenharia de Manufatura. Atualmente, dedico-me à pesquisa e ao desenvolvimento de softwares de análise de dados voltados à detecção de falhas em células rotativas, com proficiência em sistemas embarcados e ciência de dados aplicados à indústria.`,
}

export const education = [
  {
    id: 1,
    degree: 'Mestrado em Engenharia Aeronáutica e Mecânica',
    institution: 'Instituto Tecnológico de Aeronáutica (ITA)',
    period: '2024 - 2026',
    status: 'Em andamento',
    description:
      'Pesquisa focada em detecção de falhas em células rotativas através de análise de dados.',
  },
  {
    id: 2,
    degree: 'Bacharelado em Ciência e Tecnologia',
    institution: 'Universidade Federal de São Paulo (UNIFESP)',
    period: '2021 - 2025',
    status: 'Concluído',
    description:
      'Fundamentação científica sólida em ciências exatas e tecnologia.',
  },
  {
    id: 3,
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'UNICID',
    period: '2018 - 2021',
    status: 'Concluído',
    description: 'Base tecnológica em desenvolvimento de software e sistemas.',
  },
]

export const experience = [
  {
    id: 1,
    title: 'Pesquisador',
    company: 'Fundação de Apoio da UFMG (Fundep)',
    period: 'Março 2025 - Presente',
    location: 'Instituto Tecnológico de Aeronáutica (ITA)',
    description: `Condução de workshops e pesquisas em usinagem no ITA. Responsável pela integração entre o ecossistema acadêmico e a indústria através do projeto "Demonstradores".`,
    achievements: [
      'Liderança em workshops técnicos de usinagem',
      'Integração universidade-indústria',
      'Desenvolvimento de projetos demonstradores',
    ],
  },
  {
    id: 2,
    title: 'Assistente de Laboratório',
    company: 'Laboratório Aberto - CCM ITA',
    period: 'Fevereiro 2024 - Presente',
    location: 'Instituto Tecnológico de Aeronáutica (ITA)',
    description:
      'Auxílio na manutenção, mídia e operação de maquinário especializado.',
    achievements: [
      'Manutenção preventiva e corretiva de equipamentos',
      'Operação de maquinário de precisão',
      'Suporte técnico para pesquisadores',
    ],
  },
  {
    id: 3,
    title: 'Pesquisador',
    company: 'GearBox - EMBRAPII ITA',
    period: 'Fevereiro 2024 - Outubro 2024',
    location: 'Instituto Tecnológico de Aeronáutica (ITA)',
    description:
      'Desenvolvimento de software embarcado utilizando microcontroladores ESP32 e Arduino com linguagem C++.',
    achievements: [
      'Desenvolvimento de sistemas embarcados em C++',
      'Programação de ESP32 e Arduino',
      'Integração de sensores e atuadores',
    ],
  },
]

export const skills = {
  programming: [
    { name: 'Python', level: 95 },
    { name: 'R', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'JavaScript', level: 70 },
  ],
  tools: [
    { name: 'Power BI', level: 90 },
    { name: 'Excel', level: 85 },
    { name: 'Git', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'Arduino IDE', level: 85 },
  ],
  technical: [
    'Software Embarcado',
    'Análise de Dados',
    'Estatística',
    'Machine Learning',
    'Manutenção Preditiva',
    'Gestão de Projetos',
    'Indústria 4.0',
    'IoT',
  ],
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Software de Detecção de Falhas em Células Rotativas',
    description:
      'Sistema de análise de dados para manutenção preditiva em equipamentos industriais rotativos.',
    technologies: ['Python', 'Machine Learning', 'IoT', 'Análise de Dados'],
    period: '2024 - Presente',
    highlights: [
      'Redução de 40% no tempo de detecção de falhas',
      'Integração com sensores IoT',
      'Algoritmos de ML para predição de falhas',
    ],
  },
  {
    id: 2,
    title: 'Sistema Embarcado ESP32',
    description:
      'Desenvolvimento de firmware para microcontroladores ESP32 com foco em aquisição de dados.',
    technologies: ['C++', 'ESP32', 'Arduino', 'IoT'],
    period: '2024',
    highlights: [
      'Comunicação wireless eficiente',
      'Otimização de consumo energético',
      'Interface com múltiplos sensores',
    ],
  },
  {
    id: 3,
    title: 'Projeto Demonstradores - ITA',
    description:
      'Desenvolvimento de soluções integradas para demonstração de tecnologias de usinagem.',
    technologies: ['Python', 'Automação', 'Análise de Dados'],
    period: '2025',
    highlights: [
      'Integração universidade-indústria',
      'Workshops técnicos realizados',
      'Documentação técnica completa',
    ],
  },
]

export const certifications = [
  {
    id: 1,
    name: 'Gestão de Projetos',
    issuer: 'PMI',
    year: '2023',
  },
  {
    id: 2,
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2022',
  },
]
