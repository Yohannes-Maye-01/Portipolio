import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from '../utils/motion';
import photo from '../image/photo.jpg'

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-16 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-white to-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Full-Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
              Hi, I'm <span className="text-primary">Yohannes Maye</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed opacity-90">
              I build modern web & mobile applications with React, React Native, and Remix.js. 
              My expertise extends to backend development with Python,node.js,express.js and other technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all duration-300 hover:bg-primary/90 hover:translate-y-[-2px] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#projects"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:translate-y-[-2px] ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
                }`}
              >
                View Projects
              </a>
            </div>
          </motion>

          <motion
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div
                className={`absolute inset-0 rounded-full ${
                  theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
                }`}
                style={{
                  transform: 'scale(0.85)',
                  animation: 'pulse 6s ease-in-out infinite alternate',
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-90"
                style={{
                  clipPath: 'circle(50% at center)',
                }}
              >
                <img
                  src={photo}
                  alt="Developer Portrait"
                  className="w-full h-full object-cover rounded-full opacity-90 mix-blend-overlay"
                />
              </div>
              <div
                className={`absolute -inset-4 rounded-full border-2 border-dashed ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                }`}
                style={{
                  animation: 'spin 20s linear infinite',
                }}
              ></div>
            </div>
          </motion>
        </div>
      </div>
    </section>
  );
};

export default Hero;