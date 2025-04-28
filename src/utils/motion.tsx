import React from 'react';

// Define the basic motion interface
interface MotionProps {
  initial?: Record<string, number | string>;
  animate?: Record<string, number | string>;
  exit?: Record<string, number | string>;
  transition?: Record<string, number | string | boolean>;
  whileInView?: Record<string, number | string>;
  viewport?: Record<string, number | boolean>;
  whileHover?: Record<string, number | string>;
  whileTap?: Record<string, number | string>;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// Create a simplified motion component that handles animations with CSS
export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps & React.HTMLAttributes<HTMLDivElement>>(
    ({ initial, animate, exit, transition, whileInView, viewport, whileHover, whileTap, className, style, children, ...props }, ref) => {
      // Combine all the animation properties into style
      const combinedStyle: React.CSSProperties = {
        ...style,
        transition: transition ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease'}` : undefined,
        opacity: animate?.opacity !== undefined ? animate.opacity : initial?.opacity,
        transform: getTransformValue({ initial, animate, whileInView }),
      };
      
      // Add any animation classes
      const classes = [
        className || '',
        'motion-div',
      ].filter(Boolean).join(' ');
      
      return (
        <div
          ref={ref}
          className={classes}
          style={combinedStyle}
          {...props}
        >
          {children}
        </div>
      );
    }
  ),
};

// Helper function to generate CSS transform value
function getTransformValue({ initial, animate, whileInView }: { 
  initial?: Record<string, number | string>; 
  animate?: Record<string, number | string>;
  whileInView?: Record<string, number | string>;
}) {
  const transforms: string[] = [];
  const target = animate || whileInView || {};
  
  if (target.x !== undefined) {
    transforms.push(`translateX(${target.x}px)`);
  }
  
  if (target.y !== undefined) {
    transforms.push(`translateY(${target.y}px)`);
  }
  
  if (target.scale !== undefined) {
    transforms.push(`scale(${target.scale})`);
  }
  
  if (target.rotate !== undefined) {
    transforms.push(`rotate(${target.rotate}deg)`);
  }
  
  return transforms.length > 0 ? transforms.join(' ') : undefined;
}