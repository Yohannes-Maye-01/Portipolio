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
  {
    id: 7,
    title: 'Ethio-Exit-Exam',
    description: 'A mobile app for Ethiopian university exit exam preparation, built with React Native.',
    longDescription: 'Ethio-Exit-Exam is a cross-platform mobile application designed to help Ethiopian university students prepare for their exit exams. The app features organized study materials, practice questions, and a user-friendly interface. Built with React Native and integrated with Firebase for backend services.',
    image: 'https://via.placeholder.com/400x225.png?text=Ethio-Exit-Exam',
    tech: ['React Native', 'Firebase', 'JavaScript'],
    repo: 'https://github.com/Yohannes-Maye-01/Ethio-Exit-Exam',
    category: 'mobile',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    longDescription: 'This is a responsive portfolio website built with React and Tailwind CSS. It features sections for about, skills, projects, and contact, and is optimized for both desktop and mobile devices.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&fit=crop&w=400&q=80',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repo: 'https://github.com/username/portfolio-website',
    live: 'https://your-portfolio.example.com',
    category: 'web',
  },
  {
    id: 9,
    title: 'Weather App',
    description: 'A mobile app that displays real-time weather information.',
    longDescription: 'A cross-platform mobile application built with React Native and OpenWeatherMap API. Users can search for cities and view current weather, forecasts, and weather alerts.',
    image: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&fit=crop&w=400&q=80',
    tech: ['React Native', 'Expo', 'OpenWeatherMap API'],
    repo: 'https://github.com/username/weather-app',
    category: 'mobile',
  },
  {
    id: 10,
    title: 'Chat API Service',
    description: 'A backend API for real-time chat applications.',
    longDescription: 'A scalable backend service built with Node.js and Socket.io to support real-time messaging, user authentication, and chat room management. Deployed with Docker and tested with Postman.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&fit=crop&w=400&q=80',
    tech: ['Node.js', 'Express', 'Socket.io', 'Docker'],
    repo: 'https://github.com/username/chat-api-service',
    category: 'backend',
  },
];