export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  repo?: string;
  live?: string;
  category: 'web' | 'mobile' | 'backend';
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with React and Node.js',
    longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include product listings, user authentication, shopping cart, payment processing with Stripe, and an admin dashboard for product management.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
    repo: 'https://github.com/username/ecommerce-platform',
    live: 'https://ecommerce-demo.example.com',
    category: 'web',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Mobile app for managing tasks and projects on the go',
    longDescription: 'A cross-platform mobile application built with React Native for managing tasks, projects, and deadlines. Features include push notifications, offline mode, data synchronization, and team collaboration tools.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tech: ['React Native', 'Redux', 'Firebase', 'Expo', 'TypeScript'],
    repo: 'https://github.com/username/task-management-app',
    category: 'mobile',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'Interactive dashboard for tracking investment performance',
    longDescription: 'An interactive financial dashboard that helps users track their investment portfolios, analyze market trends, and make data-driven decisions. Built with Next.js and integrated with various financial APIs.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS', 'REST APIs'],
    repo: 'https://github.com/username/financial-dashboard',
    live: 'https://finance-dash.example.com',
    category: 'web',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'Web app that generates content using AI and NLP',
    longDescription: 'A web application that leverages artificial intelligence and natural language processing to generate high-quality content for marketing, blogs, and social media. Built with React and Python backend services.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI', 'Docker'],
    repo: 'https://github.com/username/ai-content-generator',
    live: 'https://ai-content.example.com',
    category: 'web',
  },
  {
    id: 5,
    title: 'API Gateway Service',
    description: 'Microservice for managing API routing and authentication',
    longDescription: 'A scalable API gateway service that handles routing, authentication, rate limiting, and logging for a microservices architecture. Built with Node.js and deployed on Kubernetes.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tech: ['Node.js', 'Express', 'JWT', 'Redis', 'Docker', 'Kubernetes'],
    repo: 'https://github.com/username/api-gateway',
    category: 'backend',
  },
  {
    id: 6,
    title: 'Health Tracking App',
    description: 'Mobile application for tracking health metrics and fitness goals',
    longDescription: 'A comprehensive health and fitness mobile application that helps users track their workouts, nutrition, sleep, and other health metrics. Features include custom workout plans, progress charts, and integration with wearable devices.',
    image: 'https://images.pexels.com/photos/3912953/pexels-photo-3912953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tech: ['React Native', 'TypeScript', 'GraphQL', 'Apollo', 'HealthKit API'],
    repo: 'https://github.com/username/health-tracking-app',
    category: 'mobile',
  },
];