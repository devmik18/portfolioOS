import type { PublicPortfolio } from '@/lib/types';

interface Props { portfolio: PublicPortfolio }

function StatCard({ label, value, note }: { label: string; value: string | number; note?: string }) {
  const strVal   = String(value);
  // Scale font down for longer strings (grade strings like "99888877" or "A*AAA")
  const fontSize = strVal.length > 6 ? '1rem' : strVal.length > 4 ? '1.15rem' : undefined;

  return (
    <div className="stat-card min-w-[100px]">
      <p className="text-[10px] font-medium tracking-widest uppercase mb-1.5" style={{ color: 'var(--color-muted)' }}>
        {label}
      </p>
      <p
        className="font-bold leading-none font-display"
        style={{ color: 'var(--color-text)', fontSize: fontSize ?? '1.25rem', letterSpacing: strVal.length > 4 ? '0.04em' : undefined }}
      >
        {value}
      </p>
      {note && (
        <p className="text-[9px] mt-1 leading-tight" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
          {note}
        </p>
      )}
    </div>
  );
}

// ─── A-Level letter grade order (best → worst) ───────────────────────────────
const A_LEVEL_ORDER: Record<string, number> = {
  'A*': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'U': 6,
};

/**
 * Build a compact grade string from the most-recent British transcript year.
 *
 * - A-Level / AS subjects (letter grades):  sorted A*→E, joined → "A*AAB"
 * - GCSE subjects (numeric grades 1–9):     sorted 9→1, joined → "99888"
 *
 * Only uses predicted subjects so we're showing what teachers expect.
 */
function predictedGradeString(portfolio: PublicPortfolio): { value: string; note: string } | null {
  const latestYear = portfolio.transcript
    ?.slice()
    .sort((a, b) => b.academicYear.localeCompare(a.academicYear))[0];
  if (!latestYear) return null;

  // Prefer predicted subjects; fall back to all if none flagged
  const subjects = latestYear.subjects.filter(s => s.isPredicted);
  if (subjects.length === 0) return null;

  const grades = subjects.map(s => s.grade);

  // Detect A-Level style (contains A*, A, B, C, D, E)
  const isLetterGrade = grades.every(g => g in A_LEVEL_ORDER);

  if (isLetterGrade) {
    const sorted = [...grades].sort(
      (a, b) => (A_LEVEL_ORDER[a] ?? 9) - (A_LEVEL_ORDER[b] ?? 9),
    );
    return {
      value: sorted.join(''),          // e.g. "A*AAA" or "A*AAB"
      note: `${sorted.length} predicted A-Levels`,
    };
  }

  // GCSE numeric grades (1–9)
  const numeric = grades.map(Number).filter(n => !isNaN(n));
  if (numeric.length > 0) {
    const sorted = [...numeric].sort((a, b) => b - a);
    return {
      value: sorted.join(''),          // e.g. "99888877"
      note: `${sorted.length} predicted GCSEs`,
    };
  }

  return null;
}

export function HeroSection({ portfolio }: Props) {
  const {
    firstName, lastInitial, gradeLevel, graduationYear, schoolName,
    avatarUrl, coverImageUrl,
    gpaWeighted, satSuperscore, actBest,
    curriculumType,
    moduleVisibility,
    totalVerifiedHours, totalVerifiedSkills, projects, ecas,
  } = portfolio;

  const hasPhoto    = !!coverImageUrl;
  const showScores  = moduleVisibility.academicScores;
  const isBritish   = curriculumType === 'IGCSE_ALEVELS';

  // ── British GCSE / A-Level students ──────────────────────────────────────
  // Hero shows compact grade string (e.g. "A*AAA" or "99888"), Projects, ECAs, Service hrs.
  // No GPA, no SAT — those metrics don't exist in this curriculum.
  const gradeStr = isBritish && showScores ? predictedGradeString(portfolio) : null;

  const britishCards: { label: string; value: string | number; note?: string }[] = [
    ...(gradeStr ? [{ label: 'Predicted Grades', value: gradeStr.value, note: gradeStr.note }] : []),
    { label: 'Projects', value: projects.length },
    { label: 'ECAs', value: ecas.length },
    { label: 'Service hrs', value: `${totalVerifiedHours}h` },
    { label: 'Verified Skills', value: totalVerifiedSkills },
  ];

  // ── AP / IB / Other students ──────────────────────────────────────────────
  const standardCards: { label: string; value: string | number; note?: string }[] = [
    ...(showScores && gpaWeighted ? [{ label: 'Weighted GPA', value: gpaWeighted.toFixed(2) }] : []),
    ...(showScores && satSuperscore ? [{ label: 'SAT Score', value: satSuperscore.toLocaleString() }] : []),
    ...(showScores && actBest ? [{ label: 'ACT', value: actBest }] : []),
    { label: 'Projects', value: projects.length },
    { label: 'ECAs', value: ecas.length },
    { label: 'Service hrs', value: `${totalVerifiedHours}h` },
    { label: 'Verified Skills', value: totalVerifiedSkills },
  ];

  const statCards = (isBritish ? britishCards : standardCards).slice(0, 4);

  return (
    <section className="hero-wrap">
      {/* ── Background ── */}
      {hasPhoto ? (
        <>
          <img src={coverImageUrl!} alt="" className="hero-photo" />
          <div className="hero-overlay" />
        </>
      ) : (
        <div className="hero-no-photo" aria-hidden>
          <div className="hero-no-photo-initial">{firstName[0]}</div>
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-10 md:pb-14">
        <div className="flex items-end justify-between gap-8">

          {/* Left: identity */}
          <div className="flex-1 min-w-0">
            {/* Year badge */}
            <p className="label mb-4">Class of {graduationYear}</p>

            {/* Name */}
            <h1
              className="font-display font-extrabold leading-none mb-3 tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: 'var(--color-text)', letterSpacing: '-0.03em' }}
            >
              {firstName}{' '}
              <span style={{ color: 'var(--color-primary)' }}>{lastInitial}.</span>
            </h1>

            {/* Show location over school name — more personal and human */}
            {(portfolio.personality?.hometown || schoolName) && (
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-soft)' }}>
                {portfolio.personality?.hometown ?? schoolName} · Grade {gradeLevel}
              </p>
            )}
          </div>

          {/* Right: Stone Drift stat cards — 2×2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-2 flex-shrink-0">
            {statCards.map(s => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>

        {/* Mobile: horizontal stat strip */}
        <div className="flex md:hidden gap-2 mt-6 overflow-x-auto pb-1">
          {statCards.map(s => (
            <StatCard key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
