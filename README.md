# Miniverso

Base do projeto acadêmico de Programação Avançada para Web.

O projeto apresenta a essência da Miniverso, seu portfólio e, futuramente, uma área restrita para gerenciamento de projetos. A aplicação será responsiva, acessível, dinâmica e instalável como PWA.

## Tecnologias desta primeira etapa

- Vue.js com Vite no frontend
- Node.js no backend
- Git para versionamento
- Visual Studio Code como editor

## Estrutura

```text
miniverso/
├── frontend/    # Landing page, portfólio e PWA
├── backend/     # API em Node.js
└── .vscode/     # Recomendações para o VS Code
```

## Como executar no Visual Studio Code

Antes de começar, instale uma versão LTS atual do Node.js. Depois, abra **a pasta `miniverso`** no Visual Studio Code e use o terminal integrado.

Na primeira vez:

```bash
npm install
```

Em um terminal, execute o frontend:

```bash
npm run dev:frontend
```

Em outro terminal, execute o backend:

```bash
npm run dev:backend
```

- Frontend: `http://localhost:5187`
- Backend: `http://localhost:3000`
- Verificação da API: `http://localhost:3000/api/health`

## Conferir o PWA em produção

```bash
npm run build
npm run preview
```

O modo de desenvolvimento é suficiente durante a implementação. O funcionamento offline deve ser conferido após gerar a versão de produção.

## Escopo atual

Esta é somente a fundação do projeto. Login real, banco de dados e dashboard serão implementados quando os requisitos dessas etapas estiverem definidos.
