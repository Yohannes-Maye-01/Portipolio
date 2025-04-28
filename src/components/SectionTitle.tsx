import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 relative inline-block">
        {children}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;