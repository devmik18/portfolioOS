'use client';

import { useState } from 'react';
import { Clock, Trophy, ChevronRight } from 'lucide-react';
import { EcaModal } from '@/components/portfolio/DetailModals';
import type { EcaEntry } from '@/lib/types';

const ECA_ICONS: Record<string, string> = {
  SPORT: '🏅', ARTS: '🎨', MUSIC: '🎵', ACADEMIC: '📚',
  COMMUNITY: '🤝', LEADERSHIP: '⭐', DEBATE: '🗣️',
  STEM: '🔬', CULTURAL: '🌍', OTHER: '✦',
};

const ECA_COLORS: Record<string, string> = {
  SPORT: '#FB923C', ARTS: '#C084FC', MUSIC: '#F472B6', ACADEMIC: '#60A5FA',
  COMMUNITY: '#34D399', LEADERSHIP: '#FBBF24', DEBATE: '#2DD4BF',
  STEM: '#818CF8', CULTURAL: '#F97316', OTHER: '#94A3B8',
};

function EcaCard({ eca, onClick }: { eca: EcaEntry; onClick: () => void }) {
  const icon = ECA_ICONS[eca.category] ?? '✦';
  const color = ECA_COLORS[eca.category] ?? '#94A3B8';
  const totalHours = eca.totalHours ?? (eca.hoursPerWeek && eca.weeksActive ? eca.hoursPerWeek * eca.weeksActive : undefined);

  return (
    <div
      className="card p-5 flex gap-4 cursor-pointer group"
      onClick={onClick}
      style={{ transition: 'border-color 0.15s, transform 0.15s' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '';
        (e.currentTarget as HTMLElement).style.transform = '';
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: `${color}18`, border: `1px solid ${color}25` }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <h3 className="font-semibold text-sm" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
            {eca.name}
          </h3>
          <span className="text-[10px] flex-shrink-0 mt-0.5" style={{ color: 'var(--color-muted)' }}>{eca.academicYear}</span>
        </div>
        <p className="text-xs font-semibold mb-2" style={{ color }}>{eca.role}</p>
        {eca.description && (
          <p className="text-xs mb-2 line-clamp-2" style={{ color: 'var(--color-muted)', lineHeight: 1.65 }}>{eca.description}</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-wrap">
            {totalHours && (
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-muted)' }}>
                <Clock size={11} /> {totalHours}h
              </span>
            )}
            {eca.achievements && (
              <span className="flex items-center gap-1 text-xs" style={{ color, opacity: 0.85 }}>
                <Trophy size={11} /> {eca.achievements.split('.')[0]}
              </span>
            )}
          </div>
          {/* View details hint */}
          <span className="flex items-center gap-0.5 text-[10px] opacity-0 group-hover:opacity-100" style={{ color, transition: 'opacity 0.15s', fontWeight: 600 }}>
            Details <ChevronRight size={10} />
          </span>
        </div>
      </div>
    </div>
  );
}

export function EcaLog({ ecas }: { ecas: EcaEntry[] }) {
  const visible = ecas.filter(e => e.isVisible);
  const [selected, setSelected] = useState<EcaEntry | null>(null);

  if (!visible.length) return null;

  const years = Array.from(new Set(visible.map(e => e.academicYear))).sort((a, b) => b.localeCompare(a));

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Extracurricular Activities</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        Activities &amp; Clubs
      </h2>

      <div className="space-y-10">
        {years.map(year => {
          const yearEcas = visible.filter(e => e.academicYear === year);
          return (
            <div key={year}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold" style={{ color: 'var(--color-primary)' }}>{year}</span>
                <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {yearEcas.map(eca => <EcaCard key={eca.id} eca={eca} onClick={() => setSelected(eca)} />)}
              </div>
            </div>
          );
        })}
      </div>

      {selected && <EcaModal eca={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
