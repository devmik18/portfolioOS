'use client';

import { useEffect, useCallback } from 'react';
import { X, ExternalLink, Star, Clock, Calendar, ChevronRight } from 'lucide-react';
import { VerifiedChip } from '@/components/ui/VerifiedChip';
import type { PortfolioProject, EcaEntry } from '@/lib/types';

// ─── Shared overlay backdrop ──────────────────────────────────────────────────
function Backdrop({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(5,5,10,0.85)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.18s ease',
      }}
    />
  );
}

// ─── Skill domain pill ────────────────────────────────────────────────────────
const DOMAIN_COLORS: Record<string, string> = {
  'Communication': '#60A5FA',
  'Critical Thinking': '#C084FC',
  'Creativity & Innovation': '#F472B6',
  'Leadership': '#FBBF24',
  'Teamwork & Collaboration': '#34D399',
  'Resilience & Growth Mindset': '#FB923C',
  'Professionalism & Character': '#2DD4BF',
  'Digital & Technical Literacy': '#818CF8',
};

function DomainPill({ domain }: { domain: string }) {
  const color = DOMAIN_COLORS[domain] ?? '#94A3B8';
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: '100px',
      fontSize: '0.7rem', fontWeight: 600,
      background: `${color}18`, color, border: `1px solid ${color}30`,
    }}>
      {domain}
    </span>
  );
}

// ─── Category colours (mirrored from ProjectTimeline) ─────────────────────────
const CAT: Record<string, { label: string; color: string }> = {
  ACADEMIC: { label: 'Academic', color: '#60A5FA' },
  CREATIVE: { label: 'Creative', color: '#C084FC' },
  COMMUNITY: { label: 'Community', color: '#34D399' },
  SPORT: { label: 'Sport', color: '#FB923C' },
  RESEARCH: { label: 'Research', color: '#2DD4BF' },
  EMPLOYMENT: { label: 'Work', color: '#FBBF24' },
  LEADERSHIP: { label: 'Leadership', color: '#F472B6' },
  OTHER: { label: 'Other', color: '#94A3B8' },
};

// ─── PROJECT MODAL ────────────────────────────────────────────────────────────
export function ProjectModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const handleKey = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }, [onClose]);
  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [handleKey]);

  const cat = CAT[project.category] ?? CAT.OTHER;
  const images = project.mediaItems.filter(m => m.type === 'IMAGE');
  const verified = project.skills.filter(s => s.validationStatus === 'VALIDATED');

  return (
    <>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes slideUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <Backdrop onClose={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed', top: '50%', left: '50%', zIndex: 101,
          transform: 'translate(-50%, -50%)',
          width: 'min(92vw, 780px)', maxHeight: '90vh',
          background: 'var(--color-surface)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          animation: 'slideUp 0.22s ease',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
        }}
      >
        {/* Hero image */}
        {images[0] && (
          <div style={{ position: 'relative', height: '220px', flexShrink: 0, overflow: 'hidden' }}>
            <img src={images[0].url} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,15,0.85) 0%, transparent 50%)' }} />
            <span style={{
              position: 'absolute', bottom: '1rem', left: '1.25rem',
              padding: '3px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: `${cat.color}22`, color: cat.color, border: `1px solid ${cat.color}40`,
            }}>{cat.label}</span>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'rgba(10,11,15,0.75)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--color-text)',
          }}
        >
          <X size={16} />
        </button>

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', padding: '1.5rem', flex: 1 }}>
          {/* Title + meta */}
          <div style={{ marginBottom: '1.25rem' }}>
            {!images[0] && (
              <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', background: `${cat.color}22`, color: cat.color, border: `1px solid ${cat.color}40` }}>{cat.label}</span>
            )}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '0.5rem' }}>
              {project.title}
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                <Calendar size={12} /> {project.startDate.slice(0, 7)}{project.endDate ? ` → ${project.endDate.slice(0, 7)}` : ' · Ongoing'}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>Grade {project.gradeLevel}</span>
            </div>
          </div>

          {/* Summary */}
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--color-text-soft)', marginBottom: '1.5rem' }}>{project.summary}</p>

          {/* Reflection */}
          {project.reflection && (
            <div style={{ marginBottom: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid var(--color-primary)', borderRadius: '0 12px 12px 0' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.6rem', opacity: 0.8 }}>Student Reflection</p>
              <div style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-text-soft)' }} dangerouslySetInnerHTML={{ __html: project.reflection }} />
            </div>
          )}

          {/* Image gallery */}
          {images.length > 1 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>Gallery</p>
              <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '4px' }}>
                {images.slice(1).map(img => (
                  <img key={img.id} src={img.url} alt={img.caption ?? ''} style={{ height: '100px', width: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                ))}
              </div>
            </div>
          )}

          {/* Soft skill domains */}
          {project.softSkillDomains && project.softSkillDomains.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>Skill Domains</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {project.softSkillDomains.map(d => <DomainPill key={d} domain={d} />)}
              </div>
            </div>
          )}

          {/* Verified skills */}
          {verified.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>
                <Star size={10} style={{ display: 'inline', marginRight: '4px', color: 'var(--color-primary)' }} />
                Verified Skills
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {verified.map(s => (
                  <div key={s.skillId} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <VerifiedChip skillStatus={s.validationStatus} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-soft)' }}>{s.skillName}</span>
                    {s.stepDescriptor && <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)', marginLeft: 'auto' }}>{s.stepDescriptor}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links.length > 0 && (
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>Links &amp; Resources</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {project.links.map(link => (
                  <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.625rem 0.875rem', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '10px', textDecoration: 'none', color: '#9B96FF', fontSize: '0.82rem', fontWeight: 500 }}>
                    <ExternalLink size={13} />
                    {link.title ?? link.url}
                    {link.description && <span style={{ color: 'var(--color-muted)', fontWeight: 400 }}>— {link.description}</span>}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ─── ECA MODAL ────────────────────────────────────────────────────────────────
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

export function EcaModal({ eca, onClose }: { eca: EcaEntry; onClose: () => void }) {
  const handleKey = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }, [onClose]);
  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [handleKey]);

  const icon = ECA_ICONS[eca.category] ?? '✦';
  const color = ECA_COLORS[eca.category] ?? '#94A3B8';
  const totalHours = eca.totalHours ?? (eca.hoursPerWeek && eca.weeksActive ? eca.hoursPerWeek * eca.weeksActive : undefined);

  return (
    <>
      <Backdrop onClose={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed', top: '50%', left: '50%', zIndex: 101,
          transform: 'translate(-50%, -50%)',
          width: 'min(92vw, 620px)', maxHeight: '85vh',
          background: 'var(--color-surface)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          animation: 'slideUp 0.22s ease',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
        }}
      >
        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(10,11,15,0.75)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-text)' }}>
          <X size={16} />
        </button>

        {/* Coloured header strip */}
        <div style={{ padding: '2rem 1.5rem 1.5rem', background: `linear-gradient(135deg, ${color}18, transparent)`, borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{icon}</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>{eca.name}</h2>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, color }}>{eca.role}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>📅 {eca.academicYear}</span>
            {totalHours && <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--color-muted)' }}><Clock size={12} /> {totalHours} hours</span>}
            {eca.hoursPerWeek && <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>{eca.hoursPerWeek}h/week</span>}
          </div>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', padding: '1.5rem', flex: 1 }}>
          {eca.description && (
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>About this activity</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--color-text-soft)' }}>{eca.description}</p>
            </div>
          )}

          {eca.achievements && (
            <div style={{ marginBottom: '1.25rem', padding: '1rem 1.25rem', background: `${color}0d`, border: `1px solid ${color}25`, borderRadius: '12px' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color, marginBottom: '0.6rem', opacity: 0.9 }}>Achievements &amp; Highlights</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-text-soft)' }}>{eca.achievements}</p>
            </div>
          )}

          {eca.softSkillDomains && eca.softSkillDomains.length > 0 && (
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>Skill Domains Developed</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {eca.softSkillDomains.map(d => <DomainPill key={d} domain={d} />)}
              </div>
            </div>
          )}

          {/* Trailblazer connection hint */}
          <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.1rem' }}>🎯</span>
            <div>
              <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9B96FF', marginBottom: '0.15rem' }}>Trailblazer Connection</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                Skills from this activity contribute toward Trailblazer programme eligibility — verified by a teacher or coach.
              </p>
            </div>
            <ChevronRight size={14} style={{ color: '#9B96FF', flexShrink: 0 }} />
          </div>
        </div>
      </div>
    </>
  );
}
