import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';
  
  const variantClasses = {
    primary: 'bg-[#091266] text-white hover:bg-[#091266]/90 hover:shadow-modern-lg focus:ring-[#091266]/30',
    secondary: 'bg-[#091266] text-white hover:bg-[#091266]/90 hover:shadow-modern-lg focus:ring-[#091266]/30',
    accent: 'bg-[#5E17EB] text-white hover:bg-[#5E17EB]/90 hover:shadow-modern-lg focus:ring-[#5E17EB]/30',
    outline: 'border-2 border-[#091266] text-[#091266] hover:bg-[#091266] hover:text-white focus:ring-[#091266]/30',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};