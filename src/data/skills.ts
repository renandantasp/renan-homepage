export interface SkillGroup {
  label: string;
  columns: 1 | 2;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'LANGUAGES',
    columns: 2,
    items: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'C#', 'Go'],
  },
  {
    label: 'WEB & PLATFORM',
    columns: 2,
    items: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Astro', 'Tailwind', '.NET', 'CI/CD'],
  },
  {
    label: 'AI & LLM',
    columns: 2,
    items: [
      'LangChain',
      'LangGraph',
      'AI Agents',
      'RAG',
      'Vector DBs',
      'MCP Servers',
      'Prompt Eng.',
      'Evals & Obs.',
      'spaCy',
    ],
  },
  {
    label: 'CLOUD & DATA',
    columns: 2,
    items: ['AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'RabbitMQ', 'Linux', 'Git'],
  },
];
