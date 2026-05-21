'use client';
import Link from 'next/link';

export function DevSwitcher({ currentSlug }: { currentSlug: string }) {
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.78rem',
          fontWeight: 500,
          color: 'var(--color-muted)',
          textDecoration: 'none',
          opacity: 0.6,
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
      >
        ← All Portfolios
      </Link>
      <span style={{ fontSize: '0.65rem', color: 'var(--color-muted)', opacity: 0.3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        PortfolioOS · UAE Demo
      </span>
    </div>
  );
}
