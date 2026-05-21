'use client';

/**
 * SkillsRadar — SVG spider/radar chart for the two-track skills system.
 *
 * Track A: 8-domain merged framework (Skills Builder × NACE)
 * Scoring:  Asymptotic evidence coverage — count / (count + K)
 *           Each ECA or Project the student tags contributes evidence units.
 *           No domain ever reaches 100%. Development is continuous.
 */

import { useEffect, useRef, useState } from 'react';
import type { EcaEntry, SoftSkillDomain, PortfolioProject } from '@/lib/types';

// ─── Domain taxonomy ──────────────────────────────────────────────────────────

export const SOFT_SKILL_DOMAINS: SoftSkillDomain[] = [
  'Communication',
  'Critical Thinking',
  'Creativity & Innovation',
  'Leadership',
  'Teamwork & Collaboration',
  'Resilience & Growth Mindset',
  'Professionalism & Character',
  'Digital & Technical Literacy',
];

/** Short single-line label for the SVG axis */
const DOMAIN_SHORT: Record<SoftSkillDomain, string> = {
  'Communication':              'COMMS',
  'Critical Thinking':          'CRITICAL\nTHINKING',
  'Creativity & Innovation':    'CREATIVITY',
  'Leadership':                 'LEADERSHIP',
  'Teamwork & Collaboration':   'TEAMWORK',
  'Resilience & Growth Mindset':'RESILIENCE',
  'Professionalism & Character':'PROF.',
  'Digital & Technical Literacy':'DIGITAL\n& TECH',
};

/** Framework attribution per domain */
export const DOMAIN_META: Record<SoftSkillDomain, { sb?: string; nace?: string; desc: string }> = {
  'Communication':               { sb: 'Listening · Speaking', nace: 'Communication',               desc: 'Verbal, written, listening, audience adaptation' },
  'Critical Thinking':           { sb: 'Problem Solving',       nace: 'Critical Thinking',           desc: 'Analysis, reasoning, evidence-based decisions' },
  'Creativity & Innovation':     { sb: 'Creativity',            nace: undefined,                     desc: 'Original ideas, design thinking, novel approaches' },
  'Leadership':                  { sb: 'Leadership',            nace: 'Leadership',                  desc: 'Vision, influence without authority, accountability' },
  'Teamwork & Collaboration':    { sb: 'Teamwork',              nace: 'Teamwork · Belonging/Inclusion', desc: 'Group dynamics, inclusion, shared ownership' },
  'Resilience & Growth Mindset': { sb: 'Staying Positive · Aiming High', nace: undefined,             desc: 'Persistence, self-regulation, bouncing back' },
  'Professionalism & Character': { sb: undefined,               nace: 'Professionalism · Career & Self-Development', desc: 'Work ethic, integrity, initiative' },
  'Digital & Technical Literacy':{ sb: undefined,               nace: 'Technology',                  desc: 'Digital citizenship, coding, data, tools' },
};

// ─── Score engine — asymptotic coverage ──────────────────────────────────────

const K = 5; // Asymptote constant — tune to taste

export type DomainCoverage = Record<SoftSkillDomain, number>;
export type DomainCounts   = Record<SoftSkillDomain, number>;

/**
 * Derives 0.0–1.0 coverage per domain using max-normalisation:
 *   fill = count / max(all counts)
 *
 * The domain with the most evidence always reaches the outermost ring.
 * All other domains scale proportionally, creating an honest shape.
 * If all counts are zero, all spokes render empty.
 */
export function computeDomainCoverage(
  ecas: EcaEntry[],
  projects: PortfolioProject[],
): { coverage: DomainCoverage; counts: DomainCounts } {
  const counts = Object.fromEntries(
    SOFT_SKILL_DOMAINS.map(d => [d, 0]),
  ) as DomainCounts;

  for (const eca of ecas) {
    for (const domain of (eca.softSkillDomains ?? [])) {
      counts[domain]++;
    }
  }

  for (const project of projects) {
    for (const domain of (project.softSkillDomains ?? [])) {
      counts[domain]++;
    }
  }

  const maxCount = Math.max(...SOFT_SKILL_DOMAINS.map(d => counts[d]), 1);

  const coverage = Object.fromEntries(
    SOFT_SKILL_DOMAINS.map(d => [d, counts[d] / maxCount]),
  ) as DomainCoverage;

  return { coverage, counts };
}

// ─── SVG helpers ──────────────────────────────────────────────────────────────

function polar(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function polyPoints(cx: number, cy: number, r: number, n: number): string {
  return Array.from({ length: n }, (_, i) => {
    const [x, y] = polar(cx, cy, r, (360 / n) * i);
    return `${x},${y}`;
  }).join(' ');
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  ecas: EcaEntry[];
  projects: PortfolioProject[];
  size?: number;
  showLabels?: boolean;
}

export function SkillsRadar({ ecas, projects, size = 380, showLabels = true }: Props) {
  const { coverage, counts } = computeDomainCoverage(ecas, projects);
  const n   = SOFT_SKILL_DOMAINS.length;
  const cx  = size / 2;
  const cy  = size / 2;
  const maxR = (size / 2) - (showLabels ? 56 : 16);

  // Animate from 0 → actual on mount
  const [animScale, setAnimScale] = useState(0);
  const hasData = SOFT_SKILL_DOMAINS.some(d => counts[d] > 0);
  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setTimeout(() => setAnimScale(1), 60);
    });
    return () => cancelAnimationFrame(t);
  }, []);

  const rings = [0.25, 0.5, 0.75, 1.0];

  // Data polygon
  const dataPoints = SOFT_SKILL_DOMAINS.map((d, i) => {
    const r = coverage[d] * animScale * maxR;
    return polar(cx, cy, r, (360 / n) * i);
  });
  const dataPath = dataPoints
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`)
    .join(' ') + 'Z';

  return (
    <div style={{ width: '100%', maxWidth: size, margin: '0 auto' }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
        aria-label="Soft skills development radar"
      >
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--color-primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.08" />
          </radialGradient>
          <filter id="radarGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── Grid rings ── */}
        {rings.map((pct) => (
          <polygon
            key={pct}
            points={polyPoints(cx, cy, maxR * pct, n)}
            fill="none"
            stroke={pct === 1.0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}
            strokeWidth={pct === 1.0 ? 1.5 : 1}
            strokeDasharray={pct === 1.0 ? '4 4' : undefined}
          />
        ))}

        {/* ── Spokes — dashed for empty domains ── */}
        {SOFT_SKILL_DOMAINS.map((domain, i) => {
          const [x, y] = polar(cx, cy, maxR, (360 / n) * i);
          const isEmpty = counts[domain] === 0;
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={x} y2={y}
              stroke={isEmpty ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.1)'}
              strokeWidth={isEmpty ? 1 : 1}
              strokeDasharray={isEmpty ? '3 4' : undefined}
            />
          );
        })}

        {/* ── Data fill — only when there's data ── */}
        {hasData && (
          <path
            d={dataPath}
            fill="url(#radarFill)"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            filter="url(#radarGlow)"
          />
        )}

        {/* ── Data dots ── */}
        {hasData && dataPoints.map(([x, y], i) => {
          const domain = SOFT_SKILL_DOMAINS[i];
          const isEmpty = counts[domain] === 0;
          if (isEmpty) return null;
          return (
            <circle
              key={i}
              cx={x} cy={y} r="3.5"
              fill="var(--color-primary)"
              stroke="var(--color-bg)"
              strokeWidth="1.5"
              style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            />
          );
        })}

        {/* ── Labels ── */}
        {showLabels && SOFT_SKILL_DOMAINS.map((domain, i) => {
          const angleDeg = (360 / n) * i;
          const [x, y] = polar(cx, cy, maxR + 34, angleDeg);
          const isEmpty = counts[domain] === 0;

          const textAnchor =
            Math.abs(angleDeg - 0)   < 10 || Math.abs(angleDeg - 360) < 10 ? 'middle'
            : Math.abs(angleDeg - 180) < 10 ? 'middle'
            : angleDeg > 10 && angleDeg < 170 ? 'start'
            : 'end';

          const raw = DOMAIN_SHORT[domain];
          const lines = raw.split('\n');

          return (
            <g key={domain} opacity={isEmpty ? 0.3 : 1}>
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={x}
                  y={y - (lines.length > 1 ? 5 : 0) + li * 11}
                  textAnchor={textAnchor}
                  fontSize="8"
                  fontWeight="700"
                  letterSpacing="0.08em"
                  fill={isEmpty ? 'rgba(255,255,255,0.2)' : 'var(--color-muted)'}
                  style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
