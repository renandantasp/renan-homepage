export interface Education {
  period: string;
  location: string;
  school: string;
  degree: string;
  summary: string;
}

export const education: Education[] = [
  {
    period: '2018 → 2022',
    location: 'SÃO CARLOS, SP',
    school: 'UFSCar',
    degree: 'B.Sc. Computer Science',
    summary:
      'Algorithm analysis, data structures, databases, software engineering, AI, UI/UX and system design.',
  },
  {
    period: '2016 → 2017',
    location: 'SÃO CARLOS, SP',
    school: 'ETEC',
    degree: 'Game Programming',
    summary:
      'Game design principles, async programming, game frameworks, 3D modeling, project design.',
  },
];
