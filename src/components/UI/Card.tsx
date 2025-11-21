import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'gradient' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  description,
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'bg-white shadow-modern border border-gray-100',
    gradient: 'bg-[#091266] text-white shadow-modern-lg',
    glass: 'glass text-white shadow-modern-lg',
  };

  return (
    <div className={`rounded-2xl p-8 hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 ${variantClasses[variant]} ${className}`}>
      {title && (
        <h3 className={`text-2xl font-bold mb-4 ${variant === 'default' ? 'text-[#091266]' : 'text-white'}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={`mb-6 leading-relaxed ${variant === 'default' ? 'text-gray-600' : 'text-white/90'}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
