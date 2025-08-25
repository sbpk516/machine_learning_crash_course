import Link from 'next/link';
import { ButtonProps } from '@/types';
import { clsx } from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  disabled = false, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
