import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPortfolios } from '@/lib/mock-data';
import { HeroSection }           from '@/components/portfolio/HeroSection';
import { BiographyCard }         from '@/components/portfolio/BiographyCard';
import { ProjectTimeline }       from '@/components/portfolio/ProjectTimeline';
import { EcaLog }                from '@/components/portfolio/EcaLog';
import { WorkExperienceSection } from '@/components/portfolio/WorkExperienceSection';
import { TranscriptPanel }       from '@/components/portfolio/TranscriptPanel';
import { SkillsSection }         from '@/components/portfolio/SkillsSection';
import { EndorsementsSection }   from '@/components/portfolio/EndorsementsSection';
import { VolunteeringSection, BadgesSection } from '@/components/portfolio/VolunteeringAndBadges';
import { AwardsSection }         from '@/components/portfolio/AwardsSection';
import { GallerySection }        from '@/components/portfolio/GallerySection';
import { DevSwitcher }           from '@/components/portfolio/DevSwitcher';

interface PageProps {
  params: { slug: string };
}

async function getPortfolio(slug: string) {
  return allPortfolios[slug] ?? allPortfolios['alexm_safahbs'] ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await getPortfolio(params.slug);
  if (!p) return { title: 'Not Found' };
  return {
    title: `${p.firstName} ${p.lastInitial}. — Portfolio`,
    description: `Portfolio of ${p.firstName} ${p.lastInitial}. — ${p.schoolName}, Class of ${p.graduationYear}.`,
    openGraph: {
      title: `${p.firstName} ${p.lastInitial}. — Student Portfolio`,
      images: p.coverImageUrl ? [p.coverImageUrl] : p.avatarUrl ? [p.avatarUrl] : [],
    },
  };
}

function Divider() {
  return (
    <div className="w-full px-6 md:px-12">
      <div className="divider" />
    </div>
  );
}

export default async function PortfolioPage({ params }: PageProps) {
  const p = await getPortfolio(params.slug);
  if (!p) notFound();
  const mv = p.moduleVisibility;

  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <HeroSection portfolio={p} />

      {/* ── About ── */}
      {mv.sidebar && (
        <BiographyCard
          firstName={p.firstName}
          lastInitial={p.lastInitial}
          gradeLevel={p.gradeLevel}
          graduationYear={p.graduationYear}
          schoolName={p.schoolName}
          avatarUrl={p.avatarUrl}
          personality={p.personality}
          curriculumType={p.curriculumType}
        />
      )}

      <Divider />

      {/* ── Projects ── */}
      {mv.projects && <ProjectTimeline projects={p.projects} />}

      <Divider />

      {/* ── Activities zone: ECAs + Work ── */}
      {mv.ecas && <EcaLog ecas={p.ecas} />}
      {mv.workExperience && p.workExperience && p.workExperience.length > 0 && (
        <WorkExperienceSection workExperience={p.workExperience} />
      )}

      <Divider />

      {/* ── Academic zone: Transcript ── */}
      {mv.transcript && p.transcript && (
        <TranscriptPanel transcript={p.transcript} />
      )}

      <Divider />

      {/* ── Validation zone: Skills + Endorsements ── */}
      {mv.skills && (
        <SkillsSection
          ecas={p.ecas}
          projects={p.projects}
          techSkills={p.techSkills}
        />
      )}
      {mv.endorsements && p.endorsements && p.endorsements.length > 0 && (
        <EndorsementsSection endorsements={p.endorsements} />
      )}

      <Divider />

      {/* ── Service + Recognition zone ── */}
      {mv.volunteering && <VolunteeringSection volunteering={p.volunteering} />}
      {mv.awards && p.awards && p.awards.length > 0 && (
        <AwardsSection awards={p.awards} />
      )}
      {mv.achievements && <BadgesSection badges={p.badges} />}

      <Divider />

      {/* ── Gallery (bottom) ── */}
      {mv.gallery && p.gallery && p.gallery.length > 0 && (
        <GallerySection gallery={p.gallery} />
      )}

      {/* ── Footer ── */}
      <footer className="mt-20" style={{ borderTop: '1px solid var(--color-border)' }}>

        {/* Portfolio credit line */}
        <div className="py-10 w-full px-6 md:px-12 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--color-text-soft)' }}>
              {p.firstName} {p.lastInitial}. &mdash; Class of {p.graduationYear}
            </p>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              {p.personality?.hometown ?? p.schoolName ?? ''}
              {p.schoolName && p.personality?.hometown ? ` · ${p.schoolName}` : ''}
            </p>
          </div>
          <p className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--color-muted)', opacity: 0.4 }}>
            Student Portfolio
          </p>
        </div>

        {/* Dev-only portfolio switcher */}
        <DevSwitcher currentSlug={params.slug} />

      </footer>
    </main>
  );
}
