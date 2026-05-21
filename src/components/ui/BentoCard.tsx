import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
  noPadding?: boolean;
  glow?: boolean;
}

export function BentoCard({ children, className, wide, noPadding, glow, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        'glass-card relative overflow-hidden',
        !noPadding && 'p-5 md:p-6',
        wide && 'md:col-span-2',
        glow && 'border-primary/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('section-label', className)}>{children}</p>;
}
