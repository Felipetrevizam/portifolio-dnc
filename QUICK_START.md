# 🚀 Quick Start - Portfólio

## ⚡ Em 3 Passos

### 1️⃣ Instalar e Executar

```bash
cd vite-project
npm install
npm run dev
```

Acesse: **http://localhost:5173**

### 2️⃣ Adicionar Foto de Perfil

Salve uma foto como `profile.jpg` em:
```
vite-project/public/profile.jpg
```

### 3️⃣ Atualizar Dados Pessoais

Edite: `vite-project/src/data/portfolioData.ts`

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Seu Título Profissional',
  email: 'seu.email@exemplo.com',
  phone: '+55 (12) 99999-9999',
  linkedin: 'https://linkedin.com/in/seu-perfil',
  github: 'https://github.com/seu-usuario',
  // ... mais informações
}

// Atualizar também:
export const education = [...]
export const experience = [...]
export const skills = {...}
export const projects = [...]
```

## 📦 Build para Produção

```bash
npm run build
```

Arquivos otimizados em: `vite-project/dist/`

## 🚀 Deploy (Escolha uma opção)

### Vercel (Recomendado)
```bash
npm i -g vercel
cd vite-project
vercel
```

### Netlify
Acesse [netlify.com/drop](https://app.netlify.com/drop) e arraste a pasta `dist/`

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## ✅ Checklist

- [ ] Foto adicionada
- [ ] Dados pessoais atualizados
- [ ] Experiências atualizadas
- [ ] Projetos atualizados
- [ ] Build testado
- [ ] Deploy realizado

---

**Dúvidas?** Consulte o [README.md](README.md)
