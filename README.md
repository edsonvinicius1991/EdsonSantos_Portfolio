# Portfolio - Edson Santos

Este repositório contém o código-fonte do portfólio profissional de **Edson Santos**, desenvolvido como uma aplicação web moderna, responsiva e interativa. O projeto serve como uma vitrine para habilidades em Desenvolvimento Full-Stack, Análise de Dados e Automação Low-Code.

## 1. Introdução

### Propósito do Projeto
Apresentar de forma clara e visualmente atraente a trajetória profissional, habilidades técnicas e projetos desenvolvidos por Edson Santos. O foco é demonstrar a capacidade de entregar soluções de alta qualidade, combinando design intuitivo com engenharia robusta.

### Objetivos Principais
- **Demonstração de Competência:** Exibir proficiência técnica através do próprio código do portfólio.
- **Centralização de Informações:** Reunir currículo, projetos e contatos em um único ponto de acesso.
- **Experiência do Usuário (UX):** Oferecer uma navegação fluida com animações sutis e design responsivo.
- **Internacionalização:** Suporte a múltiplos idiomas (Português e Inglês) para alcance global.

### Tecnologias Utilizadas
O projeto foi construído sobre uma stack moderna focada em performance e experiência de desenvolvimento:

- **Core:** [React 19](https://react.dev/) (Biblioteca UI), [TypeScript](https://www.typescriptlang.org/) (Tipagem estática).
- **Build & Tooling:** [Vite](https://vitejs.dev/) (Bundler rápido).
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS).
- **Animações:** [Framer Motion](https://www.framer.com/motion/) (Animações declarativas), [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) (Fundo de partículas personalizado).
- **Visualização de Dados:** [Recharts](https://recharts.org/) (Gráficos compostos).
- **Ícones:** [Lucide React](https://lucide.dev/).

---

## 2. Requisitos de Instalação

Para executar este projeto localmente, certifique-se de ter o seguinte ambiente configurado:

### Dependências Necessárias
- **Node.js:** Versão LTS (v18.x ou superior recomendado).
- **Gerenciador de Pacotes:** npm (v9.x+) ou yarn/pnpm equivalentes.
- **Git:** Para clonagem e versionamento.

### Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/edsonvinicius1991/EdsonSantos_Portfolio.git
   cd EdsonSantos_Portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   Isso baixará todas as bibliotecas listadas no `package.json`.

---

## 3. Guia de Uso

### Execução em Desenvolvimento
Para iniciar o servidor local com Hot Module Replacement (HMR):
```bash
npm run dev
```
O projeto estará acessível em `http://localhost:5173`.

### Build de Produção
Para gerar os arquivos estáticos otimizados para deploy:
```bash
npm run build
```
Os artefatos serão gerados na pasta `dist/`.

### Visualização do Build
Para testar a versão de produção localmente após o build:
```bash
npm run preview
```

### Configurações Opcionais
- **Porta do Servidor:** Pode ser alterada via flags do Vite CLI ou arquivo `vite.config.ts`.
- **Variáveis de Ambiente:** Configuráveis via arquivos `.env` (atualmente não requer segredos críticos para execução básica).

---

## 4. Documentação Técnica

### Estrutura de Arquivos
A organização do projeto segue padrões de modularidade do React:

```
EdsonSantos_Portfolio/
├── components/         # Componentes reutilizáveis da UI
│   ├── Hero.tsx        # Seção principal com animações e background
│   ├── Skills.tsx      # Visualização de habilidades (Radar Chart e ícones)
│   ├── Projects.tsx    # Galeria de projetos
│   ├── Contact.tsx     # Rodapé e informações de contato
│   ├── ParticleBackground.tsx # Efeito canvas de conexões
│   └── TechIcons.tsx   # Ícones SVG personalizados (ex: Power Platform)
├── types.ts            # Definições de interfaces TypeScript (i18n, dados)
├── constants.ts        # Conteúdo estático e dicionários de tradução (PT/EN)
├── App.tsx             # Componente raiz e orquestração de layout
├── main.tsx            # Ponto de entrada da aplicação
└── index.css           # Configurações globais do Tailwind
```

### Componentes Principais
- **`Hero`:** Implementa um efeito de digitação (`Typewriter`) e integra o `ParticleBackground` para dinamismo visual.
- **`Skills`:** Utiliza `Recharts` para um gráfico de radar interativo e renderiza ícones de tecnologias (SVGs inline e imagens externas).
- **`Projects`:** Exibe cards de projetos com filtragem por categoria (Dev, Data, QA).
- **`ParticleBackground`:** Componente otimizado em Canvas que desenha uma rede neural de partículas conectadas.

### Fluxo de Trabalho
1. **Tradução:** Todo o texto é servido via `constants.ts` baseado no estado de idioma selecionado em `App.tsx`.
2. **Estilização:** O Tailwind é usado para responsividade (mobile-first) e tema escuro (Dark Mode padrão).
3. **Animação:** Framer Motion controla as transições de entrada (fade-in, slide-up) conforme o scroll (`ScrollReveal`).

---

## 5. Informações Adicionais

### Status Atual
✅ **Em Desenvolvimento Ativo.**
- Funcionalidades principais implementadas.
- Otimizações recentes: Ícones oficiais (Power Platform), Fundo de partículas, Internacionalização do rodapé.

### Roadmap Planejado
- [ ] Implementação de modo claro/escuro (toggle).
- [ ] Integração com CMS para atualização dinâmica de projetos.
- [ ] Testes automatizados (E2E com Playwright).
- [ ] Melhorias de acessibilidade (a11y).

### Contato e Suporte
Para dúvidas, sugestões ou oportunidades de colaboração:

- **Email:** [edsonvinicius@hotmail.com](mailto:edsonvinicius@hotmail.com)
- **LinkedIn:** [Edson Santos](https://www.linkedin.com/in/edson-oliveira91/)
- **GitHub:** [edsonvinicius1991](https://github.com/edsonvinicius1991)

---
© 2025 Edson Santos. Todos os direitos reservados.
