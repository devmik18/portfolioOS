import { Shield, Award } from 'lucide-react';
import { VerifiedChip } from '@/components/ui/VerifiedChip';
import type { VolunteeringEntry, BadgeEntry } from '@/lib/types';

function VolCard({ v }: { v: VolunteeringEntry }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
          {v.organisationName}
        </h3>
        <VerifiedChip verificationStatus={v.verificationStatus} />
      </div>
      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{v.role}</p>
      {v.impactStatement && (
        <p className="text-xs mb-3 line-clamp-2" style={{ color: 'var(--color-muted)', lineHeight: 1.65 }}>
          {v.impactStatement}
        </p>
      )}
      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-muted)' }}>
        <span className="flex items-center gap-1"><Shield size={11} /> {v.hoursLogged}h</span>
        <span>{v.startDate.slice(0, 4)}{v.endDate ? `–${v.endDate.slice(0, 4)}` : '–Present'}</span>
      </div>
    </div>
  );
}

export function VolunteeringSection({ volunteering }: { volunteering: VolunteeringEntry[] }) {
  const visible = volunteering.filter(v => v.isVisible !== false);
  if (!visible.length) return null;

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Service & Volunteering</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        Community Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {visible.map(v => <VolCard key={v.id} v={v} />)}
      </div>
    </section>
  );
}

function BadgeCard({ badge }: { badge: BadgeEntry }) {
  return (
    <div className="card p-4 flex gap-3 items-start">
      <div
        className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ background: 'var(--color-raised)' }}
      >
        {badge.imageUrl ? (
          <img src={badge.imageUrl} alt={badge.badgeName} className="w-full h-full object-contain" />
        ) : (
          <Award size={22} style={{ color: 'var(--color-primary)' }} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-xs leading-snug mb-1" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
          {badge.badgeName}
        </h3>
        {badge.issuerName && (
          <p className="text-[10px] mb-1.5" style={{ color: 'var(--color-muted)' }}>{badge.issuerName}</p>
        )}
        <VerifiedChip badgeStatus={badge.verificationStatus} />
      </div>
    </div>
  );
}

export function BadgesSection({ badges }: { badges: BadgeEntry[] }) {
  if (!badges?.length) return null;

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Recognition</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        Certifications &amp; Recognition
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {badges.map(b => <BadgeCard key={b.id} badge={b} />)}
      </div>
    </section>
  );
}
