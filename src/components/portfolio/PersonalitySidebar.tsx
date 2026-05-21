'use client';

import { Quote, Globe, BookOpen, MapPin, Sparkles, Target, University } from 'lucide-react';
import { BentoCard, SectionLabel } from '@/components/ui/BentoCard';
import type { PersonalityProfile } from '@/lib/types';

const PROFICIENCY_LABEL: Record<string, string> = {
  NATIVE: 'Native', FLUENT: 'Fluent', CONVERSATIONAL: 'Conversational', BASIC: 'Basic',
};

interface PersonalitySidebarProps {
  profile: PersonalityProfile;
}

export function PersonalitySidebar({ profile }: PersonalitySidebarProps) {
  return (
    <aside className="space-y-4">
      <SectionLabel>About Me</SectionLabel>

      {/* Favourite Quote */}
      {profile.favouriteQuote && (
        <BentoCard>
          <div className="flex gap-3">
            <Quote size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <div>
              <p className="text-sm font-display italic leading-snug" style={{ color: 'var(--color-text)' }}>
                "{profile.favouriteQuote}"
              </p>
              {profile.quoteAttribution && (
                <p className="text-xs mt-2" style={{ color: 'var(--color-muted)' }}>
                  — {profile.quoteAttribution}
                </p>
              )}
            </div>
          </div>
        </BentoCard>
      )}

      {/* Ambition */}
      {profile.ambitionStatement && (
        <BentoCard>
          <div className="flex gap-3 items-start">
            <Target size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'var(--color-muted)' }}>Ambition</p>
              <p className="text-sm font-medium leading-snug" style={{ color: 'var(--color-text)' }}>
                {profile.ambitionStatement}
              </p>
            </div>
          </div>
        </BentoCard>
      )}

      {/* Target major + dream university */}
      {(profile.targetMajor || profile.dreamUniversity) && (
        <BentoCard>
          <div className="space-y-3">
            {profile.targetMajor && (
              <div className="flex gap-3 items-start">
                <BookOpen size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Target Major</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{profile.targetMajor}</p>
                </div>
              </div>
            )}
            {profile.dreamUniversity && (
              <div className="flex gap-3 items-start">
                <University size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Dream University</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{profile.dreamUniversity}</p>
                </div>
              </div>
            )}
          </div>
        </BentoCard>
      )}

      {/* Languages */}
      {profile.languagesSpoken && profile.languagesSpoken.length > 0 && (
        <BentoCard>
          <div className="flex gap-3 items-start">
            <Globe size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <div className="flex-1">
              <p className="text-xs mb-2" style={{ color: 'var(--color-muted)' }}>Languages</p>
              <div className="space-y-1.5">
                {profile.languagesSpoken.map(l => (
                  <div key={l.language} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--color-text)' }}>{l.language}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-surface-raised)', color: 'var(--color-muted)' }}>
                      {PROFICIENCY_LABEL[l.proficiency]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>
      )}

      {/* Favourite Book */}
      {profile.favouriteBook && (
        <BentoCard>
          <div className="flex gap-3 items-start">
            <BookOpen size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-muted)' }} />
            <div>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Favourite Book</p>
              <p className="text-sm" style={{ color: 'var(--color-text)' }}>{profile.favouriteBook}</p>
            </div>
          </div>
        </BentoCard>
      )}

      {/* Hometown + fun fact */}
      {(profile.hometown || profile.funFact) && (
        <BentoCard>
          <div className="space-y-3">
            {profile.hometown && (
              <div className="flex gap-3 items-center">
                <MapPin size={14} style={{ color: 'var(--color-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text)' }}>{profile.hometown}</span>
              </div>
            )}
            {profile.funFact && (
              <div className="flex gap-3 items-start">
                <Sparkles size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                <p className="text-sm italic" style={{ color: 'var(--color-muted)' }}>{profile.funFact}</p>
              </div>
            )}
          </div>
        </BentoCard>
      )}
    </aside>
  );
}
