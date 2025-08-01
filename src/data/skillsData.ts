export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  level: number; // 0-100
  icon: string;
}

export const skillsData: Skill[] = [
  {
    name: 'React',
    category: 'frontend',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'React Native',
    category: 'mobile',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Remix.js',
    category: 'frontend',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 92,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    level: 100,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Python',
    category: 'backend',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Django',
    category: 'backend',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 88,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    category: 'backend',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MongoDB',
    category: 'backend',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Git',
    category: 'tools',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
 
 

  {
    name: 'Figma',
    category: 'tools',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'SASS',
    category: 'frontend',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
   
    name: 'REST API',
    category: 'backend',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg',
  },
  {
    name: 'Firebase',
    category: 'tools',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Heroku',
    category: 'tools',
    level: 65,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
  },
  {
    name: 'Vercel',
    category: 'tools',
    level: 60,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  },
  
  {
    name: 'MySQL',
    category: 'backend',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
 
  {
    name: 'Canva',
    category: 'tools',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    name: 'Postman',
    category: 'tools',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  },
  {
    name: 'Linux',
    category: 'tools',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'Java',
    category: 'backend',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'JavaFX',
    category: 'frontend',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'C++',
    category: 'backend',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'C#',
    category: 'backend',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
];