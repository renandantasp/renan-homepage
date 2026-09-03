export interface Role {
  company: string;
  title: string;
  location: string;
  /** Visible range, mono. `end: null` renders as PRESENT. */
  start: string;
  startISO: string;
  end: string | null;
  endISO?: string;
  /** Max 4 — trim the copy, never the type scale. */
  bullets: string[];
}

export const experience: Role[] = [
  {
    company: 'Wonderful',
    title: 'Forward Deployed Eng.',
    location: 'São Paulo, SP · Hybrid',
    start: '06/2026',
    startISO: '2026-06',
    end: null,
    bullets: [
      'AI agents and agentic workflows with LangChain and LangGraph, wired into enterprise systems and APIs',
      'RAG end to end — document ingestion, embeddings, vector databases',
      'Full stack delivery: React interfaces, AWS services and an internal cloud platform',
      'Technical discovery with enterprise customers, then deployment, reliability and metrics after launch',
    ],
  },
  {
    company: 'Thoughtful AI',
    title: 'Forward Deployed Eng.',
    location: 'Texas, US · Remote',
    start: '09/2024',
    startISO: '2024-09',
    end: '04/2026',
    endISO: '2026-04',
    bullets: [
      'End-to-end HealthTech automation in Python, AWS, Selenium and Robocorp',
      'Data extraction and processing pipelines over PDFs, web portals and databases',
      'AWS RDS persistence and QuickSight dashboards for agent-run visibility',
      'Shared libraries across the full automation fleet, plus production support',
    ],
  },
  {
    company: 'LUZ Soluções',
    title: 'Full Stack Developer',
    location: 'São Carlos, SP',
    start: '05/2023',
    startISO: '2023-05',
    end: '08/2024',
    endISO: '2024-08',
    bullets: [
      'Access-heavy RESTful APIs between platform components',
      'Oracle and PostgreSQL for data integrity and query performance',
      'Docker services decoupled with RabbitMQ message queuing',
      'Large-scale fintech operations in C#, .NET Framework and Delphi',
    ],
  },
  {
    company: 'SOMOS Educação',
    title: 'Full Stack Developer',
    location: 'São Paulo, SP · Remote',
    start: '03/2022',
    startISO: '2022-03',
    end: '04/2023',
    endISO: '2023-04',
    bullets: [
      'Internal tools in TypeScript, React, Next.js, Node.js and Docker',
      'AWS infrastructure and Golang microservices',
      'NLP solutions with Python, spaCy, MongoDB and MySQL',
      'Code reviews and architecture best practices across the team',
    ],
  },
];
