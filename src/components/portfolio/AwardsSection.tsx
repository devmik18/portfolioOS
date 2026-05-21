import { Trophy } from 'lucide-react';
import type { AwardEntry, AwardLevel } from '@/lib/types';

const LEVEL_STYLES: Record<AwardLevel, { label: string; color: string; bg: string }> = {
  SCHOOL:        { label: 'School',        color: 'var(--color-muted)',   bg: 'var(--color-raised)' },
  LOCAL:         { label: 'Local / City',  color: '#A89060',              bg: 'rgba(168,144,96,0.12)' },
  NATIONAL:      { label: 'National',      color: '#C8A96E',              bg: 'rgba(200,169,110,0.15)' },
  INTERNATIONAL: { label: 'International', color: '#E8C97E',              bg: 'rgba(232,201,126,0.18)' },
};

const CATEGORY_ICONS: Record<string, string> = {
  ACADEMIC: '📚', SPORT: '🏅', ARTS: '🎨', LEADERSHIP: '⭐',
  SERVICE: '🤝', STEM: '🔬', OTHER: '✦',
};

function AwardCard({ award }: { award: AwardEntry }) {
  const level = LEVEL_STYLES[award.level];
  const icon = CATEGORY_ICONS[award.category] ?? '✦';

  return (
    <div className="card p-5 flex gap-4">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: 'var(--color-raised)' }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-sm leading-snug" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
            {award.title}
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 mt-0.5"
            style={{ background: level.bg, color: level.color }}>
            {level.label}
          </span>
        </div>
        <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{award.awardingBody}</p>
        {award.placement && (
          <div className="flex items-center gap-1.5 mb-1">
            <Trophy size={11} style={{ color: 'var(--color-primary)' }} />
            <span className="text-xs font-semibold" style={{ color: 'var(--color-primary)' }}>{award.placement}</span>
          </div>
        )}
        {award.description && (
          <p className="text-xs line-clamp-2" style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>{award.description}</p>
        )}
        <p className="text-[10px] mt-2" style={{ color: 'var(--color-muted)' }}>{award.academicYear}</p>
      </div>
    </div>
  );
}

const LEVEL_ORDER: AwardLevel[] = ['INTERNATIONAL', 'NATIONAL', 'LOCAL', 'SCHOOL'];

export function AwardsSection({ awards }: { awards: AwardEntry[] }) {
  const visible = awards?.filter(a => a.isVisible) ?? [];
  if (!visible.length) return null;

  const sorted = [...visible].sort((a, b) =>
    LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) ||
    b.academicYear.localeCompare(a.academicYear)
  );

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Recognition</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        Awards & Honours
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sorted.map(a => <AwardCard key={a.id} award={a} />)}
      </div>
    </section>
  );
}
