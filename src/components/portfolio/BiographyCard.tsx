import type { PersonalityProfile, PortfolioCurriculumSystem } from '@/lib/types';
import { Globe, MapPin, Target } from 'lucide-react';

const PROF: Record<string, string> = {
  NATIVE: 'Native', FLUENT: 'Fluent', CONVERSATIONAL: 'Conv.', BASIC: 'Basic',
};

interface Props {
  firstName: string;
  lastInitial: string;
  gradeLevel: number;
  graduationYear: number;
  schoolName?: string;
  avatarUrl?: string;
  personality?: PersonalityProfile;
  curriculumType?: PortfolioCurriculumSystem;
}

export function BiographyCard({
  firstName, lastInitial, gradeLevel, graduationYear,
  schoolName, avatarUrl, personality, curriculumType,
}: Props) {
  if (!personality?.shortBio && !personality?.ambitionStatement && !personality?.funFact) return null;


  // Build the friendly opener based on curriculum
  const isBritish   = curriculumType === 'IGCSE_ALEVELS' || curriculumType === 'IB';
  const gradeLabel  = isBritish ? 'Year' : 'Grade';
  const location    = personality?.hometown;
  const schoolPart  = schoolName ? ` at ${schoolName}` : '';
  const locationPart = location && !schoolName?.toLowerCase().includes(location.split(',')[0].toLowerCase())
    ? ` in ${location}`
    : '';

  const introSentence = `Hi, I'm ${firstName} — a ${gradeLabel} ${gradeLevel} student${schoolPart}${locationPart}.`;

  return (
    <div className="w-full px-6 md:px-12 py-10">
      <div className="card p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              {avatarUrl ? (
                <img src={avatarUrl} alt={firstName} className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-2xl font-display font-bold"
                  style={{ background: 'var(--color-raised)', color: 'var(--color-primary)' }}
                >
                  {firstName[0]}{lastInitial}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="label mb-3">About</p>

            {/* Friendly intro — replaces the stiff name/school heading */}
            <p
              className="font-display font-bold text-lg md:text-xl mb-3 leading-snug"
              style={{ color: 'var(--color-text)' }}
            >
              {introSentence}
            </p>

            {(personality?.hometown || schoolName) && (
              <p className="text-xs mb-4" style={{ color: 'var(--color-muted)' }}>
                {personality?.hometown ?? schoolName} &middot; Class of {graduationYear}
              </p>
            )}

            {/* Bio — multi-sentence intro if available, ambition as fallback */}
            {personality?.shortBio ? (
              <>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-soft)' }}>
                  {personality.shortBio}
                </p>
                {personality.ambitionStatement && (
                  <div
                    className="mb-5 px-4 py-3 rounded-lg"
                    style={{ background: 'var(--color-raised)', borderLeft: '2px solid var(--color-primary)' }}
                  >
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--color-primary)', opacity: 0.75 }}>
                      Ambition
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                      {personality.ambitionStatement}
                    </p>
                  </div>
                )}
              </>
            ) : personality?.ambitionStatement ? (
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: 'var(--color-text-soft)' }}>
                {personality.ambitionStatement}
              </p>
            ) : null}


            {personality?.favouriteQuote && (
              <blockquote
                className="border-l-2 pl-4 italic text-sm mb-5"
                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-muted)' }}
              >
                "{personality.favouriteQuote}"
                {personality.quoteAttribution && (
                  <span className="not-italic ml-2" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
                    — {personality.quoteAttribution}
                  </span>
                )}
              </blockquote>
            )}

            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--color-muted)' }}>
              {personality?.hometown && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} style={{ color: 'var(--color-primary)' }} />
                  {personality.hometown}
                </span>
              )}
              {personality?.targetMajor && (
                <span className="flex items-center gap-1.5">
                  <Target size={13} style={{ color: 'var(--color-primary)' }} />
                  {personality.targetMajor}
                </span>
              )}
              {personality?.languagesSpoken && personality.languagesSpoken.length > 0 && (
                <span className="flex items-center gap-1.5">
                  <Globe size={13} style={{ color: 'var(--color-primary)' }} />
                  {personality.languagesSpoken.map(l => l.language).join(' · ')}
                </span>
              )}
            </div>
          </div>

          {/* Right: snapshot cards */}
          {(personality?.favouriteBook || personality?.funFact) && (
            <div className="flex-shrink-0 flex flex-col gap-2 w-full md:w-52">
              {/* Dream University intentionally omitted — can bias university reviewers */}
              {personality.favouriteBook && (
                <div className="card-raised p-3 rounded-xl">
                  <p className="label mb-1">Favourite Book</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>
                    {personality.favouriteBook}
                  </p>
                </div>
              )}
              {personality.funFact && (
                <div className="card-raised p-3 rounded-xl">
                  <p className="label mb-1">Fun Fact</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>
                    {personality.funFact}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
