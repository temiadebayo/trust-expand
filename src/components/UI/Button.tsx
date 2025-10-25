import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'gradient-primary text-white hover:shadow-modern-lg focus:ring-[#5E17EB]/30',
    secondary: 'bg-[#091266] text-white hover:bg-[#091266]/90 hover:shadow-modern-lg focus:ring-[#091266]/30',
    accent: 'gradient-accent text-white hover:shadow-modern-lg focus:ring-[#5E17EB]/30',
    outline: 'border-2 border-[#5E17EB] text-[#5E17EB] hover:bg-[#5E17EB] hover:text-white focus:ring-[#5E17EB]/30',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};