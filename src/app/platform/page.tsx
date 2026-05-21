import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Overview — PortfolioOS',
  description: 'A complete student development platform for international schools — portfolio, Trailblazer electives, skill tracking, and more.',
};

const PILLARS = [
  {
    id: 'portfolio',
    icon: '📋',
    color: '#6C63FF',
    title: 'Verified Student Portfolio',
    subtitle: 'The living record of every student',
    description: 'A comprehensive digital portfolio that captures projects, extracurricular activities, work experience, awards, and teacher endorsements — all verified and timestamped. Students own their narrative; schools trust the evidence.',
    features: [
      'Projects with media, links, and student reflections',
      'ECAs with hours, roles, and skill domain mapping',
      'Teacher-verified skills with evidence statements',
      'Work experience with supervisor verification',
      'Gallery of photos, documents, videos, and certificates',
      'Teacher endorsements with one-click verification flow',
    ],
    status: 'Live Demo',
    statusColor: '#10B981',
  },
  {
    id: 'trailblazer',
    icon: '🎯',
    color: '#4ECDC4',
    title: 'Trailblazer & ECA Selection',
    subtitle: 'Skill-gated in-school enrichment',
    description: 'Students browse available Trailblazer programmes — Technology, Research, Sport, and Performing Arts — and see exactly which skill levels are required. As teachers verify skills in their portfolio, the right electives open up automatically.',
    features: [
      'Partner programme catalogue with skill prerequisites',
      'Live enrolment tracking with capacity management',
      'Five-point skill framework (Beginner → Mastery)',
      'Technology: VR Academy, FedTech Robotics, LGDN Esports',
      'Sport: physical skill, tactics, teamwork, resilience',
      'Performing Arts: technique, performance, collaboration',
    ],
    status: 'Live Demo',
    statusColor: '#10B981',
  },
  {
    id: 'skill-tracking',
    icon: '🔬',
    color: '#F59E0B',
    title: 'Skill Tracking & Verification',
    subtitle: 'Evidence-based, teacher-validated',
    description: 'Eight-domain soft skills framework combined with technical proficiency tracking. Students submit evidence; teachers validate with one click. Every skill has a paper trail — no black-box scoring.',
    features: [
      '8 core domains: Communication, Critical Thinking, Leadership...',
      'Technical proficiency 1–5 scale with teacher comments',
      'Email-based teacher verification workflow',
      'Skills mapped to specific projects and activities',
      'Khan Academy, Hour of AI, and resource links per skill gap',
      'Skill radar chart for visual progress overview',
    ],
    status: 'In Development',
    statusColor: '#F59E0B',
  },
  {
    id: 'dashboards',
    icon: '👨‍👩‍👧',
    color: '#EC4899',
    title: 'Parent & Student Dashboards',
    subtitle: 'Full visibility for families',
    description: 'Students see their portfolio, upcoming Trailblazer sessions, and skill gaps to work on. Parents see academic progress, verified activities, and enrichment history — all in one place.',
    features: [
      'Student: portfolio builder with drag-and-drop sections',
      'Student: Trailblazer browse and express interest',
      'Parent: real-time activity and skill updates',
      'Parent: verified hours and attendance records',
      'School coordinator: cohort-level dashboards',
      'Multi-role access with privacy controls',
    ],
    status: 'In Development',
    statusColor: '#F59E0B',
  },
  {
    id: 'ai-reporting',
    icon: '🤖',
    color: '#8B5CF6',
    title: 'AI-Powered Reporting',
    subtitle: 'Summaries that take minutes, not hours',
    description: 'AI generates personalised progress narratives for each student based on their verified portfolio data — ready for parent reports, Trailblazer programme reviews, and school communications.',
    features: [
      'Student progress narratives from verified portfolio data',
      'Trailblazer cohort summary reports per programme',
      'Skill gap recommendations with suggested resources',
      'ECA participation and impact statements',
      'End-of-term reports with teacher review and sign-off',
      'Exportable as PDF or sent directly to parents',
    ],
    status: 'Planned',
    statusColor: '#64748b',
  },
  {
    id: 'payments',
    icon: '💳',
    color: '#10B981',
    title: 'Payments (Optional)',
    subtitle: 'No third-party tools needed',
    description: 'Optional integrated payment collection for enrichment programmes, school trips, and optional activities. Parents pay directly through the platform; schools get real-time reconciliation.',
    features: [
      'Per-programme fee configuration',
      'Automated payment reminders to parents',
      'Real-time reconciliation dashboard for admin',
      'Partial payment and scholarship support',
      'Exportable payment reports',
      'Stripe-powered secure checkout',
    ],
    status: 'Planned',
    statusColor: '#64748b',
  },
];

export default function PlatformPage() {
  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(10,11,15,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800 }}>P</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>PortfolioOS</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'var(--color-text-soft)', textDecoration: 'none', fontSize: '0.875rem' }}>Home</Link>
            <Link href="/trailblazer" style={{ color: 'var(--color-text-soft)', textDecoration: 'none', fontSize: '0.875rem' }}>Trailblazer</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9B96FF' }}>Full Platform Overview</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--color-text)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
          One platform.{' '}
          <span style={{ background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every student moment.</span>
        </h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-soft)', maxWidth: '580px', margin: '0 auto 2rem' }}>
          From verified portfolios and Trailblazer elective selection to AI-generated reports and parent dashboards — built end-to-end for international schools.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Live Demo', color: '#10B981' },
            { label: 'In Development', color: '#F59E0B' },
            { label: 'Planned', color: '#64748b' },
          ].map(s => (
            <span key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-soft)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, display: 'inline-block' }} />
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* Pillars grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem' }}>
          {PILLARS.map(p => (
            <div key={p.id} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ padding: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: `${p.color}08` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${p.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                      {p.icon}
                    </div>
                    <div>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em', marginBottom: '0.1rem' }}>{p.title}</h2>
                      <p style={{ fontSize: '0.78rem', color: p.color, fontWeight: 500 }}>{p.subtitle}</p>
                    </div>
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 600, background: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}30`, whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {p.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-text-soft)' }}>{p.description}</p>
              </div>
              <div style={{ padding: '1.25rem 1.75rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {p.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.82rem', color: 'var(--color-text-soft)', lineHeight: 1.5 }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: '2px', fontSize: '0.7rem' }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Ready to see it in action?
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-soft)', marginBottom: '2rem' }}>
            Explore the live student portfolios or see how the Trailblazer skill framework works in practice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #6C63FF, #5a52e0)', color: '#fff', textDecoration: 'none', padding: '0.875rem 1.75rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}>
              View Student Portfolios →
            </Link>
            <Link href="/trailblazer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text)', textDecoration: 'none', padding: '0.875rem 1.75rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}>
              Explore Trailblazer
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PortfolioOS · UAE School Demo · Confidential</p>
      </footer>
    </main>
  );
}
