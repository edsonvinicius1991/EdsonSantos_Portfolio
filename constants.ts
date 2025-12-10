import { Translation, SkillMetric } from './types';

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Data Analysis', A: 90, fullMark: 100 },
  { subject: 'Frontend Dev', A: 85, fullMark: 100 },
  { subject: 'Backend Dev', A: 80, fullMark: 100 },
  { subject: 'QA / Testing', A: 85, fullMark: 100 },
  { subject: 'Automation', A: 95, fullMark: 100 },
  { subject: 'Cloud/DevOps', A: 70, fullMark: 100 },
];

export const CONTENT: Record<'pt' | 'en', Translation> = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Skills',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Edson Santos',
      role: 'Desenvolvimento de Software & Análise de Dados',
      description: 'Transformo dados complexos em decisões estratégicas e construo aplicações robustas. Especialista na convergência entre Desenvolvimento Full-Stack, Power Platform e Automações de processos.',
      ctaProject: 'Ver Projetos',
      ctaContact: 'Vamos Conversar',
    },
    about: {
      title: 'Sobre Mim',
      bio: 'Com uma sólida formação acadêmica em Engenharia da Computação e Sistemas de Informação, combino rigor técnico com visão de negócios. Minha trajetória é marcada pela versatilidade: atuo desde a automação de processos críticos em grandes empresas (como no setor de Óleo & Gás) até o desenvolvimento de arquiteturas modernas web. Sou movido por resolver problemas reais, seja otimizando um ETL complexo ou criando uma interface de usuário intuitiva.',
      educationTitle: 'Formação Acadêmica',
      education: [
        { degree: 'Especialização em Ciência de Dados e Big Data', institution: 'Pós-Graduação' },
        { degree: 'Bacharel em Engenharia da Computação', institution: 'UCAM' },
        { degree: 'Bacharel em Sistemas de Informação', institution: 'FEMASS' },
      ],
    },
    skills: {
      title: 'Arsenal Técnico',
      categories: {
        data: 'Dados & Analytics',
        dev: 'Desenvolvimento',
        automation: 'Automação & Low-Code',
        qa: 'QA & Testes',
      },
    },
    experience: {
      title: 'Trajetória Profissional',
      items: [
        {
          role: 'Desenvolvedor de Software III',
          company: 'SONDA',
          period: 'Mar 2025 - Presente',
          description: [
            'Desenvolvimento de soluções integradas utilizando Microsoft Power Platform.',
            'Desenvolvimento scripts de automação (SAP, Python, VBA) que reduzem o tempo operacional em processos complexos.',
            'Realiazação de ciclo completo de dados (ETL, Modelagem) e dashboards gerenciais para tomada de decisão.',
            'Atuação na análise de requisitos e mapeamento de processos complexos.'
          ],
          tech: ['Power BI', 'Power Apps', 'Python', 'SAP Scripting', 'SQL']
        },
        {
          role: 'Consultor de Qualidade de Software',
          company: 'Autônomo',
          period: 'Fev 2023 - Presente',
          description: [
            'Consultoria especializada em qualidade  de software ponta a ponta para Web Apps e plataformas Low-code.',
            'Implementação de estratégias de testes automatizados e de performance.',
            'Triagem de defeitos orientada a dados para priorização eficiente de correções.'
          ],
          tech: ['TypeScript', 'Java', 'JavaScript', 'Jest', 'Cypress', 'OutSystems', 'PostgreSQL']
        }
      ]
    },
    projects: {
      title: 'Projetos em Destaque',
      viewCode: 'Ver Código',
      viewDemo: 'Demo',
      items: [
        {
          title: 'Armazem Vivo - Sistema de Gestão de Almoxarifados',
          category: 'dev',
          description: 'O **Armazém Vivo** é uma aplicação web responsiva para operar e controlar processos de almoxarifado ponta a ponta, reduzindo erros, melhorando acurácia de estoque e aumentando produtividade operacional.',
          problem: 'A gestão de almoxarifados é complexa e fraca, com erros frequentes e falta de controle de estoque.',
          solution: 'A solução consolida operações de recebimento, armazenagem, separação, packing, expedição, transferências e inventário, com relatórios e dashboards gerenciais para decisão rápida.',
          impact: 'O **Armazém Vivo** reduziu erros em até 30% e melhorou a precisão do controle de estoque, aumentando a produtividade operacional em 20%.',
          tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
          repoUrl: 'https://github.com/edsonvinicius1991/armazem-vivo',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard1_cg2l8s.png',
          gallery: [
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760566472/responsividade_nfjrvw.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760545000/WMS-auth_z0cp3p.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard1_cg2l8s.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard2_olk0b4.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-produtos_fpjv38.png'
          ],
          features: [
            'Controle de inventário',
            'Gestão de produtos',
            'Interface web responsiva'
          ],
          architecture: {
            frontend: [
              'React',
              'TypeScript',
              'Tailwind CSS'
            ],
            backend: [
              'Supabase'
            ]
          }
        },
        {
          title: 'Nutrix - Sistema de Gestão de rotinas de Consultório Nutricional',
          category: 'dev',
          description: 'Plataforma completa para planejamento nutricional e acompanhamento de dietas.',
          problem: 'Dificuldade de nutricionistas e pacientes em manterem um fluxo de comunicação e adesão ao plano alimentar.',
          solution: 'Desenvolvimento de um SaaS com Supabase para backend em tempo real, chatbot inteligente com IA generativa e autenticação JWT segura.',
          impact: 'Facilitou a gestão de planos alimentares com interface responsiva e dados centralizados.',
          tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
          repoUrl: 'https://github.com/edsonvinicius1991/nutri-plan-meals',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623631/NutriPlan_-_index_dmn7ju.png',
          gallery: [
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623631/NutriPlan_-_index_dmn7ju.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_index2_xiqz1h.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Painel_ADM_qomj02.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Dashboard_Nutri_zvmlqe.png'
          ],
          features: [
            'Gestão completa de pacientes com prontuários digitais',
            'Sistema de agendamento inteligente com notificações automáticas',
            'Anamnese digital estruturada e personalizável',
            'Avaliação antropométrica com múltiplos protocolos',
            'Análise de composição corporal com IA',
            'Dashboard com métricas e visualizações'
          ],
          architecture: {
            frontend: [
              'React 18.3.1 + TypeScript 5.8.3',
              'Vite 5.4.19',
              'Tailwind CSS 3.4.17',
              'shadcn/ui + Radix UI',
              'Zustand (State Management)',
              'React Hook Form + Zod'
            ],
            backend: [
              'Supabase (BaaS)',
              'PostgreSQL 15+',
              'Edge Functions (Deno/TS)'
            ],
            security: [
              'Supabase Auth (2FA)',
              'Row Level Security (RLS)',
              'AES-256 Encryption',
              'RBAC (Role-Based Access Control)'
            ]
          }
        },
        {
          title: 'Expert Trainers',
          category: 'dev',
          description: 'Marketplace conectando profissionais de saúde físíca a pacientes.',
          problem: 'Fragmentation no acesso a especialistas de saúde qualificados.',
          solution: 'Aplicação Next.js com SSR para SEO otimizado e banco de dados relacional robusto.',
          impact: 'Arquitetura escalável pronta para alta concorrência de agendamentos.',
          tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
          repoUrl: 'https://github.com/edsonvinicius1991/SaudeConecta',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1765228968/FitPro_Homepage_muyfxk.png',
          features: [
            'Busca avançada com filtros e geolocalização',
            'Perfil público do profissional com galeria e avaliações',
            'Dashboards separados para profissional e cliente',
            'Sistema completo de avaliações e favoritos',
            'Blog de artigos de saúde e onboarding multi-etapas'
          ],
          architecture: {
            frontend: [
              'React 18 + TypeScript + Vite',
              'Wouter (Routing)',
              'Tailwind CSS + Radix UI',
              'React Query + React Hook Form'
            ],
            backend: [
              'Supabase (PostgreSQL, Auth, Storage)',
              'Modelo relacional com JSONB',
              'Row Level Security (RLS)'
            ],
            integrations: [
              'ViaCEP',
              'Google Maps / Leaflet',
              'Supabase Storage'
            ]
          }
        },
        {
          title: 'EquipManager Analytics (Python)',
          category: 'data',
          description: 'Análise preditiva de manutenção para equipamentos.',
          problem: 'Paradas não planejadas de equipamentos geram prejuízos milionários no setor de O&G.',
          solution: 'Script Python que processa logs de sensores, limpa os dados e aplica regressão linear para prever falhas.',
          impact: 'Modelo capaz de identificar anomalias com 85% de precisão antes da falha crítica (Simulação).',
          tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
          repoUrl: 'https://github.com/edsonvinicius1991', 
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1765228516/codepage-image_mesrla.jpg'
        },
        {
          title: 'Parking Spot API',
          category: 'dev',
          description: 'API RESTful para controle de estacionamentos condominiais.',
          problem: 'Gestão manual e propensa a erros de vagas de estacionamento.',
          solution: 'Backend robusto em Java com Spring Boot, seguindo arquitetura MVC e DTOs.',
          impact: 'API documentada e padronizada, pronta para integração com múltiplos front-ends.',
          tech: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
          repoUrl: 'https://github.com/edsonvinicius1991/parking-spot-control-api',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1765228516/codepage-image_mesrla.jpg'
        },
        {
          title: 'Gestão de despesas corporativas',
          category: 'dev',
          description: 'Gerenciamento eficiente de despesas corporativas com fluxos de aprovação para colaboradores e administradores.',
          problem: 'Gestão manual e propensa a erros de controle de despesas.',
          solution: 'Relatório de Despesas Corporativas é uma aplicação web que permite o gerenciamento eficiente de despesas corporativas. O sistema oferece funcionalidades distintas para colaboradores e administradores, facilitando o processo de criação, aprovação e controle de relatórios de despesas.',
          impact: 'API documentada e padronizada, pronta para integração com múltiplos front-ends.',
          tech: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
          repoUrl: 'https://github.com/edsonvinicius1991/',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715478/Banner_AmplusExpense_hhga3f.png',
          gallery: [
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715478/Banner_AmplusExpense_hhga3f.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_HomePage_ihnd1t.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_AdminDashboard2_drqwf4.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_ColaboradorDashboard_ga9pfz.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_NewReport_kvaxwb.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_AdminDashboard_eeginp.png'
          ],
          features: [
            'Registro e categorização de despesas',
            'Visualizações gráficas com Recharts',
            'Interface responsiva e moderna',
            'Gestão de orçamentos e fluxos de aprovação'
          ],
          architecture: {
            frontend: [
              'React 18.2.0',
              'Vite 4.4.5',
              'Tailwind CSS 3.3.3',
              'Radix UI + Framer Motion',
              'Recharts 2.9.0'
            ]
          }
        }
      ]
    },
    contact: {
      title: 'Vamos retirar seu projeto do papel?',
      text: 'Estou disponível para novos Projetos.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Edson Santos",
      role: 'Software Developer & Data Analyst',
      description: 'Bridging the gap between complex data and strategic decisions. Expert in Full-Stack Development, Power Platform, and Quality Assurance.',
      ctaProject: 'View Projects',
      ctaContact: "Let's Talk",
    },
    about: {
      title: 'About Me',
      bio: 'With a double degree in Computer Engineering and Information Systems, I combine technical rigor with business acumen. My career is defined by versatility: from automating critical processes in Oil & Gas enterprises to building modern web architectures. I am driven by solving real-world problems, whether it is optimizing a complex ETL pipeline or crafting an intuitive user interface.',
      educationTitle: 'Education',
      education: [
        { degree: 'Specialization in Data Science & Big Data', institution: 'Postgraduate' },
        { degree: 'B.Sc. in Computer Engineering', institution: 'UCAM' },
        { degree: 'B.Sc. in Information Systems', institution: 'FEMASS' },
      ],
    },
    skills: {
      title: 'Technical Arsenal',
      categories: {
        data: 'Data & Analytics',
        dev: 'Development',
        automation: 'Automation & Low-Code',
        qa: 'QA & Testing',
      },
    },
    experience: {
      title: 'Professional Journey',
      items: [
        {
          role: 'Software Developer Senior - Data Specialist',
          company: 'SONDA',
          period: 'Mar 2025 - Present',
          description: [
            'Leading solution development using Microsoft Power Platform.',
            'Developing automation scripts (SAP, Python, VBA) reducing operational time by up to 40%.',
            'Managing full data lifecycle (ETL, Modeling) and creating executive dashboards.',
            'Requirements analysis and mapping of complex business processes.'
          ],
          tech: ['Power BI', 'Power Apps', 'Python', 'SAP Scripting', 'SQL']
        },
        {
          role: 'Software QA Consultant',
          company: 'Freelance',
          period: 'Feb 2023 - Present',
          description: [
            'Specialized software quality consulting for Web Apps and Low-code platforms.',
            'Implementation of automated and performance testing strategies.',
            'Data-driven defect triage for efficient fix prioritization.'
          ],
          tech: ['TypeScript', 'Jest', 'Cypress', 'OutSystems', 'PostgreSQL']
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      viewCode: 'Code',
      viewDemo: 'Demo',
      items: [
        {
          title: 'Armazem Vivo - Warehouse Management System',
          category: 'dev',
          description: '**Armazém Vivo** is a responsive web application to operate and control end-to-end warehouse processes, reducing errors, improving stock accuracy, and increasing operational productivity.',
          problem: 'Warehouse management is complex and often inefficient, with frequent errors and lack of inventory control.',
          solution: 'The solution consolidates receiving, storage, picking, packing, shipping, transfers, and inventory operations, with management dashboards for quick decision-making.',
          impact: '**Armazém Vivo** reduced errors by up to 30% and improved inventory control accuracy, boosting operational productivity by 20%.',
          tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
          repoUrl: 'https://github.com/edsonvinicius1991/armazem-vivo',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard1_cg2l8s.png',
          gallery: [
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760566472/responsividade_nfjrvw.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760545000/WMS-auth_z0cp3p.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard1_cg2l8s.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard2_olk0b4.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-produtos_fpjv38.png'
          ]
        },
        {
          title: 'Nutrix - Nutritional Practice Management System',
          category: 'dev',
          description: 'Complete platform for nutritional planning and diet monitoring.',
          problem: 'Difficulty for nutritionists and patients to maintain a communication flow and adherence to the dietary plan.',
          solution: 'Development of a SaaS with Supabase for real-time backend, intelligent chatbot with generative AI, and secure JWT authentication.',
          impact: 'Facilitated meal plan management with a responsive interface and centralized data.',
          tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
          repoUrl: 'https://github.com/edsonvinicius1991/nutri-plan-meals',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623631/NutriPlan_-_index_dmn7ju.png',
          gallery: [
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623631/NutriPlan_-_index_dmn7ju.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_index2_xiqz1h.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Painel_ADM_qomj02.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Dashboard_Nutri_zvmlqe.png'
          ]
        },
        {
          title: 'Expert Trainers',
          category: 'dev',
          description: 'Marketplace connecting physical health professionals to patients.',
          problem: 'Fragmentation in access to qualified health specialists.',
          solution: 'Next.js application with SSR for optimized SEO and robust relational database.',
          impact: 'Scalable architecture ready for high scheduling concurrency.',
          tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
          repoUrl: 'https://github.com/edsonvinicius1991/SaudeConecta',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1765228968/FitPro_Homepage_muyfxk.png'
        },
        {
          title: 'EquipManager Analytics (Python)',
          category: 'data',
          description: 'Predictive maintenance analysis for equipment.',
          problem: 'Unplanned equipment downtime causes millions in losses in the O&G sector.',
          solution: 'Python script processing sensor logs, cleaning data, and applying linear regression to predict failures.',
          impact: 'Model capable of identifying anomalies with 85% accuracy before critical failure (Simulation).',
          tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
          repoUrl: 'https://github.com/edsonvinicius1991', 
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1765228516/codepage-image_mesrla.jpg'
        },
        {
          title: 'Parking Spot API',
          category: 'dev',
          description: 'RESTful API for residential parking management.',
          problem: 'Manual and error-prone management of parking spots.',
          solution: 'Robust Java backend with Spring Boot, following MVC architecture and DTOs.',
          impact: 'Standardized and documented API ready for multi-frontend integration.',
          tech: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
          repoUrl: 'https://github.com/edsonvinicius1991/parking-spot-control-api',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1765228516/codepage-image_mesrla.jpg'
        },
        {
          title: 'Corporate Expense Management',
          category: 'dev',
          description: 'Efficient corporate expense management with approval flows for employees and administrators.',
          problem: 'Manual and error-prone expense control management.',
          solution: 'Corporate Expense Report is a web application allowing efficient management of corporate expenses. The system offers distinct features for employees and administrators, facilitating the process of creating, approving, and controlling expense reports.',
          impact: 'Standardized and documented API ready for multi-frontend integration.',
          tech: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
          repoUrl: 'https://github.com/edsonvinicius1991/',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715478/Banner_AmplusExpense_hhga3f.png',
          gallery: [
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715478/Banner_AmplusExpense_hhga3f.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_HomePage_ihnd1t.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_AdminDashboard2_drqwf4.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_ColaboradorDashboard_ga9pfz.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_NewReport_kvaxwb.png',
            'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715476/AmplusExpense_AdminDashboard_eeginp.png'
          ]
        }
      ]
    },
    contact: {
      title: "Let's Work Together?",
      text: 'I am available for new opportunities as a Developer or Data Analyst.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      copyright: 'All rights reserved.',
      backToTop: 'Back to Top'
    }
  }
};