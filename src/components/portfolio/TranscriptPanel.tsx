'use client';

import { useState } from 'react';
import { CheckCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import type { TranscriptYear, PortfolioCurriculumSystem } from '@/lib/types';

const CURRICULUM_LABELS: Record<PortfolioCurriculumSystem, string> = {
  AP:            'AP / GPA',
  IGCSE_ALEVELS: 'IGCSE / A-Level',
  IB:            'IB Programme',
  MIXED:         'Mixed Curriculum',
  OTHER:         'Other',
};

const GRADE_COLORS: Record<string, string> = {
  'A+': '#C8A96E', 'A*': '#C8A96E', A: '#C8A96E',
  'A-': '#A89060', B: '#8B9E6E', 'B+': '#8B9E6E', 'B-': '#8B9E6E',
  C: '#9E8B6E', 7: '#C8A96E', 6: '#A89060', 5: '#8B9E6E',
};

function gradeColor(grade: string) {
  return GRADE_COLORS[grade] ?? 'var(--color-muted)';
}

function GradePill({ grade, isPredicted, isVerified, apScore }: {
  grade: string; isPredicted: boolean; isVerified: boolean; apScore?: number;
}) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap justify-end">
      <span
        className="text-sm font-bold tabular-nums"
        style={{ color: gradeColor(grade), fontFamily: 'var(--font-display)' }}
      >
        {grade}
        {isPredicted && <span className="text-[10px] font-normal ml-0.5" style={{ color: 'var(--color-muted)' }}>pred.</span>}
      </span>
      {apScore && (
        <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{ background: 'var(--color-raised)', color: 'var(--color-primary)' }}>
          AP {apScore}
        </span>
      )}
      {isVerified && <CheckCircle size={11} style={{ color: '#34D399', flexShrink: 0 }} />}
    </div>
  );
}

function AssessmentRow({ name, score, maxScore, percentile, subscores, isVerified }: {
  name: string; score?: number | string; maxScore?: number;
  percentile?: number; subscores?: Record<string, number | string>; isVerified: boolean;
}) {
  return (
    <div className="py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="flex items-start justify-between gap-4 mb-1.5">
        <span className="text-xs font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>{name}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {score !== undefined && (
            <span className="text-sm font-bold" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
              {String(score)}{maxScore ? `/${maxScore}` : ''}
            </span>
          )}
          {percentile && (
            <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{ background: 'var(--color-raised)', color: 'var(--color-muted)' }}>
              {percentile}th %ile
            </span>
          )}
          {isVerified && <CheckCircle size={11} style={{ color: '#34D399' }} />}
        </div>
      </div>
      {subscores && Object.keys(subscores).length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {Object.entries(subscores).map(([k, v]) => (
            <span key={k} className="text-[10px]" style={{ color: 'var(--color-muted)' }}>
              {k}: <span style={{ color: 'var(--color-text-soft)' }}>{String(v)}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function YearPanel({ year }: { year: TranscriptYear }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="card overflow-hidden">
      {/* Year header */}
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ background: 'var(--color-surface)' }}
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg" style={{ color: 'var(--color-text)' }}>
            {year.academicYear}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide" style={{ background: 'var(--color-raised)', color: 'var(--color-muted)' }}>
            {CURRICULUM_LABELS[year.curriculum]}
          </span>
          {year.notes && (
            <span className="text-[10px] hidden md:inline" style={{ color: 'var(--color-muted)' }}>{year.notes}</span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {year.gpaWeighted && (
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-semibold tracking-wide" style={{ color: 'var(--color-muted)' }}>W. GPA</p>
              <p className="text-sm font-bold" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{year.gpaWeighted.toFixed(2)}</p>
            </div>
          )}
          {year.ibPointsPredicted && (
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-semibold tracking-wide" style={{ color: 'var(--color-muted)' }}>IB Points</p>
              <p className="text-sm font-bold" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{year.ibPointsPredicted}/45</p>
            </div>
          )}
          {open ? <ChevronUp size={16} style={{ color: 'var(--color-muted)' }} /> : <ChevronDown size={16} style={{ color: 'var(--color-muted)' }} />}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5">
          {/* Subjects table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th className="py-2 text-left font-semibold tracking-wide" style={{ color: 'var(--color-muted)' }}>Subject</th>
                  <th className="py-2 text-right font-semibold tracking-wide" style={{ color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {year.subjects.map((s, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td className="py-2.5 pr-4" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>{s.subjectName}</td>
                    <td className="py-2.5 text-right">
                      <GradePill grade={s.grade} isPredicted={s.isPredicted} isVerified={s.isVerified} apScore={s.apScore} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Assessments */}
          {year.assessments.length > 0 && (
            <div className="mt-4">
              <p className="text-[10px] font-semibold tracking-widest mb-2" style={{ color: 'var(--color-muted)' }}>STANDARDISED ASSESSMENTS</p>
              {year.assessments.map(a => (
                <AssessmentRow key={a.id} name={a.name} score={a.score} maxScore={a.maxScore} percentile={a.percentile} subscores={a.subscores} isVerified={a.isVerified} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function TranscriptPanel({ transcript }: { transcript: TranscriptYear[] }) {
  if (!transcript?.length) return null;

  const sorted = [...transcript].sort((a, b) => b.academicYear.localeCompare(a.academicYear));

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Academic Record</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        Transcript
      </h2>
      <div className="space-y-4">
        {sorted.map(y => <YearPanel key={y.academicYear} year={y} />)}
      </div>
    </section>
  );
}
