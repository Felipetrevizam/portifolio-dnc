# DNC Sales Dashboard

Dashboard de vendas moderno e responsivo desenvolvido com React, TypeScript e Styled Components.

## 🎨 Características

- **Design Responsivo**: Interface adaptada para desktop, tablet e mobile
- **Autenticação Segura**: Sistema de login com token JWT
- **Integração com API**: Conexão com API RESTful para dados em tempo real
- **Tema Customizável**: Sistema de temas com suporte a cores principais
- **Gráficos Interativos**: Visualização de dados com charts
- **Tabelas Dinâmicas**: Exibição de dados estruturados

## 🚀 Inicio Rápido

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clonar o repositório

```bash
git clone <seu-repositorio>
cd vite-project
```

2. Instalar dependências

```bash
npm install
```

3. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação será aberta em `http://localhost:5173`

## 📋 Configuração da API

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_BASE_URL=https://reactts.tmc.group/api/
```

## 🔐 Sistema de Autenticação

O projeto utiliza autenticação baseada em tokens JWT:

1. **Login**: POST `/auth/login`
   - Email e senha do usuário
   - Retorna token e dados do usuário

2. **Persistência**: Token armazenado em `localStorage`

3. **Interceptadores**: Token automaticamente adicionado em todas as requisições

4. **Proteção de Rotas**: Acesso restrito a usuários autenticados

## 📊 Endpoints da API

### Vendas

- `GET /api/sales/highlights` - Destaques de vendas
- `GET /api/sales/month` - Vendas do mês
- `GET /api/sales/year` - Vendas do ano
- `GET /api/sales/stars` - Top vendedores

### Leads

- `GET /api/leads` - Listar leads
- `POST /api/leads` - Criar novo lead
- `DELETE /api/leads/{id}` - Deletar lead

### Notícias

- `GET /api/news` - Listar notícias

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── context/            # Context API para estado global
├── hooks/              # Custom hooks
├── pages/              # Páginas da aplicação
├── styles/             # Temas e estilos globais
├── types/              # Definições de tipos TypeScript
└── utils/              # Funções utilitárias
```

### Custom Hooks

#### `useAxios`

Hooks para requisições HTTP com Axios:

- `useGet<T>` - Requisições GET
- `usePost<T, P>` - Requisições POST
- `useDelete<T>` - Requisições DELETE

#### `useApi`

Hooks específicos para endpoints da API:

- `useSalesHighlights()`
- `useMonthlySales()`
- `useYearlySales()`
- `useTopSellers()`
- `useLeads()`
- `useNews()`

#### `useAuth`

Hook para acessar contexto de autenticação:

```typescript
const { user, token, isAuthenticated, login, logout } = useAuth()
```

### Scripts Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build de produção
npm run lint     # Executar linter
```

## 🎯 Fluxo de Login

1. Usuário acessa `/login`
2. Preenche email e senha
3. Sistema envia POST para `/auth/login`
4. API retorna token e dados do usuário
5. Token armazenado em localStorage
6. Usuário redirecionado para home
7. Token automaticamente incluído em todas as requisições

## 🔒 Proteção de Rotas

Rotas protegidas:

- `/` - Home (requer autenticação)
- `/leads` - Gerenciamento de leads (requer autenticação)
- `/perfil` - Perfil do usuário (requer autenticação)

Rotas públicas:

- `/login` - Login
- `/cadastro` - Registro

## 📦 Dependências Principais

- **React**: Interface de usuário
- **TypeScript**: Tipagem estática
- **Styled Components**: CSS-in-JS
- **Axios**: Cliente HTTP
- **React Router**: Roteamento
- **Material-UI**: Componentes UI
- **Chart.js**: Gráficos

## 🚀 Deploy

O projeto está configurado para deploy no Vercel. Adicione as variáveis de ambiente no painel do Vercel:

- `VITE_API_BASE_URL`

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
2. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
3. Push para a branch (`git push origin feat/nova-feature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 📞 Suporte

Para suporte, entre em contato ou abra uma issue no repositório.
