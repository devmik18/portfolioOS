'use client';

/**
 * SkillsSection — Two-track skills display
 *
 * Track A: 8-domain Soft Skills Radar (evidence coverage from ECAs + Projects)
 * Track B: Technical Proficiency Panel (student-declared, teacher-verified)
 */

import type { EcaEntry, TechSkillEntry, PortfolioProject } from '@/lib/types';
import { SkillsRadar } from './SkillsRadar';
import { TechSkillsPanel } from './TechSkillsPanel';

// ─── Section ──────────────────────────────────────────────────────────────────

interface SkillsSectionProps {
  ecas?: EcaEntry[];
  projects?: PortfolioProject[];
  techSkills?: TechSkillEntry[];
}

export function SkillsSection({
  ecas = [],
  projects = [],
  techSkills = [],
}: SkillsSectionProps) {
  const hasRadarData  = ecas.length > 0 || projects.length > 0;
  const hasTechSkills = techSkills.length > 0;

  if (!hasRadarData && !hasTechSkills) return null;

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Skills</p>
      <h2
        className="font-display font-bold text-3xl md:text-4xl mb-10"
        style={{ color: 'var(--color-text)' }}
      >
        Skills &amp; Development
      </h2>

      {/* ── Track A: Soft Skills Radar ── */}
      {hasRadarData && (
        <div className="mb-14">
          <div
            className="card p-6 md:p-8"
            style={{ maxWidth: 460 }}
          >
            <SkillsRadar ecas={ecas} projects={projects} size={360} showLabels />
          </div>
        </div>
      )}

      {/* ── Track B: Technical Proficiencies ── */}
      {hasTechSkills && (
        <div className={hasRadarData ? 'pt-8 border-t border-white/5' : ''}>
          <TechSkillsPanel techSkills={techSkills} />
        </div>
      )}

    </section>
  );
}
