# 🎯 Portfólio Profissional - Felipe Trevizam

Portfólio profissional moderno desenvolvido com React, TypeScript e Vite, apresentando a trajetória acadêmica e profissional de Felipe Trevizam, pesquisador e desenvolvedor especializado em Engenharia de Manufatura e Ciência de Dados.

![React](https://img.shields.io/badge/React-19.2.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?logo=vite)
![Styled Components](https://img.shields.io/badge/Styled--Components-6.2.0-db7093?logo=styled-components)

## � Quick Start

```bash
# 1. Instalar dependências
cd vite-project
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:5173
```

## 🎨 Sobre o Projeto

Este portfólio foi desenvolvido com foco em:
- **Performance**: Otimizado com Vite
- **Responsividade**: Design adaptável para todos os dispositivos
- **Acessibilidade**: Navegação suave e intuitiva
- **Manutenibilidade**: Código limpo e bem estruturado

## 📋 Seções do Portfólio

- ✅ **Navegação** - Menu sticky com scroll suave
- ✅ **Hero** - Apresentação impactante com foto
- ✅ **About** - Informações pessoais e formação
- ✅ **Experience** - Timeline de experiências profissionais
- ✅ **Skills** - Habilidades com barras de progresso
- ✅ **Projects** - Projetos em destaque
- ✅ **Contact** - Formulário e informações de contato
- ✅ **Footer** - Rodapé com links

## 🛠 Tecnologias

- **React 19.2.3** - Biblioteca UI
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.2.4** - Build tool
- **Styled Components 6.2.0** - CSS-in-JS

## 📁 Estrutura do Projeto

```
vite-project/
├── public/
│   └── profile.jpg         # Foto de perfil
├── src/
│   ├── components/         # Componentes React
│   ├── data/
│   │   └── portfolioData.ts # DADOS DO PORTFÓLIO
│   ├── pages/
│   │   └── portfolio.tsx   # Página principal
│   ├── utils/
│   ├── App.tsx
│   ├── GlobalStyle.tsx
│   └── main.tsx
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## ✏️ Personalização

### Atualizar Dados Pessoais

Edite [vite-project/src/data/portfolioData.ts](vite-project/src/data/portfolioData.ts):

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Seu Título',
  email: 'seu.email@exemplo.com',
  phone: '+55 (XX) 99999-9999',
  linkedin: 'https://linkedin.com/in/seu-perfil',
  github: 'https://github.com/seu-usuario',
  // ... mais informações
}
```

### Adicionar Foto de Perfil

1. Adicione uma foto chamada `profile.jpg` em `vite-project/public/`
2. A foto aparecerá automaticamente na Hero Section

### Personalizar Cores

Busque por `#667eea` (azul) e `#764ba2` (roxo) nos componentes para mudar o esquema de cores.

## 📦 Build para Produção

```bash
cd vite-project
npm run build
```

Os arquivos otimizados estarão em `vite-project/dist/`

## 🚀 Deploy

### Vercel (Recomendado - Grátis)

```bash
npm i -g vercel
cd vite-project
vercel
```

### Netlify

1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta `vite-project/dist/`

### GitHub Pages

```bash
cd vite-project
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Compila para produção
npm run preview  # Visualiza build localmente
npm run lint     # Executa ESLint
```

## 🎯 Checklist Final

- [ ] Foto adicionada em `public/profile.jpg`
- [ ] Dados pessoais atualizados
- [ ] Links do LinkedIn e GitHub corretos
- [ ] Projetos atualizados
- [ ] Experiências verificadas
- [ ] Habilidades atualizadas
- [ ] Build testado com sucesso
- [ ] Responsividade verificada (mobile/tablet/desktop)
- [ ] Deploy realizado

## 📚 Documentação Adicional

- [QUICK_START.md](QUICK_START.md) - Guia rápido de início
- [PERSONALIZACAO.md](PERSONALIZACAO.md) - Guia detalhado de personalização
- [FOTO_SETUP.md](FOTO_SETUP.md) - Instruções para adicionar foto
- [INSTRUCOES_FINAIS.md](INSTRUCOES_FINAIS.md) - Instruções finais

## 📞 Suporte

Para problemas com build ou desenvolvimento, verifique:

1. **Porta 5173 em uso**:
   ```bash
   lsof -ti:5173 | xargs kill -9
   ```

2. **Dependências não instaladas**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Erros de compilação**:
   ```bash
   npm run lint    # Verificar erros
   npm run build   # Tentar build novamente
   ```

---

**Desenvolvido com ❤️ para Felipe Trevizam**

Edite o arquivo [`src/data/portfolioData.ts`](src/data/portfolioData.ts):

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Seu Título',
  email: 'seu.email@exemplo.com',
  // ... outros campos
}
```

### Modificando Cores

Os gradientes principais usam as cores `#667eea` (azul) e `#764ba2` (roxo). Para alterar:

1. Busque por `#667eea` e `#764ba2` nos componentes
2. Substitua pelas cores desejadas
3. Mantenha a consistência em todos os arquivos

### Adicionando Novas Seções

1. Crie um novo componente em `src/components/`
2. Importe no [`portfolio.tsx`](src/pages/portfolio.tsx)
3. Adicione link na [`Navigation.tsx`](src/components/Navigation.tsx)

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:

```bash
npm i -g vercel
```

2. Faça deploy:

```bash
cd vite-project
vercel
```

### Netlify

1. Crie um arquivo `netlify.toml` na raiz do vite-project:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

2. Conecte seu repositório no Netlify

### GitHub Pages

1. Instale o gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Adicione ao package.json:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Execute:

```bash
npm run deploy
```

## 📝 Checklist de Implementação

- [x] Estrutura de dados do portfólio
- [x] Componentes principais (Hero, About, Experience, Skills, Projects, Contact)
- [x] Navegação responsiva
- [x] Design moderno com gradientes
- [x] Animações e transições
- [x] Responsividade completa
- [x] Formulário de contato
- [x] Footer com links sociais
- [ ] Adicionar foto de perfil em `public/profile.jpg`
- [ ] Personalizar dados em `portfolioData.ts`
- [ ] Deploy em produção

## 🎯 Próximos Passos

- [ ] Integrar formulário de contato com backend/serviço
- [ ] Adicionar Google Analytics
- [ ] Implementar modo dark/light
- [ ] Adicionar mais animações com Framer Motion
- [ ] Criar blog ou seção de artigos
- [ ] Adicionar traduções (i18n)
- [ ] Implementar PWA
- [ ] Adicionar testes unitários

## 👨‍💻 Autor

**Felipe Trevizam**

- Pesquisador e Desenvolvedor de Software
- Mestrando em Engenharia Aeronáutica e Mecânica - ITA
- Especialista em Sistemas Embarcados e Ciência de Dados

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como inspiração para seu próprio portfólio!

---

## 🤝 Contribuições

Sugestões e melhorias são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

**Desenvolvido com ❤️ usando React + TypeScript + Vite**
