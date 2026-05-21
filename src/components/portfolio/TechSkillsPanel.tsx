'use client';

/**
 * TechSkillsPanel — Track B: Technical Proficiency Cards
 *
 * Students self-declare proficiency (1–5) for named tools/skills.
 * Teachers verify and optionally add a comment + next-step suggestion.
 */

import { CheckCircle, Clock, AlertCircle, Code2, Database, Palette, Languages, Cog, MoreHorizontal } from 'lucide-react';
import type { TechSkillEntry, TechSkillCategory, TechProficiencyLevel } from '@/lib/types';

// ─── Level metadata ───────────────────────────────────────────────────────────

const LEVEL_META: Record<TechProficiencyLevel, { label: string; desc: string; color: string }> = {
  1: { label: 'Awareness',    desc: 'Basic familiarity; uses with guidance',           color: '#94a3b8' },
  2: { label: 'Practitioner', desc: 'Works independently with occasional reference',   color: '#60a5fa' },
  3: { label: 'Proficient',   desc: 'Reliable; handles edge cases independently',      color: '#34d399' },
  4: { label: 'Advanced',     desc: 'Solves complex problems; supports others',        color: '#a78bfa' },
  5: { label: 'Expert',       desc: 'Recognised authority; original contribution',     color: '#f59e0b' },
};

// ─── Category icons + accent colours ─────────────────────────────────────────

const CATEGORY_META: Record<TechSkillCategory, { icon: React.ElementType; color: string; label: string }> = {
  CODE:        { icon: Code2,         color: '#6366f1', label: 'Code' },
  DATA:        { icon: Database,      color: '#0ea5e9', label: 'Data' },
  DESIGN:      { icon: Palette,       color: '#ec4899', label: 'Design' },
  LANGUAGE:    { icon: Languages,     color: '#f59e0b', label: 'Language' },
  ENGINEERING: { icon: Cog,           color: '#10b981', label: 'Engineering' },
  OTHER:       { icon: MoreHorizontal,color: '#8b5cf6', label: 'Other' },
};

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: TechSkillEntry['verificationStatus'] }) {
  if (status === 'VALIDATED') {
    return (
      <div className="flex items-center gap-1" style={{ color: '#34d399' }}>
        <CheckCircle size={11} />
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Teacher Verified
        </span>
      </div>
    );
  }
  if (status === 'PENDING') {
    return (
      <div className="flex items-center gap-1" style={{ color: '#f59e0b' }}>
        <Clock size={11} />
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Pending Review
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1" style={{ color: 'var(--color-muted)' }}>
      <AlertCircle size={11} />
      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Self-Declared
      </span>
    </div>
  );
}

// ─── Level bar — 5 discrete nodes ─────────────────────────────────────────────

function LevelBar({ level, color }: { level: TechProficiencyLevel; color: string }) {
  return (
    <div className="flex items-center gap-1.5 my-3">
      {([1, 2, 3, 4, 5] as TechProficiencyLevel[]).map((n) => {
        const filled  = n <= level;
        const current = n === level;
        return (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div
              style={{
                width: current ? 18 : 14,
                height: current ? 18 : 14,
                borderRadius: '50%',
                background: filled ? color : 'transparent',
                border: `2px solid ${filled ? color : 'rgba(255,255,255,0.12)'}`,
                boxShadow: current ? `0 0 8px ${color}88` : 'none',
                transition: 'all 0.2s',
                position: 'relative',
              }}
            >
              {current && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 3,
                    borderRadius: '50%',
                    background: 'var(--color-bg)',
                    opacity: 0.4,
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
      <span
        style={{
          marginLeft: 8,
          fontSize: 10,
          fontWeight: 700,
          color,
          letterSpacing: '0.04em',
        }}
      >
        L{level} — {LEVEL_META[level].label}
      </span>
    </div>
  );
}

// ─── Individual card ──────────────────────────────────────────────────────────

function TechSkillCard({ skill }: { skill: TechSkillEntry }) {
  const catMeta   = CATEGORY_META[skill.category];
  const Icon      = catMeta.icon;

  return (
    <div
      className="card p-5 flex flex-col gap-0"
      style={{
        borderTop: `2px solid ${catMeta.color}33`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent strip */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${catMeta.color}, ${catMeta.color}44)`,
        }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 28, height: 28,
              borderRadius: 6,
              background: `${catMeta.color}18`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icon size={13} style={{ color: catMeta.color }} />
          </div>
          <div>
            <h3
              className="font-semibold text-sm"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)', lineHeight: 1.2 }}
            >
              {skill.skillName}
            </h3>
            <p style={{ fontSize: 9, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 1 }}>
              {catMeta.label}
            </p>
          </div>
        </div>
        <StatusBadge status={skill.verificationStatus} />
      </div>

      {/* Level bar */}
      <LevelBar level={skill.level} color={catMeta.color} />
    </div>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

interface TechSkillsPanelProps {
  techSkills: TechSkillEntry[];
}

export function TechSkillsPanel({ techSkills }: TechSkillsPanelProps) {
  if (!techSkills.length) return null;

  const verified   = techSkills.filter(s => s.verificationStatus === 'VALIDATED').length;
  const pending    = techSkills.filter(s => s.verificationStatus === 'PENDING').length;

  return (
    <div>
      {/* Sub-section header */}
      <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: 'var(--color-muted)' }}
          >
            Technical Proficiencies
          </p>
          <p style={{ fontSize: 11, color: 'var(--color-muted)', opacity: 0.7, lineHeight: 1.5, maxWidth: 480 }}>
            Student-declared skills submitted for teacher review. Each level verified independently.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {verified > 0 && (
            <div className="flex items-center gap-1.5">
              <CheckCircle size={12} style={{ color: '#34d399' }} />
              <span style={{ fontSize: 10, color: 'var(--color-muted)' }}>{verified} verified</span>
            </div>
          )}
          {pending > 0 && (
            <div className="flex items-center gap-1.5">
              <Clock size={12} style={{ color: '#f59e0b' }} />
              <span style={{ fontSize: 10, color: 'var(--color-muted)' }}>{pending} pending</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {techSkills.map(s => <TechSkillCard key={s.id} skill={s} />)}
      </div>
    </div>
  );
}
