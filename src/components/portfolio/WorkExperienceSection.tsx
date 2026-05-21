import { Briefcase, CheckCircle, Clock } from 'lucide-react';
import type { WorkExperienceEntry, EmployerType } from '@/lib/types';

const EMPLOYER_TYPE_LABELS: Record<EmployerType, string> = {
  COMPANY:         'Company',
  STARTUP:         'Startup',
  NGO:             'NGO',
  RESEARCH_LAB:    'Research Lab',
  SCHOOL:          'School',
  FAMILY_BUSINESS: 'Family Business',
  OTHER:           'Other',
};

function formatDateRange(start: string, end?: string, isCurrent?: boolean): string {
  const fmt = (d: string) => {
    const [y, m] = d.split('-');
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return m ? `${months[parseInt(m)]} ${y}` : y;
  };
  return `${fmt(start)} — ${isCurrent ? 'Present' : end ? fmt(end) : 'Present'}`;
}

function WorkCard({ entry }: { entry: WorkExperienceEntry }) {
  const initials = entry.employerName.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return (
    <div className="card p-5 flex gap-4">
      {/* Employer logo / initials */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{ background: 'var(--color-raised)', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}
      >
        {initials}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <h3 className="font-semibold text-sm" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
            {entry.role}
          </h3>
          {entry.verificationStatus === 'VERIFIED' && (
            <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#34D399' }} />
          )}
        </div>

        <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{entry.employerName}</p>

        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'var(--color-raised)', color: 'var(--color-muted)' }}>
            {EMPLOYER_TYPE_LABELS[entry.employerType]}
          </span>
          <span className="flex items-center gap-1 text-[10px]" style={{ color: 'var(--color-muted)' }}>
            <Clock size={10} /> {formatDateRange(entry.startDate, entry.endDate, entry.isCurrent)}
          </span>
          {entry.hoursPerWeek && (
            <span className="text-[10px]" style={{ color: 'var(--color-muted)' }}>
              ~{entry.hoursPerWeek}h/wk
            </span>
          )}
        </div>

        <p className="text-xs mb-3" style={{ color: 'var(--color-muted)', lineHeight: 1.65 }}>
          {entry.description}
        </p>

        {entry.keyLearning && (
          <blockquote className="pl-3 italic text-xs" style={{ borderLeft: '2px solid var(--color-primary)', color: 'var(--color-text-soft)', lineHeight: 1.65 }}>
            "{entry.keyLearning}"
          </blockquote>
        )}

        {entry.supervisorName && (
          <p className="text-[10px] mt-2 font-medium" style={{ color: 'var(--color-muted)' }}>
            Supervisor: {entry.supervisorName}
          </p>
        )}
      </div>
    </div>
  );
}

export function WorkExperienceSection({ workExperience }: { workExperience: WorkExperienceEntry[] }) {
  const visible = workExperience?.filter(w => w.isVisible) ?? [];
  if (!visible.length) return null;

  const sorted = [...visible].sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Experience</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        Work Experience
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {sorted.map(w => <WorkCard key={w.id} entry={w} />)}
      </div>
    </section>
  );
}
