'use client';

import { useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink, FileText, Play } from 'lucide-react';
import { getAcademicYearsFromProjects } from '@/lib/utils';
import { VerifiedChip } from '@/components/ui/VerifiedChip';
import { ProjectModal } from '@/components/portfolio/DetailModals';
import type { PortfolioProject } from '@/lib/types';

// ─── Category config ──────────────────────────────────────────────────────────
const CAT: Record<string, { label: string; color: string }> = {
  ACADEMIC:   { label: 'Academic',   color: '#60A5FA' },
  CREATIVE:   { label: 'Creative',   color: '#C084FC' },
  COMMUNITY:  { label: 'Community',  color: '#34D399' },
  SPORT:      { label: 'Sport',      color: '#FB923C' },
  RESEARCH:   { label: 'Research',   color: '#2DD4BF' },
  EMPLOYMENT: { label: 'Work',       color: '#FBBF24' },
  LEADERSHIP: { label: 'Leadership', color: '#F472B6' },
  OTHER:      { label: 'Other',      color: '#94A3B8' },
};

// ─── Flat item types ──────────────────────────────────────────────────────────
type SliderItem =
  | { kind: 'divider'; year: string; gradeLabel: string; count: number }
  | { kind: 'project'; project: PortfolioProject };

// ─── Year divider card ────────────────────────────────────────────────────────
function YearDividerCard({
  year, gradeLabel, count,
}: {
  year: string; gradeLabel: string; count: number;
}) {
  const [y1full, y2] = year.split('-');
  const y1 = y1full.slice(-2); // "23" from "2023"

  return (
    <div
      className="slider-item slider-item-divider flex-shrink-0 flex flex-col justify-between rounded-xl overflow-hidden"
      style={{
        background: 'var(--color-raised)',
        border: '1px solid var(--color-border)',
        borderLeft: '2px solid var(--color-primary)',
        padding: '28px 24px',
        minHeight: '340px',
      }}
    >
      {/* Year as large display */}
      <div>
        <p className="text-[10px] font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
          Academic Year
        </p>
        <div
          className="font-display font-extrabold leading-none"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--color-text)', letterSpacing: '-0.04em' }}
        >
          <span style={{ display: 'block' }}>{y1}</span>
          <span style={{ display: 'block', color: 'var(--color-primary)' }}>{y2}</span>
        </div>
      </div>

      {/* Grade + count */}
      <div>
        <p className="text-base font-semibold mb-1" style={{ color: 'var(--color-text-soft)' }}>
          {gradeLabel}
        </p>
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          {count} {count === 1 ? 'project' : 'projects'}
        </p>
        <div className="flex items-center gap-1.5 mt-4" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
          <ChevronRight size={14} />
          <span className="text-[10px] font-medium tracking-wide uppercase">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }: { project: PortfolioProject; onClick: () => void }) {
  const cat = CAT[project.category] ?? CAT.OTHER;
  const thumb = project.mediaItems.find(m => m.type === 'IMAGE');
  const verified = project.skills.filter(s => s.validationStatus === 'VALIDATED').length;
  const hasVideo = project.mediaItems.some(m => m.type === 'VIDEO' || m.type === 'EMBED');

  return (
    <div
      className="slider-item slider-item-project flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer"
      onClick={onClick}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,99,255,0.4)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ height: '180px', background: 'var(--color-raised)', flexShrink: 0 }}>
        {thumb ? (
          <img
            src={thumb.url}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ transition: 'transform 0.6s ease' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl" style={{ color: 'var(--color-muted)' }}>
            {project.category === 'SPORT' ? '🏅' : project.category === 'RESEARCH' ? '🔬' : project.category === 'LEADERSHIP' ? '⭐' : '📁'}
          </div>
        )}

        {/* Category pill */}
        <span
          className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={{
            background: cat.color + '20',
            color: cat.color,
            border: `1px solid ${cat.color}40`,
            backdropFilter: 'blur(8px)',
          }}
        >
          {cat.label}
        </span>

        {/* Click to expand hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.2s', background: 'rgba(108,99,255,0.12)' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#fff', background: 'rgba(108,99,255,0.7)', padding: '5px 12px', borderRadius: '100px', backdropFilter: 'blur(6px)' }}>View details →</span>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-10" style={{ background: 'linear-gradient(to top, var(--color-surface), transparent)' }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-semibold text-sm leading-snug mb-2"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}
        >
          {project.title}
        </h3>

        <p className="text-xs line-clamp-2 mb-auto" style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>
          {project.summary}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between mt-4 pt-3"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <div className="flex items-center gap-1.5">
            {project.skills[0] && (
              <VerifiedChip skillStatus={project.skills[0].validationStatus} />
            )}
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
            {hasVideo && <Play size={11} />}
            {project.links.length > 0 && <ExternalLink size={11} />}
            {project.reflection && <FileText size={11} />}
            {verified > 0 && (
              <span className="flex items-center gap-0.5 text-[10px]" style={{ color: 'var(--color-primary)' }}>
                <Star size={10} fill="currentColor" /> {verified}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
interface Props {
  projects: PortfolioProject[];
}

export function ProjectTimeline({ projects }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  const visible = projects.filter(p => p.isVisible).sort((a, b) => {
    // Sort by year desc, then sortOrder asc
    if (b.academicYear !== a.academicYear) return b.academicYear.localeCompare(a.academicYear);
    return a.sortOrder - b.sortOrder;
  });

  const years = getAcademicYearsFromProjects(visible);

  if (!visible.length) return null;

  // Build flat array: [divider, proj, proj, divider, proj, ...]
  const items: SliderItem[] = [];
  for (const { year, gradeLabel } of years) {
    const yearProjects = visible.filter(p => p.academicYear === year);
    items.push({ kind: 'divider', year, gradeLabel, count: yearProjects.length });
    yearProjects.forEach(p => items.push({ kind: 'project', project: p }));
  }

  // Scroll handlers
  const CARD_W = 316; // 300px card + 16px gap

  const handleScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    sliderRef.current?.scrollBy({ left: dir === 'left' ? -CARD_W : CARD_W, behavior: 'smooth' });
  };

  return (
    <section className="py-10 overflow-hidden">
      {/* Header */}
      <div className="w-full px-6 md:px-12 mb-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="label mb-1.5">The Story of Me</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: 'var(--color-text)' }}>
              Projects & Work
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
              style={{
                background: canScrollLeft ? 'var(--color-surface)' : 'transparent',
                border: `1px solid ${canScrollLeft ? 'var(--color-border)' : 'rgba(255,255,255,0.04)'}`,
                color: canScrollLeft ? 'var(--color-text)' : 'var(--color-muted)',
                opacity: canScrollLeft ? 1 : 0.35,
                cursor: canScrollLeft ? 'pointer' : 'default',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
              style={{
                background: canScrollRight ? 'var(--color-surface)' : 'transparent',
                border: `1px solid ${canScrollRight ? 'var(--color-border)' : 'rgba(255,255,255,0.04)'}`,
                color: canScrollRight ? 'var(--color-text)' : 'var(--color-muted)',
                opacity: canScrollRight ? 1 : 0.35,
                cursor: canScrollRight ? 'pointer' : 'default',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Year index pills — so user knows what years are in the slider */}
        <div className="flex flex-wrap gap-2 mt-4">
          {years.map(({ year, gradeLabel }) => (
            <span
              key={year}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: 'var(--color-raised)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-soft)',
              }}
            >
              {year} · {gradeLabel}
            </span>
          ))}
        </div>
      </div>

      {/* Single horizontal track */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="slider-track"
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'clamp(24px, 3vw, 48px)',
          paddingRight: 'clamp(24px, 3vw, 48px)',
          paddingBottom: '8px',
          // Snap on mobile, free-scroll on desktop handled via CSS
          scrollSnapType: 'x mandatory',
        }}
      >
        {items.map((item, i) => (
          item.kind === 'divider' ? (
            <div
              key={`div-${item.year}`}
              style={{ scrollSnapAlign: 'start', flexShrink: 0 }}
              className="slider-item-wrap"
            >
              <YearDividerCard year={item.year} gradeLabel={item.gradeLabel} count={item.count} />
            </div>
          ) : (
            <div
              key={item.project.id}
              style={{ scrollSnapAlign: 'start', flexShrink: 0 }}
              className="slider-item-wrap"
            >
              <ProjectCard project={item.project} onClick={() => setSelected(item.project)} />
            </div>
          )
        ))}
      </div>

      {/* Scroll track indicator */}
      <div className="w-full px-6 md:px-12 mt-4">
        <p className="text-[10px] text-center" style={{ color: 'var(--color-muted)', opacity: 0.45 }}>
          Click any card for full details · Scroll or use arrows to browse all {visible.length} projects
        </p>
      </div>

      {/* Detail modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
