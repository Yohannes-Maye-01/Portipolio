import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from '../utils/motion';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building web and mobile applications.
              I specialize in React, React Native, and modern JavaScript frameworks, with strong backend skills in Python.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi voluptate placeat deserunt dicta consequatur asperiores magnam est, ducimus optio ab blanditiis vero architecto hic odio autem quibusdam voluptatibus cum.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines technical expertise with a deep understanding of user experience principles, 
              allowing me to create solutions that are not only functionally robust but also intuitive and enjoyable to use.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, 
              and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="pt-4">
              <a
                href="#contact"
                className={`inline-block px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 hover:translate-y-[-2px] ${
                  theme === 'dark'
                    ? 'border-primary text-primary hover:bg-primary/10'
                    : 'border-primary text-primary hover:bg-primary/10'
                }`}
              >
                Let's Connect
              </a>
            </div>
          </motion>
          
          <motion
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} shadow-sm`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Work Experience</h3>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="font-medium">Senior Frontend Developer</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        TechCorp Inc. • 2021 - Present
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Full Stack Developer</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        WebSolutions Ltd. • 2018 - 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} shadow-sm`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="font-medium">MSc Computer Science</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Tech University • 2016 - 2018
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore distinctio, inventore eveniet expedita sit, aliquam commodi nisi fuga nam perferendis dolores odit incidunt nemo? Reiciendis qui quod quia maxime.</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        State University • 2012 - 2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} shadow-sm`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Coding Stats</h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span>Projects Completed</span>
                      <span className="font-medium">35+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GitHub Contributions</span>
                      <span className="font-medium">1200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Client Satisfaction</span>
                      <span className="font-medium">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion>
        </div>
      </div>
    </section>
  );
};

export default About;