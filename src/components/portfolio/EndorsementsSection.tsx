import type { TeacherEndorsement } from '@/lib/types';

function EndorsementCard({ e }: { e: TeacherEndorsement }) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      {/* Large open-quote mark */}
      <div
        className="text-5xl leading-none select-none font-display"
        style={{ color: 'var(--color-primary)', opacity: 0.6, lineHeight: 1 }}
      >
        &ldquo;
      </div>

      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-sans)', lineHeight: 1.75 }}
      >
        {e.endorsementText}
      </p>

      <div className="flex items-center justify-between gap-3 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div>
          <p className="text-xs font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
            {e.teacherName}
          </p>
          <p className="text-[11px]" style={{ color: 'var(--color-muted)' }}>{e.teacherSubject}</p>
        </div>
        <span
          className="text-[10px] px-2 py-1 rounded-full font-semibold flex-shrink-0"
          style={{ background: 'rgba(200,169,110,0.12)', color: 'var(--color-primary)' }}
        >
          {e.attribute}
        </span>
      </div>
    </div>
  );
}

export function EndorsementsSection({ endorsements }: { endorsements: TeacherEndorsement[] }) {
  const visible = endorsements?.filter(e => e.isVisible) ?? [];
  if (!visible.length) return null;

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Teacher Endorsements</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8" style={{ color: 'var(--color-text)' }}>
        What Teachers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visible.map(e => <EndorsementCard key={e.id} e={e} />)}
      </div>
    </section>
  );
}
