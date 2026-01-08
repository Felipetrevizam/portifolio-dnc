# Portfólio de Felipe Trevizam

Um portfólio profissional moderno e responsivo que apresenta a trajetória minha como pesquisador e desenvolvedor de software, com foco em Engenharia de Manufatura e Ciência de Dados.

[Acesse o portfólio online aqui](https://portifolio-dnc-three.vercel.app)

## Como Começar

Se você quer rodar o projeto localmente:

```bash
# Entre na pasta do projeto
cd vite-project

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra seu navegador em `http://localhost:5173` para ver o site funcionando.

## O Que Tem Aqui

O portfólio é dividido em seções:

- **Navegação** - Menu flutuante que acompanha o scroll
- **Início** - Apresentação com foto e resumo profissional
- **Sobre** - Informações pessoais e formação acadêmica
- **Experiência** - Timeline com as experiências profissionais
- **Habilidades** - Linguagens, ferramentas e competências técnicas
- **Projetos** - Projetos profissionais e acadêmicos em destaque
- **Contato** - Formulário para entrar em contato
- **Rodapé** - Links para redes sociais e informações

## Tecnologias Usadas

- **React** - Para construir a interface
- **TypeScript** - Para deixar o código mais seguro
- **Vite** - Para rodar e compilar o projeto rapidamente
- **Styled Components** - Para escrever CSS dentro do JavaScript

### Informações

Todo o conteúdo do portfólio fica em um arquivo chamado `portfolioData.ts`.

```
vite-project/src/data/portfolioData.ts
```

- Nome, título e informação pessoal
- Experiências profissionais
- Formação acadêmica
- Habilidades e competências
- Projetos realizados

### Alterar Uma Foto

1. Salve uma foto com o nome `foto.webp` em `vite-project/public/`

### Mudar as Cores

As cores principais do site são azul (`#667eea`) e roxo (`#764ba2`). Para mudar para outras cores, é só procurar por esses códigos nos arquivos dos componentes.

## 📦 Preparar para Produção

Para criar uma versão pronta para usar na internet:

```bash
npm run build
```

## 📋 Comandos Úteis

```bash
npm run dev      # Roda o site localmente
npm run build    # Compila para produção
npm run preview  # Vê como fica o site compilado
npm run lint     # Verifica erros no código
```

## 📁 Organização do Projeto

```
vite-project/
├── src/
│   ├── components/          # Todos os componentes visuais
│   ├── data/
│   │   └── portfolioData.ts # EDITE AQUI seus dados
│   ├── pages/
│   │   └── portfolio.tsx    # Página principal
│   ├── App.tsx
│   ├── GlobalStyle.tsx
│   └── main.tsx
├── public/
│   └── foto.webp            # Coloque sua foto aqui
├── package.json
└── vite.config.ts
```

---

Desenvolvido com usando React, TypeScript e Vite
