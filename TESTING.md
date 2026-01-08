# 🧪 Guia de Teste - Autenticação e API

## 📋 Pré-requisitos para Teste

Antes de começar, certifique-se de:
1. Node.js 18+ instalado
2. As dependências instaladas (`npm install`)
3. O arquivo `.env` configurado com a API base URL
4. Ter credenciais válidas para a API (email/senha)

## 🚀 Iniciando o Servidor

```bash
cd vite-project
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## ✅ Testes a Realizar

### 1. Teste de Rota Não Autenticada
**Objetivo**: Verificar se rotas protegidas redirecionam para login

**Passos**:
1. Abra `http://localhost:5173/` (home)
2. **Resultado esperado**: Redireciona automaticamente para `/login`

### 2. Teste de Login
**Objetivo**: Verificar se o sistema de autenticação funciona

**Passos**:
1. Em `http://localhost:5173/login`, preencha:
   - Email: seu@email.com (use credenciais válidas da API)
   - Senha: sua senha
2. Clique em "Entrar"
3. **Resultado esperado**: 
   - Loading spinner aparece
   - Redirecionamento para home após sucesso
   - Token armazenado em localStorage

**Teste com credenciais inválidas**:
1. Preencha com email/senha incorretos
2. **Resultado esperado**: Mensagem de erro "Email ou senha incorretos"

### 3. Teste de Persistência de Sessão
**Objetivo**: Verificar se a sessão persiste ao recarregar a página

**Passos**:
1. Faça login com sucesso
2. Recarregue a página (F5)
3. **Resultado esperado**: Permanece na home, não redireciona para login

### 4. Teste de Logout
**Objetivo**: Verificar se o logout funciona corretamente

**Passos**:
1. Esteja logado (ver nome de usuário no header)
2. Clique no botão logout (🚪 emoji)
3. **Resultado esperado**: 
   - localStorage é limpo
   - Redireciona para `/login`

### 5. Teste de Integração de Dados (Home Page)
**Objetivo**: Verificar se os dados da API são exibidos

**Passos**:
1. Faça login
2. Acesse a home page
3. **Resultado esperado**:
   - Gráfico de vendas carrega com dados reais
   - Top vendedores exibe dados da API
   - Leads recentes exibe dados da API
   - Cards de destaques exibem dados

**Indicadores de sucesso**:
- Spinner de loading aparece brevemente
- Dados são substituídos pelos dados reais
- Não há erros no console do navegador

### 6. Teste de Token na API
**Objetivo**: Verificar se o token é enviado corretamente

**Passos**:
1. Faça login
2. Abra DevTools (F12) → Network
3. Recarregue a página
4. Veja as requisições para a API
5. **Resultado esperado**:
   - Header `Authorization: Bearer <token>` está presente
   - Requisições retornam status 200

### 7. Teste de Tratamento de Erro
**Objetivo**: Verificar se erros de API são tratados

**Passos**:
1. Desconecte a internet ou bloqueie a API
2. Tente fazer login
3. Tente acessar a home
4. **Resultado esperado**:
   - Mensagens de erro apropriadas
   - Dados mock aparecem como fallback (se implementado)

### 8. Teste de Rota Publica (Login)
**Objetivo**: Verificar se login está acessível quando não autenticado

**Passos**:
1. Faça logout
2. Acesse `http://localhost:5173/login`
3. **Resultado esperado**: Página de login é exibida normalmente

### 9. Teste de Redirecionamento (Login quando autenticado)
**Objetivo**: Verificar se login redireciona se já autenticado

**Passos**:
1. Faça login
2. Acesse manualmente `http://localhost:5173/login`
3. **Resultado esperado**: Redireciona automaticamente para home

### 10. Teste Responsivo
**Objetivo**: Verificar se a interface funciona em diferentes tamanhos

**Passos**:
1. Abra DevTools (F12)
2. Mude para modo responsivo (Ctrl+Shift+M)
3. Teste em:
   - Mobile (320px)
   - Tablet (768px)
   - Desktop (1024px+)
4. **Resultado esperado**:
   - Layout se adapta corretamente
   - Todos os elementos visíveis
   - Formulário funciona em todos os tamanhos

## 🔍 Verificações de Console

Abra DevTools (F12) e acesse a aba **Console** para verificar:

### Verificar localStorage
```javascript
// No console, execute:
console.log(localStorage.getItem('token'))
console.log(localStorage.getItem('user'))
```

**Resultado esperado após login**:
- token: JWT string (ex: eyJhbGc...)
- user: JSON com id, name, email

### Verificar Requisições de API
Vá para a aba **Network** e:
1. Faça login → veja POST /auth/login
2. Acesse home → veja GET /sales/*, GET /leads, etc
3. **Resultado esperado**:
   - Status 200 OK
   - Request headers incluem `Authorization: Bearer <token>`
   - Response retorna dados válidos

### Erros Comuns

Se ver algum erro, procure por:

**Erro: "Cannot GET /api/..."**
- Verifique VITE_API_BASE_URL no .env
- Certifique-se de que a API está online

**Erro: "401 Unauthorized"**
- Token expirou → faça logout e login novamente
- Credenciais inválidas → use credenciais corretas

**Erro: "CORS"**
- API deve permitir requests do localhost
- Verifique configuração de CORS na API

**Erro: "Network request failed"**
- Verifique conexão de internet
- Verifique se a API está online

## 🎯 Checklist de Testes Completos

- [ ] Acesso a rota protegida redireciona para login
- [ ] Login com credenciais válidas funciona
- [ ] Login com credenciais inválidas mostra erro
- [ ] Persistência de sessão funciona
- [ ] Logout funciona e limpa dados
- [ ] Home exibe dados da API
- [ ] Gráficos carregam corretamente
- [ ] Top vendedores exibe dados reais
- [ ] Leads recentes exibe dados reais
- [ ] Token é enviado em requisições
- [ ] Erros de API são tratados
- [ ] Interface responsiva funciona
- [ ] localStorage contém token e user após login
- [ ] Redirecionamento de login quando autenticado funciona
- [ ] Todos os 6 endpoints da API são chamados

## 📝 Documentação de Referência

Para mais detalhes:
- [README.md](./vite-project/README.md) - Guia geral do projeto
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Detalhes técnicos de implementação
- Código comentado nos arquivos de autenticação

## 🆘 Suporte

Se encontrar problemas:
1. Verifique a aba Console do DevTools (F12)
2. Verifique a aba Network para ver requisições de API
3. Verifique o arquivo .env tem VITE_API_BASE_URL correto
4. Verifique se a API está online
5. Verifique credenciais de login

---

**Última atualização**: 2024
**Status**: Pronto para teste
