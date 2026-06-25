'use client';
import Link from 'next/link';
import { allPortfolios } from '@/lib/mock-data';

const FEATURED = ['alexm_safahbs', 'omara_meridiandxb', 'mayab_kcsdxb'] as const;

const PLATFORM_FEATURES = [
  { icon: '🎓', title: 'College Alignment Engine', description: 'Every student scored against every college across eight weighted dimensions — Strong Likely to Reach — with the receipt behind each number always open.' },
  { icon: '📈', title: 'Trajectory Engine', description: 'Grades 9–10 tracked by GPA level and slope, not just averages — surfacing who is on-track long before applications open.' },
  { icon: '🧭', title: 'Cohort Admissions View', description: "Every student's college list, major fit, and risk on one screen — the counsellor's single-screen verdict across the whole cohort." },
  { icon: '📊', title: 'Academic Profile & Rigour', description: 'GPA, SAT superscore, and AP course rigour audited like a balance sheet — the verified inputs the engine consumes.' },
  { icon: '📝', title: 'AI Report Writer', description: 'Counsellor reports and voice feedback drafted straight from real gradebook data — minutes, not hours, with a teacher in the loop.' },
  { icon: '🪪', title: 'Portfolio Studio', description: "Turns a student's verified evidence into a publishable, university-facing portfolio — scored against their intended major." },
];

export default function LandingPage() {
  const profiles = FEATURED.map(slug => allPortfolios[slug]).filter(Boolean);

  return (
    <>
      <style>{`
        .profile-card { transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .profile-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(108,99,255,0.18); border-color: rgba(108,99,255,0.35) !important; }
        .nav-link { transition: color 0.15s; }
        .nav-link:hover { color: var(--color-text) !important; }
        .btn-primary { transition: opacity 0.15s, transform 0.15s; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .feature-card { transition: background 0.2s, border-color 0.2s; }
        .feature-card:hover { background: rgba(255,255,255,0.05) !important; border-color: rgba(108,99,255,0.2) !important; }
        .view-btn { transition: background 0.15s; }
        .view-btn:hover { background: rgba(108,99,255,0.18) !important; }
      `}</style>

      <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>

        {/* ── Nav ── */}
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(10,11,15,0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '13px', letterSpacing: '-0.02em' }}>CT</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>College Track</span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="#platform" className="nav-link" style={{ color: 'var(--color-text-soft)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>What We Do</a>
              <a href="#portfolios" className="nav-link" style={{ color: 'var(--color-text-soft)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Student Portfolios</a>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9B96FF' }}>College Track · UAE Admissions Platform — Demo</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
            Every student has a story.{' '}
            <span style={{ background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We help schools tell it.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--color-text-soft)', maxWidth: '620px', margin: '0 auto 2.5rem' }}>
            College Track turns everyday gradebook marks into a defensible college strategy — verified portfolios, an alignment engine that scores every student against every college, and AI-written reports. Built for schools in the UAE and beyond.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#platform" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #6C63FF, #5a52e0)', color: '#fff', textDecoration: 'none', padding: '0.875rem 1.75rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 0 40px rgba(108,99,255,0.25)' }}>
              See what College Track does →
            </a>
            <a href="#portfolios" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--color-text)', textDecoration: 'none', padding: '0.875rem 1.75rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}>
              View student portfolios →
            </a>
          </div>
        </section>

        {/* ── What College Track does (primary feature) ── */}
        <section id="platform" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '70px 2rem 90px', background: 'rgba(108,99,255,0.025)', scrollMarginTop: '64px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B96FF', marginBottom: '0.75rem' }}>What College Track does</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>From the gradebook to the college offer — one intelligent chain</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-soft)', maxWidth: '640px', margin: '1.1rem auto 0' }}>
                College Track turns everyday gradebook marks into a defensible college strategy — every percentage carries an exact GPA value, every trend becomes points, and every student gets one computed verdict per college, with the receipt permanently open.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {PLATFORM_FEATURES.map(f => (
                <div key={f.title} className="feature-card" style={{ padding: '1.75rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '1.9rem', marginBottom: '0.85rem' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>{f.description}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="#portfolios" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--color-text)', textDecoration: 'none', padding: '0.875rem 2rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}>
                See it on real student portfolios →
              </a>
            </div>
          </div>
        </section>

        {/* ── Student Profiles ── */}
        <section id="portfolios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '70px 2rem 80px', scrollMarginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>Live Student Portfolios</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>See what students are building</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '1.5rem' }}>
            {profiles.map(p => (
              <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: 'none' }}>
                <article className="profile-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}>
                  {/* Cover image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img src={p.coverImageUrl ?? ''} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,15,0.9) 0%, transparent 55%)' }} />
                    {/* Avatar */}
                    <div style={{ position: 'absolute', bottom: '-2rem', left: '1.5rem' }}>
                      <img src={p.avatarUrl ?? ''} alt={p.firstName} style={{ width: '72px', height: '72px', borderRadius: '50%', border: '3px solid rgba(30,30,40,1)', objectFit: 'cover', display: 'block' }} />
                    </div>
                    {/* Grade badge */}
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(10,11,15,0.72)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '3px 10px', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                      Grade {p.gradeLevel}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '2.25rem 1.5rem 1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                      {p.firstName} {p.lastInitial}.
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginBottom: '0.875rem' }}>
                      {p.schoolName} · Class of {p.graduationYear}
                    </p>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-text-soft)', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {p.personality?.ambitionStatement ?? p.personality?.shortBio?.slice(0, 120)}
                    </p>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', marginBottom: '1rem' }}>
                      {[
                        { label: 'Projects', value: p.projects.length },
                        { label: 'ECAs', value: p.ecas.length },
                        { label: 'Skills', value: p.totalVerifiedSkills },
                        { label: 'Hours', value: `${p.totalVerifiedHours}h` },
                      ].map(s => (
                        <div key={s.label} style={{ flex: 1, textAlign: 'center' }}>
                          <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{s.value}</p>
                          <p style={{ fontSize: '0.6rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '3px' }}>{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="view-btn" style={{ textAlign: 'center', padding: '0.625rem', background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: '8px', color: '#9B96FF', fontSize: '0.8rem', fontWeight: 600 }}>
                      View Full Portfolio →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--color-muted)', opacity: 0.4, letterSpacing: '0.12em', textTransform: 'uppercase' }}>College Track · UAE Student Portfolio Demo · Confidential</p>
        </footer>
      </main>
    </>
  );
}
