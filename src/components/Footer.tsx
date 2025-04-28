import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 ${
        theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className={`text-xl font-bold font-display tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="text-primary">Yoha</span>nnes
            </a>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Building exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Yohannes-Maye-01"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200 shadow-sm'
              } transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-800'} />
            </a>
            <a
              href="https://www.linkedin.com/in/yohannesmaye/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200 shadow-sm'
              } transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-800'} />
            </a>
            <a
              href="https://x.com/king_yonni38158"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200 shadow-sm'
              } transition-colors duration-300`}
              aria-label="Twitter"
            >
              <Twitter size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-800'} />
            </a>
            <a
              href="mailto:yonnik446@gmail.com"
              className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200 shadow-sm'
              } transition-colors duration-300`}
              aria-label="Email"
            >
              <Mail size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-800'} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Yohannes Maye. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a
                  href="#home"
                  className={`hover:text-primary transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`hover:text-primary transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`hover:text-primary transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-primary transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;