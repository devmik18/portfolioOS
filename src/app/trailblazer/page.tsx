'use client';
import Link from 'next/link';
import { useState } from 'react';

const CATEGORY_TABS = ['All', 'Technology', 'Research', 'Performing Arts', 'Sport'];

// ─── Partner Programme Data ────────────────────────────────────────────────────
const PROGRAMMES = [
  {
    id: 'vr-academy',
    partner: 'VR Academy',
    name: 'Game Design',
    category: 'Technology',
    categoryColor: '#6C63FF',
    emoji: '🎮',
    description: 'Students design and build original games using industry-standard tools, developing game mechanics, world-building, and creative problem-solving.',
    spotsTotal: 20,
    spotsFilled: 14,
    dayTime: 'Tuesday & Thursday · 3:00–4:30pm',
    minSkillLevel: 2,
    skills: [
      {
        name: 'Game Mechanics Design',
        levels: [
          'Follows step-by-step instructions to create simple actions (move, jump).',
          'Builds simple mechanics with guidance (e.g. scoring or movement).',
          'Independently creates working mechanics that function correctly.',
          'Combines multiple mechanics (e.g. movement + scoring + timing).',
          'Designs original gameplay that others can understand and play.',
        ],
      },
      {
        name: 'World / Environment Building',
        levels: [
          'Places basic objects with support.',
          'Creates simple environments with guidance.',
          'Builds a complete environment independently.',
          'Designs structured and visually coherent environments.',
          'Creates immersive worlds with clear player flow and purpose.',
        ],
      },
      {
        name: 'Coding / Logic',
        levels: [
          'Follows step-by-step instructions.',
          'Adjusts simple code, blocks or settings.',
          'Writes or modifies logic independently.',
          'Solves problems and fixes errors.',
          'Builds systems or features independently and explains how they work.',
        ],
      },
      {
        name: 'Creativity & UX',
        levels: [
          'Copies elements accurately.',
          'Makes small creative changes.',
          'Designs with some originality.',
          'Thinks about the player experience and improves visually.',
          'Creates an engaging experience that others can understand, enjoy and review.',
        ],
      },
    ],
  },
  {
    id: 'fedtech-robotics',
    partner: 'FedTech Robotics & AI',
    name: 'Robotics & AI',
    category: 'Technology',
    categoryColor: '#4ECDC4',
    emoji: '🤖',
    description: 'Hands-on engineering and AI programming — students build robots, train machine learning models, and develop real engineering problem-solving skills.',
    spotsTotal: 16,
    spotsFilled: 16,
    dayTime: 'Monday & Wednesday · 3:00–4:30pm',
    minSkillLevel: 2,
    skills: [
      {
        name: 'Inputs / Outputs',
        levels: [
          'Identifies basic inputs and outputs.',
          'Uses screens or outputs with support.',
          'Connects inputs to outputs independently.',
          'Combines multiple inputs and outputs.',
          'Designs a system that responds intelligently to real inputs.',
        ],
      },
      {
        name: 'Programming / Logic',
        levels: [
          'Follows instructions to run simple sequences.',
          'Edits simple sequences with guidance.',
          'Builds a simple working programme.',
          'Debugs and improves programme flow.',
          'Creates efficient, logical solutions and can explain choices.',
        ],
      },
      {
        name: 'AI Understanding',
        levels: [
          'Understands AI as a basic concept.',
          'Uses a simple AI tool such as image or sound recognition.',
          'Trains a basic model and notes results.',
          'Applies AI to solve a defined problem.',
          'Explains, improves and evaluates the AI model or use case.',
        ],
      },
      {
        name: 'Problem Solving & Iteration',
        levels: [
          'Needs help to solve problems.',
          'Tries possible solutions with guidance.',
          'Solves simple problems independently.',
          'Tests and improves solutions.',
          'Reviews, optimises and explains how the solution improved.',
        ],
      },
    ],
  },
  {
    id: 'lgdn-esports',
    partner: 'LGDN Esports',
    name: 'Esports',
    category: 'Technology',
    categoryColor: '#FF6B6B',
    emoji: '🏆',
    description: 'Competitive gaming meets strategic thinking — students develop teamwork, analytical reasoning, and performance skills through structured esports coaching.',
    spotsTotal: 24,
    spotsFilled: 18,
    dayTime: 'Wednesday & Friday · 3:00–4:30pm',
    minSkillLevel: 1,
    skills: [
      {
        name: 'Strategy & Decision Making',
        levels: [
          'Plays without a clear strategy.',
          'Follows basic instructions and roles.',
          'Makes good decisions during gameplay.',
          'Adapts strategy during play.',
          'Leads strategy and guides others based on match context.',
        ],
      },
      {
        name: 'Communication & Teamwork',
        levels: [
          'Uses limited communication.',
          'Responds when prompted.',
          'Communicates clearly with the team.',
          'Supports and coordinates others.',
          'Leads team communication calmly and effectively.',
        ],
      },
      {
        name: 'Gameplay Mechanics',
        levels: [
          'Shows basic control.',
          'Improves consistency with support.',
          'Executes core skills reliably.',
          'Performs skills under pressure.',
          'Shows high-level execution consistently and can support others.',
        ],
      },
      {
        name: 'Analysis & Improvement',
        levels: [
          'Needs help to reflect on performance.',
          'Identifies basic mistakes.',
          'Understands strengths and areas to improve.',
          'Adjusts gameplay based on review.',
          'Analyses deeply and improves strategically over time.',
        ],
      },
    ],
  },
  // ── Research ─────────────────────────────────────────────────────────────────
  {
    id: 'research',
    partner: 'Research Programme',
    name: 'Research',
    category: 'Research',
    categoryColor: '#F59E0B',
    emoji: '🔬',
    description: 'Students learn to ask great questions, find and evaluate sources, and present evidence-based conclusions — foundational skills for any advanced academic pathway.',
    spotsTotal: 18,
    spotsFilled: 11,
    dayTime: 'Thursday · 3:00–4:30pm',
    minSkillLevel: 2,
    skills: [
      {
        name: 'Research Questioning',
        levels: [
          'Asks simple questions about a topic with support.',
          'Begins to ask relevant questions linked to a topic.',
          'Creates clear research questions independently.',
          'Refines questions to make research more focused and purposeful.',
          'Develops original, thoughtful questions that lead to deeper investigation.',
        ],
      },
      {
        name: 'Finding Information',
        levels: [
          'Uses information provided by an adult or teacher.',
          'Finds basic information from suggested sources with guidance.',
          'Independently finds relevant information from appropriate sources.',
          'Selects information from a range of sources and explains why it is useful.',
          'Identifies high-quality sources independently and uses them to build a strong understanding.',
        ],
      },
      {
        name: 'Evaluating Sources',
        levels: [
          'Recognises that information can come from different places.',
          'Begins to identify whether a source is useful or not.',
          'Checks basic reliability, such as author, date, or purpose.',
          'Compares sources and identifies possible bias or limitations.',
          'Critically evaluates sources and justifies which evidence is most trustworthy.',
        ],
      },
      {
        name: 'Organising Information',
        levels: [
          'Records simple facts with support.',
          'Sorts information into basic categories with guidance.',
          'Organises research clearly using notes, headings, diagrams, or tables.',
          'Connects ideas across sources and identifies patterns or themes.',
          'Synthesises information into a clear structure that supports a strong conclusion.',
        ],
      },
      {
        name: 'Presenting Findings',
        levels: [
          'Shares simple facts about a topic.',
          'Presents basic information with some structure.',
          'Communicates findings clearly and accurately.',
          'Uses evidence to support explanations and conclusions.',
          'Presents research in a confident, engaging, and well-evidenced way for a specific audience.',
        ],
      },
    ],
  },
  // ── Creative & Performing Arts ───────────────────────────────────────────────
  {
    id: 'creative-arts',
    partner: 'Performing Arts',
    name: 'Creative & Performing Arts',
    category: 'Performing Arts',
    categoryColor: '#EC4899',
    emoji: '🎭',
    description: 'Drama, music, dance, and visual arts — students develop creative confidence, technical performance skills, and the ability to collaborate on shared artistic outcomes.',
    spotsTotal: 22,
    spotsFilled: 15,
    dayTime: 'Monday & Friday · 3:00–4:30pm',
    minSkillLevel: 1,
    skills: [
      {
        name: 'Creative Development',
        levels: [
          'Copies or follows creative ideas with support.',
          'Begins to adapt ideas using prompts or examples.',
          'Creates original work independently using taught skills.',
          'Develops creative ideas with clear intention and personal style.',
          'Produces imaginative, original work that communicates meaning effectively.',
        ],
      },
      {
        name: 'Technique and Skill',
        levels: [
          'Practises basic techniques with support.',
          'Uses simple techniques with some accuracy.',
          'Applies taught techniques confidently and independently.',
          'Refines technique to improve quality, control, or expression.',
          'Uses techniques skilfully and deliberately to create a polished outcome.',
        ],
      },
      {
        name: 'Performance and Presentation',
        levels: [
          'Shares work or performs with adult support.',
          'Presents or performs simple pieces with guidance.',
          'Performs or presents confidently with clear awareness of the audience.',
          'Uses expression, timing, movement, voice, or visual choices to engage the audience.',
          'Delivers a polished, expressive performance or presentation that has clear impact.',
        ],
      },
      {
        name: 'Collaboration',
        levels: [
          'Takes part in group creative tasks with support.',
          'Shares ideas and listens when prompted.',
          'Works positively with others to develop a shared outcome.',
          'Builds on others\' ideas and helps the group improve the final piece.',
          'Leads creative collaboration effectively while valuing the contributions of others.',
        ],
      },
      {
        name: 'Reflection and Improvement',
        levels: [
          'Talks about what they like in their own work.',
          'Identifies simple improvements with support.',
          'Uses feedback to improve their work independently.',
          'Evaluates strengths and areas for development in detail.',
          'Continuously refines work through thoughtful self-evaluation and purposeful improvement.',
        ],
      },
    ],
  },
  // ── Sport ────────────────────────────────────────────────────────────────────
  {
    id: 'sport',
    partner: 'Sport Trailblazer',
    name: 'Sport',
    category: 'Sport',
    categoryColor: '#10B981',
    emoji: '⚽',
    description: 'From football to athletics — students develop physical skills, tactical understanding, and the resilience and teamwork that define great competitors and team players.',
    spotsTotal: 30,
    spotsFilled: 22,
    dayTime: 'Tuesday & Thursday · 3:00–4:30pm',
    minSkillLevel: 1,
    skills: [
      {
        name: 'Physical Skill',
        levels: [
          'Practises basic movements or skills with support.',
          'Performs simple skills with growing control.',
          'Applies key skills accurately and independently.',
          'Combines skills effectively in competitive or performance situations.',
          'Demonstrates excellent control, precision, and adaptability across different situations.',
        ],
      },
      {
        name: 'Tactical Understanding',
        levels: [
          'Follows basic rules and instructions.',
          'Begins to understand simple tactics with guidance.',
          'Makes appropriate tactical decisions independently.',
          'Adapts tactics based on opponents, teammates, or the situation.',
          'Anticipates play and uses strategy to influence performance effectively.',
        ],
      },
      {
        name: 'Teamwork and Communication',
        levels: [
          'Takes part in team activities with support.',
          'Communicates with teammates when prompted.',
          'Communicates clearly and works positively as part of a team.',
          'Supports, encourages, and coordinates with teammates during play.',
          'Leads team communication and helps others perform at their best.',
        ],
      },
      {
        name: 'Resilience and Sportsmanship',
        levels: [
          'Needs support to manage winning, losing, or mistakes.',
          'Begins to respond positively to feedback and challenges.',
          'Shows determination and respect during practice or competition.',
          'Recovers from setbacks and encourages others to keep improving.',
          'Models outstanding sportsmanship, resilience, and self-control.',
        ],
      },
      {
        name: 'Fitness and Personal Development',
        levels: [
          'Takes part in physical activity with encouragement.',
          'Understands basic ways to improve fitness or performance.',
          'Works independently to improve strength, stamina, flexibility, or skill.',
          'Sets personal goals and tracks progress over time.',
          'Takes ownership of personal development and makes informed choices to improve performance.',
        ],
      },
    ],
  },
];

const LEVEL_LABELS = ['Beginner', 'Developing', 'Secure', 'Advanced', 'Mastery'];
const LEVEL_COLORS = ['#64748b', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];

// ─── How it Works steps ────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  { step: '01', title: 'Students Build Their Portfolio', desc: 'Projects, ECAs, and skills are logged and evidenced throughout the year — from day one.' },
  { step: '02', title: 'Teachers Verify Skills', desc: 'Subject teachers and coaches review evidence and validate skill levels using the five-point framework.' },
  { step: '03', title: 'Electives Open Based on Skills', desc: 'Trailblazer programmes show prerequisite skill levels. Verified students get priority access.' },
  { step: '04', title: 'School Manages Cohorts', desc: 'Coordinators see live enrolment, skill distributions, and receive AI-generated reports per programme.' },
];

function SkillCard({ skill, color }: { skill: typeof PROGRAMMES[0]['skills'][0]; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)' }}>{skill.name}</span>
        <span style={{ fontSize: '1rem', color: 'var(--color-muted)', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '0 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {skill.levels.map((desc, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: '80px' }}>
                <span style={{
                  display: 'inline-block', padding: '2px 8px', borderRadius: '6px', fontSize: '0.65rem',
                  fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                  background: `${LEVEL_COLORS[i]}22`, color: LEVEL_COLORS[i],
                }}>
                  {i + 1} · {LEVEL_LABELS[i]}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-soft)', lineHeight: 1.5, marginTop: '2px' }}>{desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProgrammeCard({ prog }: { prog: typeof PROGRAMMES[0] }) {
  const [expanded, setExpanded] = useState(false);
  const fillPct = Math.round((prog.spotsFilled / prog.spotsTotal) * 100);
  const full = prog.spotsFilled >= prog.spotsTotal;

  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${prog.categoryColor}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
              {prog.emoji}
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: prog.categoryColor, marginBottom: '0.2rem' }}>
                {prog.partner}
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{prog.name}</h3>
            </div>
          </div>
          <span style={{
            padding: '4px 12px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
            background: full ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.12)',
            color: full ? '#F87171' : '#34D399',
            border: `1px solid ${full ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}`,
            whiteSpace: 'nowrap',
          }}>
            {full ? 'Full — Waitlist' : `${prog.spotsTotal - prog.spotsFilled} spots left`}
          </span>
        </div>

        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-text-soft)', marginTop: '1rem', marginBottom: '1rem' }}>{prog.description}</p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>📅 {prog.dayTime}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>👥 {prog.spotsFilled}/{prog.spotsTotal} enrolled</span>
          <span style={{ fontSize: '0.8rem', color: prog.categoryColor }}>
            ⬆ Min. skill level: {LEVEL_LABELS[prog.minSkillLevel - 1]}
          </span>
        </div>

        {/* Fill bar */}
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${fillPct}%`, background: full ? '#EF4444' : prog.categoryColor, borderRadius: '4px', transition: 'width 0.8s ease' }} />
        </div>
      </div>

      {/* Skill Framework Toggle */}
      <div style={{ padding: '1rem 1.75rem' }}>
        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            width: '100%', padding: '0.625rem', borderRadius: '10px', border: `1px solid ${prog.categoryColor}33`,
            background: `${prog.categoryColor}0d`, color: prog.categoryColor, fontWeight: 600, fontSize: '0.82rem',
            cursor: 'pointer', marginBottom: expanded ? '1rem' : 0,
          }}
        >
          {expanded ? '▴ Hide' : '▾ View'} Skill Framework ({prog.skills.length} skills, 5 levels each)
        </button>
        {expanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {prog.skills.map(s => <SkillCard key={s.name} skill={s} color={prog.categoryColor} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrailblazerPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? PROGRAMMES : PROGRAMMES.filter(p => p.category === activeTab);

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
            <Link href="/platform" style={{ color: 'var(--color-text-soft)', textDecoration: 'none', fontSize: '0.875rem' }}>Platform</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9B96FF' }}>Trailblazer · In-School Enrichment Platform</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--color-text)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
          Skills unlock the right{' '}
          <span style={{ background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>electives</span>
        </h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-soft)', maxWidth: '620px', margin: '0 auto' }}>
          Students build verified skill profiles through their portfolio. As teachers validate those skills, the right Trailblazer programmes open up — and schools can manage the whole thing in one place.
        </p>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {HOW_IT_WORKS.map(s => (
            <div key={s.step} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'rgba(108,99,255,0.25)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.step}</p>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-soft)', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Level Legend */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 40px' }}>
        <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Five-Point Scale:</span>
          {LEVEL_LABELS.map((label, i) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: LEVEL_COLORS[i], display: 'inline-block' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-soft)', fontWeight: 500 }}>{i + 1} — {label}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Programmes */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>Trailblazer Programmes</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Technology · Research · Arts · Sport</h2>
          </div>
          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORY_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '6px 14px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600,
                  border: '1px solid',
                  borderColor: activeTab === tab ? '#6C63FF' : 'rgba(255,255,255,0.1)',
                  background: activeTab === tab ? 'rgba(108,99,255,0.15)' : 'transparent',
                  color: activeTab === tab ? '#9B96FF' : 'var(--color-muted)',
                  cursor: 'pointer',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filtered.map(p => <ProgrammeCard key={p.id} prog={p} />)}
        </div>
      </section>

      {/* School Management CTA */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(108,99,255,0.04)', padding: '60px 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Built for school coordinators too
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-soft)', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Admins see every student’s verified skill level, manage enrolment caps, view cohort analytics, and generate AI-written progress reports — all from a single dashboard.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            {[
              { icon: '📋', label: 'Live enrolment management' },
              { icon: '📊', label: 'Cohort skill dashboards' },
              { icon: '✅', label: 'One-click skill verification' },
              { icon: '🤖', label: 'AI progress report generation' },
            ].map(f => (
              <div key={f.label} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{f.icon}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-soft)', fontWeight: 500 }}>{f.label}</span>
              </div>
            ))}
          </div>
          <Link href="/platform" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #6C63FF, #5a52e0)', color: '#fff', textDecoration: 'none', padding: '0.875rem 2rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}>
            See the full platform →
          </Link>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PortfolioOS · UAE School Demo · Confidential</p>
      </footer>
    </main>
  );
}
