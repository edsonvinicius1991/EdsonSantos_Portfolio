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
      description: 'Transformo dados complexos em decisões estratégicas e construo aplicações robustas. Especialista na convergência entre Desenvolvimento Full-Stack, Power Platform e Garantia da Qualidade.',
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
            'Lidero o desenvolvimento de soluções integradas utilizando Microsoft Power Platform.',
            'Desenvolvo scripts de automação (SAP, Python, VBA) que reduzem o tempo operacional em até 40%.',
            'Responsável pelo ciclo completo de dados (ETL, Modelagem) e dashboards gerenciais para tomada de decisão.',
            'Atuo na análise de requisitos e mapeamento de processos complexos.'
          ],
          tech: ['Power BI', 'Power Apps', 'Python', 'SAP Scripting', 'SQL']
        },
        {
          role: 'Consultor de QA',
          company: 'Autônomo',
          period: 'Fev 2023 - Presente',
          description: [
            'Consultoria especializada em qualidade de software para Web Apps e plataformas Low-code.',
            'Implementação de estratégias de testes automatizados e de performance.',
            'Triagem de defeitos orientada a dados para priorização eficiente de correções.'
          ],
          tech: ['TypeScript', 'Jest', 'Cypress', 'OutSystems', 'PostgreSQL']
        }
      ]
    },
    projects: {
      title: 'Projetos em Destaque',
      viewCode: 'Ver Código',
      viewDemo: 'Demo',
      items: [
        {
          title: 'Nutri Plan Meals',
          category: 'dev',
          description: 'Plataforma completa para planejamento nutricional e acompanhamento de dietas.',
          problem: 'Dificuldade de nutricionistas e pacientes em manterem um fluxo de comunicação e adesão ao plano alimentar.',
          solution: 'Desenvolvimento de um SaaS utilizando Supabase para backend em tempo real e autenticação segura.',
          impact: 'Facilitou a gestão de planos alimentares com interface responsiva e dados centralizados.',
          tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
          repoUrl: 'https://github.com/edsonvinicius1991/nutri-plan-meals',
          image: 'https://picsum.photos/600/400?random=1'
        },
        {
          title: 'Saúde Conecta',
          category: 'dev',
          description: 'Marketplace conectando profissionais de saúde a pacientes.',
          problem: 'Fragmentation no acesso a especialistas de saúde qualificados.',
          solution: 'Aplicação Next.js com SSR para SEO otimizado e banco de dados relacional robusto.',
          impact: 'Arquitetura escalável pronta para alta concorrência de agendamentos.',
          tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
          repoUrl: 'https://github.com/edsonvinicius1991/SaudeConecta',
          image: 'https://picsum.photos/600/400?random=2'
        },
        {
          title: 'PetroLog Analytics (Python)',
          category: 'data',
          description: 'Análise preditiva de manutenção para equipamentos de extração.',
          problem: 'Paradas não planejadas de equipamentos geram prejuízos milionários no setor de O&G.',
          solution: 'Script Python que processa logs de sensores, limpa os dados e aplica regressão linear para prever falhas.',
          impact: 'Modelo capaz de identificar anomalias com 85% de precisão antes da falha crítica (Simulação).',
          tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
          repoUrl: 'https://github.com/edsonvinicius1991', 
          image: 'https://picsum.photos/600/400?random=3'
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
          image: 'https://picsum.photos/600/400?random=4'
        },
        {
          title: 'Gestão de despesas corporatativas',
          category: 'dev',
          description: 'Gerenciamento eficiente de despesas corporativas com fluxos de aprovação para colaboradores e administradores.',
          problem: 'Gestão manual e propensa a erros de controle de despesas.',
          solution: 'Relatório de Despesas Corporativas é uma aplicação web que permite o gerenciamento eficiente de despesas corporativas. O sistema oferece funcionalidades distintas para colaboradores e administradores, facilitando o processo de criação, aprovação e controle de relatórios de despesas.',
          impact: 'API documentada e padronizada, pronta para integração com múltiplos front-ends.',
          tech: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
          repoUrl: 'https://github.com/edsonvinicius1991/',
          image: 'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1764715478/Banner_AmplusExpense_hhga3f.png'
        }
      ]
    },
    contact: {
      title: 'Vamos retirar seu projeto do papel?',
      text: 'Estou disponível para novos Projetos.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
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
          role: 'Software Developer III',
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
          role: 'QA Consultant',
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
          title: 'Nutri Plan Meals',
          category: 'dev',
          description: 'Comprehensive platform for nutritional planning and diet tracking.',
          problem: 'Difficulty for nutritionists and patients to maintain communication flow and diet adherence.',
          solution: 'SaaS development using Supabase for real-time backend and secure auth.',
          impact: 'Streamlined meal plan management with a responsive interface.',
          tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
          repoUrl: 'https://github.com/edsonvinicius1991/nutri-plan-meals',
          image: 'https://picsum.photos/600/400?random=1'
        },
        {
          title: 'Saúde Conecta',
          category: 'dev',
          description: 'Marketplace connecting healthcare professionals to patients.',
          problem: 'Fragmentation in accessing qualified health specialists.',
          solution: 'Next.js application with SSR for optimized SEO and robust relational database.',
          impact: 'Scalable architecture ready for high scheduling concurrency.',
          tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
          repoUrl: 'https://github.com/edsonvinicius1991/SaudeConecta',
          image: 'https://picsum.photos/600/400?random=2'
        },
        {
          title: 'PetroLog Analytics (Python)',
          category: 'data',
          description: 'Predictive maintenance analysis for extraction equipment.',
          problem: 'Unplanned equipment downtime causes millions in losses in the O&G sector.',
          solution: 'Python script processing sensor logs, cleaning data, and applying linear regression.',
          impact: 'Model capable of identifying anomalies with 85% accuracy before critical failure (Simulation).',
          tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
          repoUrl: 'https://github.com/edsonvinicius1991',
          image: 'https://picsum.photos/600/400?random=3'
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
          image: 'https://picsum.photos/600/400?random=4'
        }
      ]
    },
    contact: {
      title: "Let's Work Together?",
      text: 'I am available for new opportunities as a Developer or Data Analyst.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    }
  }
};