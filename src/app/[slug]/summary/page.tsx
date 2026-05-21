import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Star, Heart } from 'lucide-react';
import { mockPublicPortfolio } from '@/lib/mock-data';
import { BentoCard } from '@/components/ui/BentoCard';

interface PageProps {
  params: { slug: string };
}

async function getPortfolio(slug: string) {
  if (process.env.NODE_ENV === 'development') return mockPublicPortfolio;
  if (slug === mockPublicPortfolio.slug) return mockPublicPortfolio;
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await getPortfolio(params.slug);
  if (!p) return { title: 'Not Found' };
  return { title: `${p.firstName} ${p.lastInitial}. — Summary` };
}

export default async function SummaryPage({ params }: PageProps) {
  const p = await getPortfolio(params.slug);
  if (!p) notFound();

  const topProjects = p.projects.filter(pr => pr.isVisible).slice(0, 3);
  const topBadges = p.badges.slice(0, 4);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: 'var(--color-bg)' }}>
      <div className="w-full max-w-lg space-y-6">

        {/* Identity card */}
        <BentoCard className="text-center">
          <div
            className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl font-display font-bold"
            style={{ background: 'var(--color-surface-raised)', color: 'var(--color-primary)' }}
          >
            {p.firstName[0]}{p.lastInitial}
          </div>
          <h1 className="text-3xl font-display font-bold mb-1" style={{ color: 'var(--color-text)' }}>
            {p.firstName} {p.lastInitial}.
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            Class of {p.graduationYear} · {p.schoolName}
          </p>
          {p.personality?.ambitionStatement && (
            <p className="mt-4 text-sm italic leading-snug max-w-xs mx-auto" style={{ color: 'var(--color-accent)', opacity: 0.85 }}>
              "{p.personality.ambitionStatement}"
            </p>
          )}
        </BentoCard>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: <Star size={14} />, value: p.projects.length, label: 'Projects' },
            { icon: <CheckCircle size={14} />, value: p.totalVerifiedSkills, label: 'Skills' },
            { icon: <Heart size={14} />, value: `${p.totalVerifiedHours}h`, label: 'Service' },
            { icon: <Clock size={14} />, value: p.ecas.length, label: 'Activities' },
          ].map(({ icon, value, label }) => (
            <BentoCard key={label} className="flex flex-col items-center text-center !p-3">
              <span style={{ color: 'var(--color-primary)' }}>{icon}</span>
              <span className="text-lg font-display font-bold mt-1" style={{ color: 'var(--color-text)' }}>{value}</span>
              <span className="text-[10px]" style={{ color: 'var(--color-muted)' }}>{label}</span>
            </BentoCard>
          ))}
        </div>

        {/* Top projects */}
        {topProjects.length > 0 && (
          <BentoCard>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-muted)' }}>Featured Projects</p>
            <div className="space-y-2">
              {topProjects.map(pr => (
                <div key={pr.id} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }} />
                  <span className="text-sm" style={{ color: 'var(--color-text)' }}>{pr.title}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        )}

        {/* Badge strip */}
        {topBadges.length > 0 && (
          <BentoCard>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-muted)' }}>Certifications</p>
            <div className="flex gap-3 flex-wrap">
              {topBadges.map(badge => (
                <div key={badge.id} className="w-12 h-12 rounded-lg overflow-hidden" style={{ background: 'var(--color-surface-raised)' }}>
                  <img src={badge.imageUrl} alt={badge.badgeName} className="w-full h-full object-contain p-1" />
                </div>
              ))}
            </div>
          </BentoCard>
        )}

        {/* CTA */}
        <Link
          href={`/${params.slug}`}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-[var(--radius-card)] font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ background: 'var(--color-primary)', color: 'var(--color-bg)' }}
        >
          Explore {p.firstName}'s Full Portfolio
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
