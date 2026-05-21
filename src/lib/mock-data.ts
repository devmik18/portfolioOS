// ─── Mock Portfolio Data ───────────────────────────────────────────────────────
// Standalone — uses local inlined types (no workspace dep for Vercel deployment)

import type {
  PublicPortfolio,
  PortfolioProject,
  EcaEntry,
  SkillEntry,
  TechSkillEntry,
  VolunteeringEntry,
  VerifiedBadge,
  PersonalityProfile,
  PortfolioModuleVisibility,
  SkillVerificationContext,
  VolunteerVerificationContext,
  TranscriptYear,
  GalleryItem,
  AwardEntry,
  WorkExperienceEntry,
  TeacherEndorsement,
} from './types';

export const DEFAULT_MODULE_VISIBILITY: PortfolioModuleVisibility = {
  hero: true,
  academicScores: true,
  transcript: true,
  projects: true,
  ecas: true,
  workExperience: true,
  achievements: true,
  skills: true,
  volunteering: true,
  awards: true,
  gallery: true,
  endorsements: true,
  sidebar: true,
};

const mockProjects: PortfolioProject[] = [
  {
    id: 'proj-1',
    portfolioId: 'port-alexm',
    academicYear: '2023-24',
    gradeLevel: 11,
    title: 'AI-Powered Waste Classification System',
    slug: 'ai-waste-classifier',
    category: 'RESEARCH',
    summary: 'Developed a convolutional neural network achieving 94% accuracy in classifying recyclable materials from images, deployed as a mobile app used in 3 local schools.',
    reflection: '<p>The biggest challenge was assembling a labelled dataset of 8,000 images. I learned that data quality matters far more than model complexity. After three failed architectures, I switched from a custom CNN to transfer learning with MobileNetV3 — accuracy jumped from 67% to 94% overnight.</p><p>If I were starting again, I would spend the first month solely on data collection strategy rather than rushing to model training.</p>',
    mediaItems: [
      { id: 'm1', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800', caption: 'Model training accuracy curves', sortOrder: 0 },
      { id: 'm2', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', caption: 'Mobile app UI', sortOrder: 1 },
    ],
    links: [
      { id: 'l1', url: 'https://github.com', title: 'GitHub Repository', description: 'Full source code and training notebooks' },
    ],
    skills: [
      { skillId: 'sk1', skillName: 'Problem Solving', framework: 'SKILLS_BUILDER', stepNumber: 12, stepDescriptor: 'Breaks complex problems into manageable components', validationStatus: 'VALIDATED' },
      { skillId: 'sk2', skillName: 'Creativity', framework: 'SKILLS_BUILDER', stepNumber: 10, stepDescriptor: 'Generates novel solutions to real-world problems', validationStatus: 'VALIDATED' },
    ],
    startDate: '2023-09-01',
    endDate: '2024-03-15',
    isVisible: true,
    sortOrder: 0,
    softSkillDomains: ['Critical Thinking', 'Creativity & Innovation', 'Digital & Technical Literacy'],
  },
  {
    id: 'proj-2',
    portfolioId: 'port-alexm',
    academicYear: '2023-24',
    gradeLevel: 11,
    title: 'Regional Science Fair — Climate Modelling',
    slug: 'climate-modelling-fair',
    category: 'ACADEMIC',
    summary: 'First place, Regional Science Olympiad. Built a predictive climate model for the Pearl River Delta using publicly available atmospheric data.',
    reflection: '<p>Presenting to a panel of university professors forced me to articulate complex statistical concepts in plain language — a skill I had never consciously practiced before.</p>',
    mediaItems: [
      { id: 'm3', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1532094349884-543559c5a734?w=800', caption: 'Science fair presentation', sortOrder: 0 },
    ],
    links: [],
    skills: [
      { skillId: 'sk3', skillName: 'Speaking', framework: 'SKILLS_BUILDER', stepNumber: 11, stepDescriptor: 'Uses evidence to persuade a specialist audience', validationStatus: 'VALIDATED' },
    ],
    startDate: '2024-01-10',
    endDate: '2024-04-20',
    isVisible: true,
    sortOrder: 1,
    softSkillDomains: ['Critical Thinking', 'Communication'],
  },
  {
    id: 'proj-3',
    portfolioId: 'port-alexm',
    academicYear: '2022-23',
    gradeLevel: 10,
    title: 'School Debate Team — Co-Captain',
    slug: 'debate-co-captain',
    category: 'LEADERSHIP',
    summary: 'Led team restructure and coaching programme resulting in first national semi-final appearance in school history.',
    reflection: '<p>Leading peers who were older than me required me to earn credibility through preparation rather than authority. I rewrote our coaching programme from scratch.</p>',
    mediaItems: [],
    links: [],
    skills: [
      { skillId: 'sk4', skillName: 'Leadership', framework: 'SKILLS_BUILDER', stepNumber: 9, stepDescriptor: 'Motivates a team through a sustained challenge', validationStatus: 'VALIDATED' },
      { skillId: 'sk5', skillName: 'Teamwork', framework: 'SKILLS_BUILDER', stepNumber: 10, stepDescriptor: 'Builds team culture and shared ownership', validationStatus: 'PENDING' },
    ],
    startDate: '2022-09-01',
    endDate: '2023-06-15',
    isVisible: true,
    sortOrder: 0,
    softSkillDomains: ['Leadership', 'Communication', 'Teamwork & Collaboration'],
  },
];

const mockEcas: EcaEntry[] = [
  { id: 'eca-1', portfolioId: 'port-alexm', academicYear: '2023-24', name: 'Varsity Swimming', category: 'SPORT', role: 'Team Captain', hoursPerWeek: 8, weeksActive: 36, totalHours: 288, description: 'Competitive swimming, captained varsity team of 18 athletes.', achievements: '2nd place inter-school relay championship. Personal best in 100m freestyle.', isVisible: true, softSkillDomains: ['Leadership', 'Teamwork & Collaboration', 'Resilience & Growth Mindset'] },
  { id: 'eca-2', portfolioId: 'port-alexm', academicYear: '2023-24', name: 'Computer Science Society', category: 'STEM', role: 'Founder & President', hoursPerWeek: 3, weeksActive: 30, totalHours: 90, description: 'Founded the school\'s first CS society. Organised weekly workshops in Python and machine learning for 40+ members.', achievements: 'Grew from 0 to 45 active members in one year.', isVisible: true, softSkillDomains: ['Leadership', 'Digital & Technical Literacy', 'Communication'] },
  { id: 'eca-3', portfolioId: 'port-alexm', academicYear: '2022-23', name: 'Model United Nations', category: 'DEBATE', role: 'Deputy Secretary-General', hoursPerWeek: 4, weeksActive: 28, totalHours: 112, description: 'Organised regional MUN conference hosting 200 delegates from 12 schools.', achievements: 'Best Delegate award at Shanghai YMUN.', isVisible: true, softSkillDomains: ['Communication', 'Critical Thinking', 'Leadership', 'Teamwork & Collaboration'] },
  { id: 'eca-4', portfolioId: 'port-alexm', academicYear: '2021-22', name: 'School Orchestra', category: 'MUSIC', role: 'First Violin', hoursPerWeek: 5, weeksActive: 32, totalHours: 160, description: 'Performed in three public concerts including a charity gala raising ¥120,000.', achievements: 'Grade 8 ABRSM Violin with Distinction.', isVisible: true, softSkillDomains: ['Teamwork & Collaboration', 'Resilience & Growth Mindset', 'Professionalism & Character'] },
];

const mockSkills: SkillEntry[] = [
  { id: 'skill-1', portfolioId: 'port-alexm', projectId: 'proj-1', framework: 'SKILLS_BUILDER', skillName: 'Problem Solving', stepNumber: 12, stepDescriptor: 'Breaks complex problems into manageable components and tests hypotheses systematically', evidenceStatement: 'When my first three CNN architectures failed to break 70% accuracy, I systematically diagnosed each failure by ablation testing — removing components one at a time to isolate what was and was not working. This methodical approach led me to the transfer learning breakthrough.', validationStatus: 'VALIDATED', validatedByName: 'Dr. Sarah Chen', validatedAt: '2024-03-20' },
  { id: 'skill-2', portfolioId: 'port-alexm', projectId: 'proj-1', framework: 'SKILLS_BUILDER', skillName: 'Creativity', stepNumber: 10, stepDescriptor: 'Generates novel, practical solutions to real-world problems', evidenceStatement: 'The dataset collection problem was unsolvable with my school\'s resources. I designed a gamified crowdsourcing app that incentivised classmates to photograph and label waste items at lunch — generating 4,000 labelled images in two weeks at zero cost.', validationStatus: 'VALIDATED', validatedByName: 'Dr. Sarah Chen', validatedAt: '2024-03-20' },
  { id: 'skill-3', portfolioId: 'port-alexm', projectId: 'proj-3', framework: 'SKILLS_BUILDER', skillName: 'Leadership', stepNumber: 9, stepDescriptor: 'Motivates a team through a sustained challenge without direct authority', evidenceStatement: 'As a Year 10 student leading Year 11 and 12 debaters, I had no formal authority. I rebuilt the training programme around evidence-based drills that produced visible improvement within four weeks — the results earned the team\'s trust where my role could not.', validationStatus: 'VALIDATED', validatedByName: 'Mr. James Whitfield', validatedAt: '2023-05-15' },
];

const mockVolunteering: VolunteeringEntry[] = [
  { id: 'vol-1', portfolioId: 'port-alexm', organisationName: 'Green Future Shanghai', role: 'Environmental Education Volunteer', supervisorName: 'Li Wei', supervisorEmail: 'li.wei@greenfuture.org', startDate: '2022-06-01', endDate: '2024-05-01', hoursLogged: 120, hoursVerified: 120, description: 'Weekly environmental education sessions for primary school students in Pudong district.', impactStatement: 'Delivered 48 sessions reaching over 800 students. Developed a reusable waste-sorting curriculum now used by 3 partner schools.', verificationStatus: 'VERIFIED', verifiedAt: '2024-05-05', isVisible: true },
  { id: 'vol-2', portfolioId: 'port-alexm', organisationName: 'Shanghai Community Library', role: 'English Language Tutor', supervisorName: 'Emma Zhang', supervisorEmail: 'emma@sclibrary.org', startDate: '2023-01-15', hoursLogged: 64, hoursVerified: 64, description: 'One-to-one English tutoring for adult learners preparing for workplace certification exams.', impactStatement: '6 of my 8 tutees passed their Cambridge B2 First examination at first sitting.', verificationStatus: 'VERIFIED', verifiedAt: '2024-01-10', isVisible: true },
];

const mockBadges: VerifiedBadge[] = [
  { id: 'badge-1', portfolioId: 'port-alexm', source: 'CREDLY', badgeName: 'Google Data Analytics Certificate', issuerName: 'Google', imageUrl: 'https://images.credly.com/size/340x340/images/d41de2b7-cbc2-47ec-9ebb-26d5e65ded30/GCC_badge_DA_1000x1000.png', assertionUrl: 'https://www.credly.com/badges/example', earnedDate: '2024-02-10', verificationStatus: 'VERIFIED' },
  { id: 'badge-2', portfolioId: 'port-alexm', source: 'OPEN_BADGE', badgeName: 'Duke of Edinburgh Bronze Award', issuerName: 'The Duke of Edinburgh\'s International Award', imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=200', assertionUrl: 'https://www.dofe.org/verify/example', earnedDate: '2023-07-20', verificationStatus: 'SELF_REPORTED' },
];



const mockTranscript: TranscriptYear[] = [
  {
    academicYear: '2023-24', gradeLevel: 11, curriculum: 'AP',
    gpaWeighted: 4.2, gpaUnweighted: 3.9,
    notes: 'AP Track — 4 AP courses',
    subjects: [
      { subjectName: 'AP Chemistry',          grade: 'A',  gradeType: 'LETTER', isPredicted: false, isVerified: true,  verifiedByName: 'Dr. Sarah Chen', apScore: 5 },
      { subjectName: 'AP Calculus BC',        grade: 'A+', gradeType: 'LETTER', isPredicted: false, isVerified: true,  verifiedByName: 'Mr. Roberts',    apScore: 5 },
      { subjectName: 'AP English Literature', grade: 'B+', gradeType: 'LETTER', isPredicted: false, isVerified: true,  verifiedByName: 'Ms. Williams',   apScore: 4 },
      { subjectName: 'AP World History',      grade: 'A-', gradeType: 'LETTER', isPredicted: false, isVerified: false, apScore: 4 },
      { subjectName: 'PE & Health',           grade: 'A',  gradeType: 'LETTER', isPredicted: false, isVerified: false },
    ],
    assessments: [
      { id: 'as1', assessmentType: 'PSAT', name: 'PSAT/NMSQT (Oct 2023)', attemptDate: '2023-10-11', score: 1420, maxScore: 1520, subscores: { 'Reading & Writing': 720, 'Math': 700 }, isVerified: false },
    ],
  },
  {
    academicYear: '2022-23', gradeLevel: 10, curriculum: 'AP',
    gpaWeighted: 4.0, gpaUnweighted: 3.8,
    notes: 'AP Track — 3 AP courses',
    subjects: [
      { subjectName: 'AP Biology',              grade: 'A',  gradeType: 'LETTER', isPredicted: false, isVerified: true, verifiedByName: 'Dr. Chen', apScore: 5 },
      { subjectName: 'AP Computer Science A',   grade: 'A+', gradeType: 'LETTER', isPredicted: false, isVerified: true, verifiedByName: 'Mr. Liu',  apScore: 5 },
      { subjectName: 'Pre-Calculus',            grade: 'A',  gradeType: 'LETTER', isPredicted: false, isVerified: false },
      { subjectName: 'AP Human Geography',      grade: 'B+', gradeType: 'LETTER', isPredicted: false, isVerified: false, apScore: 4 },
      { subjectName: 'Mandarin Chinese (Adv)',  grade: 'A+', gradeType: 'LETTER', isPredicted: false, isVerified: false },
    ],
    assessments: [],
  },
];

const mockGallery: GalleryItem[] = [
  { id: 'g1', portfolioId: 'port-alexm', type: 'PHOTO',    title: 'AI Waste Classifier — Demo Day', description: 'Presenting to judges at the STEMS Showcase, March 2024.', academicYear: '2023-24', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', sortOrder: 0, createdAt: '2024-03-20' },
  { id: 'g2', portfolioId: 'port-alexm', type: 'DOCUMENT', title: 'Google Data Analytics Certificate', description: 'Verified credential from Google Career Certificates programme.', academicYear: '2023-24', url: 'https://www.credly.com/badges/example', fileType: 'PDF', fileSizeKb: 420, sortOrder: 1, createdAt: '2024-02-10' },
  { id: 'g3', portfolioId: 'port-alexm', type: 'LINK',     title: 'AI Waste Classifier — GitHub Repository', description: 'Full source code, training notebooks, and MobileNetV3 transfer learning implementation.', academicYear: '2023-24', url: 'https://github.com', sortOrder: 2, createdAt: '2024-01-15' },
  { id: 'g4', portfolioId: 'port-alexm', type: 'ESSAY',    title: 'Common App Personal Statement — Draft', description: 'Essay exploring the intersection of AI and environmental responsibility.', academicYear: '2023-24', url: '#', fileType: 'PDF', fileSizeKb: 85, sortOrder: 3, createdAt: '2024-06-01' },
  { id: 'g5', portfolioId: 'port-alexm', type: 'PHOTO',    title: 'Swimming — Inter-School Relay Championship', description: '2nd place — Shanghai District Championships.', academicYear: '2023-24', url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800', sortOrder: 4, createdAt: '2024-04-05' },
];

const mockAwards: AwardEntry[] = [
  { id: 'aw1', portfolioId: 'port-alexm', title: 'Regional Science Olympiad — 1st Place', awardingBody: 'Shanghai STEM Federation', academicYear: '2023-24', gradeLevel: 11, level: 'LOCAL', category: 'STEM', description: 'Climate modelling project awarded top prize from 64 competing teams.', placement: '1st Place', isVisible: true },
  { id: 'aw2', portfolioId: 'port-alexm', title: 'Academic Honor Roll', awardingBody: 'Safah British School', academicYear: '2023-24', gradeLevel: 11, level: 'SCHOOL', category: 'ACADEMIC', description: 'Top 10% of Year 11 cohort.', placement: 'Honours', isVisible: true },
  { id: 'aw3', portfolioId: 'port-alexm', title: 'National High School AI Competition — Finalist', awardingBody: 'China AI Education Initiative', academicYear: '2022-23', gradeLevel: 10, level: 'NATIONAL', category: 'STEM', description: 'Finalist from 1,200 submitted projects nationally.', placement: 'Finalist', isVisible: true },
];

const mockWorkExperience: WorkExperienceEntry[] = [
  { id: 'we1', portfolioId: 'port-alexm', employerName: 'Safah Learning Centre', role: 'Python Programming Tutor', employerType: 'SCHOOL', startDate: '2023-09-01', endDate: '2024-06-30', isCurrent: false, hoursPerWeek: 3, description: 'One-to-one Python tutoring for Year 9–10 students preparing for their first programming projects.', keyLearning: 'Teaching requires far deeper understanding than solving the problem yourself — I had to rebuild my mental model of loops and functions from scratch to explain them clearly.', supervisorName: 'Ms. Rachel Wong', verificationStatus: 'VERIFIED', verifiedAt: '2024-07-01', isVisible: true },
];

const mockEndorsements: TeacherEndorsement[] = [
  { id: 'end1', portfolioId: 'port-alexm', teacherName: 'Dr. Sarah Chen', teacherSubject: 'Chemistry & Science', attribute: 'Intellectual Curiosity', endorsementText: 'Alex approaches every scientific question with a genuine desire to understand the underlying mechanism, not just to find the right answer. In three years of teaching, I have rarely encountered a student who asks better questions. His AI waste classification project required him to teach himself transfer learning from first principles — something most undergraduate students struggle with — and he did so with methodical precision and enthusiasm.', isVisible: true },
  { id: 'end2', portfolioId: 'port-alexm', teacherName: 'Mr. James Whitfield', teacherSubject: 'English & Debate', attribute: 'Communication & Leadership', endorsementText: 'As Co-Captain of the debate team, Alex demonstrated a rare quality: the ability to lead peers who were older than him without relying on formal authority. He rebuilt our training programme from scratch and delivered it with patience and precision. His written work is equally impressive — clear, structured, and confident in its argumentation.', isVisible: true },
];

const mockPersonality: PersonalityProfile = {
  favouriteQuote: 'The measure of intelligence is the ability to change.',
  quoteAttribution: 'Albert Einstein',
  shortBio: "I'm Alex, a Grade 11 student at Meridian Academy Dubai. I spend most of my time thinking about two things: how AI can solve real problems, and how to go faster in the pool. I founded our school's Computer Science Society, taught myself machine learning well enough to build a waste-sorting AI that's now running in three local schools, and somewhere in between I co-captained the debate team to our first national semi-final. I'm driven by using technology for environmental good — and I'm only just getting started.",
  ambitionStatement: 'Build AI systems that accelerate climate science and make clean energy accessible to every community.',
  targetMajor: 'Computer Science & Environmental Engineering',
  dreamUniversity: 'MIT',
  languagesSpoken: [
    { language: 'English', proficiency: 'NATIVE' },
    { language: 'Arabic', proficiency: 'CONVERSATIONAL' },
    { language: 'French', proficiency: 'BASIC' },
  ],

  hometown: 'Dubai, UAE',
  funFact: 'Swam competitively for 9 years and once accidentally entered an invitational meet meant for university students — and made the finals.',
  favouriteBook: 'The Innovators — Walter Isaacson',
};

export const mockPublicPortfolio: PublicPortfolio = {
  slug: 'alexm_safahbs',
  visibility: 'PUBLIC',
  moduleVisibility: DEFAULT_MODULE_VISIBILITY,
  isPasswordProtected: false,

  firstName: 'Alex',
  lastInitial: 'M',
  gradeLevel: 11,
  graduationYear: 2025,
  schoolName: 'Meridian Academy Dubai',
  avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
  coverImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85',

  gpaWeighted: 4.2,
  gpaUnweighted: 3.9,
  satSuperscore: 1480,
  actBest: undefined,

  curriculumType: 'AP',

  projects: mockProjects,
  ecas: mockEcas,
  skills: mockSkills,
  techSkills: [
    { id: 'ts-am-1', portfolioId: 'port-alexm', skillName: 'Python', category: 'CODE', level: 4, evidenceNote: 'Built and deployed a CNN-based mobile app with 94% accuracy used in 3 schools.', verificationStatus: 'VALIDATED', verifiedByName: 'Dr. Sarah Chen', verifiedAt: '2024-03-20', teacherComment: 'Alex demonstrates advanced Python fluency — clean, well-documented code with production-grade error handling.', nextStepSuggestion: 'Publish the waste classifier as an open-source package with documentation and a test suite.' },
    { id: 'ts-am-2', portfolioId: 'port-alexm', skillName: 'Machine Learning', category: 'DATA', level: 3, evidenceNote: 'Applied transfer learning (MobileNetV3) and built a climate model for the Pearl River Delta.', verificationStatus: 'VALIDATED', verifiedByName: 'Dr. Sarah Chen', verifiedAt: '2024-03-20', teacherComment: 'Strong conceptual grasp of ML pipelines. Diagnosis methodology during model failure was impressive.', nextStepSuggestion: 'Explore model interpretability — learn SHAP or LIME to explain predictions to non-technical audiences.' },
    { id: 'ts-am-3', portfolioId: 'port-alexm', skillName: 'Data Visualisation', category: 'DATA', level: 3, evidenceNote: 'Created climate model output charts and science fair presentation graphics.', verificationStatus: 'PENDING', nextStepSuggestion: 'Build an interactive dashboard (Streamlit or Observable) to make the climate model accessible online.' },
    { id: 'ts-am-4', portfolioId: 'port-alexm', skillName: 'Git & Version Control', category: 'CODE', level: 3, evidenceNote: 'Maintained a structured GitHub repository with clear commit history throughout the AI project.', verificationStatus: 'VALIDATED', verifiedByName: 'Dr. Sarah Chen', verifiedAt: '2024-03-20', teacherComment: 'Good branching discipline and informative commit messages — evidence of professional habits.' },
  ],
  volunteering: mockVolunteering,
  badges: mockBadges,
  personality: mockPersonality,
  transcript: mockTranscript,
  gallery: mockGallery,
  awards: mockAwards,
  workExperience: mockWorkExperience,
  endorsements: mockEndorsements,

  pageViewCount: 247,
  totalVerifiedHours: 184,
  totalVerifiedSkills: 3,
};

export const mockSkillVerificationContext: SkillVerificationContext = {
  studentName: 'Alex M',
  schoolName: 'Safah British School',
  projectTitle: 'AI-Powered Waste Classification System',
  projectSummary: 'Developed a CNN achieving 94% accuracy in classifying recyclable materials, deployed as a mobile app.',
  skillName: 'Problem Solving',
  framework: 'SKILLS_BUILDER',
  stepNumber: 12,
  stepDescriptor: 'Breaks complex problems into manageable components and tests hypotheses systematically',
  evidenceStatement: 'When my first three CNN architectures failed to break 70% accuracy, I systematically diagnosed each failure by ablation testing — removing components one at a time to isolate what was and was not working.',
  mediaItems: mockProjects[0].mediaItems,
  requestedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  expiresAt: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
  alreadyResolved: false,
};

export const mockVolunteerVerificationContext: VolunteerVerificationContext = {
  studentName: 'Alex M',
  organisationName: 'Green Future Shanghai',
  role: 'Environmental Education Volunteer',
  startDate: '2022-06-01',
  hoursLogged: 120,
  description: 'Weekly environmental education sessions for primary school students in Pudong district.',
  impactStatement: 'Delivered 48 sessions reaching over 800 students.',
  requestedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  expiresAt: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000).toISOString(),
  alreadyResolved: false,
};

// ─── UAE Student — Omar Al-Rashidi ────────────────────────────────────────────
export const mockPortfolioUAE: PublicPortfolio = {
  slug: 'omara_gemswdxb',
  visibility: 'PUBLIC',
  moduleVisibility: { ...DEFAULT_MODULE_VISIBILITY },
  isPasswordProtected: false,

  firstName: 'Omar',
  lastInitial: 'A',
  gradeLevel: 12,
  graduationYear: 2025,
  schoolName: 'Meridian International School Dubai',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  coverImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85', // Dubai skyline

  // UAE: manual grade entry — predicted/actual AS & A2 equivalent
  gpaWeighted: undefined,
  gpaUnweighted: undefined,
  satSuperscore: undefined,  // British curriculum — no SAT
  actBest: undefined,
  // UAE-specific: MAP/CAT4/subject grades handled via transcript module

  projects: [
    {
      id: 'proj-uae-1', portfolioId: 'port-omara', academicYear: '2024-25', gradeLevel: 12,
      title: 'Desalination Efficiency Research', slug: 'desalination-research', category: 'RESEARCH',
      summary: 'Investigated low-energy desalination membranes in partnership with Khalifa University Water Research Lab. Proposed a 12% energy reduction model validated by simulation.',
      reflection: '<p>Working alongside PhD researchers as a high school student required me to quickly learn academic writing conventions and tolerate ambiguity — I rarely knew if my contribution was adding value until weeks later.</p>',
      mediaItems: [{ id: 'mu1', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800', caption: 'Lab session at Khalifa University', sortOrder: 0 }],
      links: [{ id: 'lu1', url: 'https://doi.org', title: 'Research Summary Paper', description: 'Co-authored research brief' }],
      skills: [{ skillId: 'suk1', skillName: 'Problem Solving', framework: 'SKILLS_BUILDER', stepNumber: 13, stepDescriptor: 'Synthesises experimental data into actionable recommendations', validationStatus: 'VALIDATED' }],
      softSkillDomains: ['Critical Thinking', 'Digital & Technical Literacy', 'Professionalism & Character'],
      startDate: '2024-09-01', endDate: '2025-04-01', isVisible: true, sortOrder: 0,
    },
    {
      id: 'proj-uae-2', portfolioId: 'port-omara', academicYear: '2023-24', gradeLevel: 11,
      title: 'Arabic Digital Literacy Programme', slug: 'arabic-digital-literacy', category: 'COMMUNITY',
      summary: 'Designed and delivered a 10-week digital literacy course for senior citizens at a Dubai community centre — entirely in Arabic.',
      reflection: '<p>Teaching grandparents to use WhatsApp safely was more technically demanding than I expected — not because of the technology, but because of trust-building and patience.</p>',
      mediaItems: [{ id: 'mu2', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', caption: 'Workshop in progress', sortOrder: 0 }],
      links: [],
      skills: [{ skillId: 'suk2', skillName: 'Communication', framework: 'SKILLS_BUILDER', stepNumber: 11, stepDescriptor: 'Adapts communication style to a non-technical audience', validationStatus: 'VALIDATED' }],
      softSkillDomains: ['Communication', 'Professionalism & Character', 'Teamwork & Collaboration'],
      startDate: '2023-10-01', endDate: '2024-03-30', isVisible: true, sortOrder: 0,
    },
  ],

  ecas: [
    { id: 'eca-uae-1', portfolioId: 'port-omara', academicYear: '2024-25', name: 'Model Arab League', category: 'DEBATE', role: 'Secretary-General', hoursPerWeek: 5, weeksActive: 30, totalHours: 150, description: 'Led 300-delegate regional conference hosted at GEMS Wellington.', achievements: 'Outstanding Delegation Award, Emirates MAL 2025.', isVisible: true, softSkillDomains: ['Leadership', 'Communication', 'Teamwork & Collaboration', 'Professionalism & Character'] },
    { id: 'eca-uae-2', portfolioId: 'port-omara', academicYear: '2024-25', name: 'Robotics Club', category: 'STEM', role: 'Lead Engineer', hoursPerWeek: 4, weeksActive: 28, totalHours: 112, description: 'Designed autonomous navigation system for FLL regional competition robot.', achievements: 'Regional Champions — UAE FLL 2024.', isVisible: true, softSkillDomains: ['Digital & Technical Literacy', 'Critical Thinking', 'Teamwork & Collaboration'] },
    { id: 'eca-uae-3', portfolioId: 'port-omara', academicYear: '2023-24', name: 'Community Iftar Initiative', category: 'COMMUNITY', role: 'Organiser', hoursPerWeek: 3, weeksActive: 4, totalHours: 48, description: 'Organised nightly community Iftar meals serving 200+ people during Ramadan in collaboration with local mosques.', achievements: 'Recognised by Dubai Municipality Social Impact Award.', isVisible: true, softSkillDomains: ['Professionalism & Character', 'Teamwork & Collaboration', 'Communication'] },
  ],

  skills: [
    { id: 'skill-uae-1', portfolioId: 'port-omara', projectId: 'proj-uae-1', framework: 'SKILLS_BUILDER', skillName: 'Problem Solving', stepNumber: 13, stepDescriptor: 'Synthesises complex data into actionable recommendations', evidenceStatement: 'Identified that the existing membrane flux model was over-simplifying boundary layer resistance. Proposed a corrected model that reduced simulated energy use by 12%.', validationStatus: 'VALIDATED', validatedByName: 'Dr. Fatima Al-Hashemi', validatedAt: '2025-04-10' },
    { id: 'skill-uae-2', portfolioId: 'port-omara', projectId: 'proj-uae-2', framework: 'SKILLS_BUILDER', skillName: 'Communication', stepNumber: 11, stepDescriptor: 'Adapts communication to audience needs', evidenceStatement: 'Rebuilt all course materials three times after feedback sessions showed initial version assumed too much prior knowledge.', validationStatus: 'VALIDATED', validatedByName: 'Ms. Sarah O\'Brien', validatedAt: '2024-04-05' },
  ],
  techSkills: [
    { id: 'ts-oa-1', portfolioId: 'port-omara', skillName: 'MATLAB / Simulation', category: 'ENGINEERING', level: 3, evidenceNote: 'Used MATLAB to model membrane boundary layer resistance and validate energy reduction figures.', verificationStatus: 'VALIDATED', verifiedByName: 'Dr. Fatima Al-Hashemi', verifiedAt: '2025-04-10', teacherComment: 'Omar uses simulation tools with real scientific purpose — not just following tutorials. His corrected model is publication-worthy.', nextStepSuggestion: 'Learn Python\'s SciPy stack to replicate MATLAB workflows in an open-source environment.' },
    { id: 'ts-oa-2', portfolioId: 'port-omara', skillName: 'Research & Data Analysis', category: 'DATA', level: 3, evidenceNote: 'Managed simulation data collection and prepared result summaries for the Khalifa University research team.', verificationStatus: 'VALIDATED', verifiedByName: 'Dr. Fatima Al-Hashemi', verifiedAt: '2025-04-10', teacherComment: 'Rigorous documentation of failed experiments — as valuable as the successes.' },
    { id: 'ts-oa-3', portfolioId: 'port-omara', skillName: 'LaTeX / Academic Writing', category: 'OTHER', level: 2, evidenceNote: 'Used LaTeX to format the co-authored research brief submitted to the lab.', verificationStatus: 'PENDING', nextStepSuggestion: 'Write a full methodology section for the desalination paper — aim for journal submission style.' },
  ],

  volunteering: [
    { id: 'vol-uae-1', portfolioId: 'port-omara', organisationName: 'Dubai Cares', role: 'Education Ambassador', supervisorName: 'Rania Khalil', supervisorEmail: 'r.khalil@dubaicares.ae', startDate: '2023-09-01', hoursLogged: 96, hoursVerified: 96, description: 'School outreach visits promoting global education access. Delivered presentations to 600+ students.', impactStatement: 'Inspired 40 students to sign up as junior fundraisers, raising AED 28,000 for school programmes in East Africa.', verificationStatus: 'VERIFIED', verifiedAt: '2024-06-01', isVisible: true },
  ],

  badges: [
    { id: 'badge-uae-1', portfolioId: 'port-omara', source: 'OPEN_BADGE', badgeName: 'Young Arab Leaders — Innovation Track', issuerName: 'YAL Foundation', imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=200', assertionUrl: 'https://www.yalfoundation.org/verify/example', earnedDate: '2024-11-15', verificationStatus: 'VERIFIED' },
  ],

  personality: {
    favouriteQuote: 'Water is life\'s matter and matrix, mother and medium. There is no life without water.',
    quoteAttribution: 'Albert von Szent-Györgyi',
    shortBio: "Hi, I'm Omar — a Year 12 student at Meridian International School Dubai. Water is what drives me: I spent this year as a research intern at Khalifa University's Water Research Lab, working alongside PhD researchers on desalination membrane technology, and I genuinely believe solving water scarcity is one of the most important engineering challenges of our generation. Outside the lab, I led our school's Model Arab League conference with 300 delegates and built the autonomous navigation system that took our robotics team to the regional FLL championship. I speak Arabic and English, and I'm applying to study Environmental Engineering.",
    ambitionStatement: 'Engineer water security solutions for arid regions — and make them affordable enough to deploy at village scale.',
    targetMajor: 'Environmental Engineering',
    dreamUniversity: 'ETH Zürich',
    languagesSpoken: [
      { language: 'Arabic', proficiency: 'NATIVE' },
      { language: 'English', proficiency: 'FLUENT' },
      { language: 'French', proficiency: 'BASIC' },
    ],
    hometown: 'Dubai, UAE',
    funFact: 'Can recite the periodic table in Arabic and once represented Dubai in a regional falconry competition.',
    favouriteBook: 'Dune — Frank Herbert',
  },

  curriculumType: 'IGCSE_ALEVELS',

  transcript: [
    {
      academicYear: '2024-25', gradeLevel: 12, curriculum: 'IGCSE_ALEVELS',
      notes: 'A-Level Year 2 — Predicted grades',
      subjects: [
        { subjectName: 'Mathematics (A-Level)',         grade: 'A*', gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Mr. Thompson' },
        { subjectName: 'Physics (A-Level)',             grade: 'A',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Dr. Al-Hashemi' },
        { subjectName: 'Chemistry (A-Level)',           grade: 'A',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: false },
        { subjectName: 'Further Mathematics (AS)',      grade: 'A',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: false },
      ],
      assessments: [
        { id: 'oas1', assessmentType: 'CAT4', name: 'CAT4 Level F (Jan 2025)', attemptDate: '2025-01', score: 'SAS 118', subscores: { 'Verbal': 8, 'Quantitative': 9, 'Non-verbal': 8, 'Spatial': 7 }, isVerified: true },
        { id: 'oas2', assessmentType: 'MAP',  name: 'MAP Math (Spring 2025)', attemptDate: '2025-03', score: 248, maxScore: 285, percentile: 94, isVerified: true },
      ],
    },
    {
      academicYear: '2023-24', gradeLevel: 11, curriculum: 'IGCSE_ALEVELS',
      notes: 'AS Level Year 1',
      subjects: [
        { subjectName: 'Mathematics (AS)',    grade: 'A', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: true,  verifiedByName: 'Mr. Thompson' },
        { subjectName: 'Physics (AS)',        grade: 'A', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: true,  verifiedByName: 'Dr. Al-Hashemi' },
        { subjectName: 'Chemistry (AS)',      grade: 'B', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: true,  verifiedByName: 'Ms. O\'Brien' },
        { subjectName: 'Further Maths (AS)', grade: 'A', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: false },
      ],
      assessments: [
        { id: 'oas3', assessmentType: 'CAT4', name: 'CAT4 Level E (Sep 2023)', attemptDate: '2023-09', score: 'SAS 112', subscores: { 'Verbal': 7, 'Quantitative': 9, 'Non-verbal': 8, 'Spatial': 6 }, isVerified: false },
        { id: 'oas4', assessmentType: 'MAP',  name: 'MAP Math (Autumn 2023)', attemptDate: '2023-11', score: 241, maxScore: 285, percentile: 89, isVerified: false },
      ],
    },
  ],

  gallery: [
    { id: 'og1', portfolioId: 'port-omara', type: 'PHOTO',    title: 'Khalifa University Research Lab', description: 'Working with the desalination membrane team, April 2025.', academicYear: '2024-25', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800', sortOrder: 0, createdAt: '2025-04-10' },
    { id: 'og2', portfolioId: 'port-omara', type: 'DOCUMENT', title: 'UAE FLL Regional Champions Certificate', description: 'First place, UAE FIRST Lego League 2024.', academicYear: '2024-25', url: '#', fileType: 'PDF', fileSizeKb: 210, sortOrder: 1, createdAt: '2025-01-20' },
    { id: 'og3', portfolioId: 'port-omara', type: 'LINK',     title: 'Co-authored Research Brief — Desalination Membranes', description: 'Summary paper submitted to Khalifa University Water Research Lab.', url: 'https://doi.org', sortOrder: 2, createdAt: '2025-04-15' },
    { id: 'og4', portfolioId: 'port-omara', type: 'ESSAY',    title: 'UCAS Personal Statement', description: 'Engineering programme application statement.', academicYear: '2024-25', url: '#', fileType: 'PDF', fileSizeKb: 92, sortOrder: 3, createdAt: '2025-05-01' },
  ],

  awards: [
    { id: 'oaw1', portfolioId: 'port-omara', title: 'UAE FLL Regional Champions', awardingBody: 'FIRST Lego League UAE', academicYear: '2024-25', gradeLevel: 12, level: 'LOCAL', category: 'STEM', description: 'Autonomous navigation robot — regional champions from 28 teams.', placement: '1st Place', isVisible: true },
    { id: 'oaw2', portfolioId: 'port-omara', title: 'Dubai Municipality Social Impact Award', awardingBody: 'Dubai Municipality', academicYear: '2023-24', gradeLevel: 11, level: 'LOCAL', category: 'SERVICE', description: 'Recognised for the Community Iftar Initiative serving 200+ people nightly during Ramadan.', placement: 'Recipient', isVisible: true },
  ],

  workExperience: [
    { id: 'owe1', portfolioId: 'port-omara', employerName: 'Khalifa University — Water Research Lab', role: 'Research Intern', employerType: 'RESEARCH_LAB', startDate: '2024-09-01', endDate: '2025-04-30', isCurrent: false, hoursPerWeek: 6, description: 'Assisted postdoctoral researchers in testing novel desalination membrane composites. Managed data collection from simulation runs and prepared result summaries for the research team.', keyLearning: 'Real research involves far more failed experiments than successful ones — learning to document failure rigorously was as important as any result we found.', supervisorName: 'Dr. Fatima Al-Hashemi', verificationStatus: 'VERIFIED', verifiedAt: '2025-05-02', isVisible: true },
  ],

  endorsements: [
    { id: 'oend1', portfolioId: 'port-omara', teacherName: 'Dr. Fatima Al-Hashemi', teacherSubject: 'Environmental Engineering', attribute: 'Research Rigour', endorsementText: 'Omar joined our lab as one of the youngest interns we have hosted. What distinguished him immediately was his refusal to accept ambiguous results — he would re-run experiments and seek alternative explanations with the persistence of a doctoral student. His proposed correction to our boundary layer resistance model reduced simulated energy consumption by 12%, a contribution that will appear in our next publication.', isVisible: true },
  ],

  pageViewCount: 183,
  totalVerifiedHours: 96,
  totalVerifiedSkills: 2,
};

// ─── Beijing Student — Li Wei ─────────────────────────────────────────────────
export const mockPortfolioBeijing: PublicPortfolio = {
  slug: 'liwein_isb',
  visibility: 'PUBLIC',
  moduleVisibility: { ...DEFAULT_MODULE_VISIBILITY },
  isPasswordProtected: false,

  firstName: 'Li',
  lastInitial: 'W',
  gradeLevel: 10,
  graduationYear: 2027,
  schoolName: 'International School of Beijing',
  avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
  coverImageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&q=85', // Beijing aerial

  gpaWeighted: 3.95,
  gpaUnweighted: 3.75,
  satSuperscore: undefined, // Grade 10 — too early
  actBest: undefined,

  projects: [
    {
      id: 'proj-bj-1', portfolioId: 'port-liwein', academicYear: '2024-25', gradeLevel: 10,
      title: 'Air Quality Monitoring Network — Haidian District', slug: 'air-quality-haidian', category: 'RESEARCH',
      summary: 'Built a low-cost IoT sensor network across 8 locations in Haidian to map hyperlocal PM2.5 variation. Data published openly for community use.',
      reflection: '<p>Convincing local shops to host our sensors required more persuasion than building the sensors. I learned that community trust is the hardest engineering problem.</p>',
      mediaItems: [{ id: 'mbj1', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', caption: 'Sensor installation', sortOrder: 0 }],
      links: [{ id: 'lbj1', url: 'https://github.com', title: 'Open Data Repository', description: 'Live PM2.5 dashboard' }],
      skills: [{ skillId: 'sbk1', skillName: 'Problem Solving', framework: 'SKILLS_BUILDER', stepNumber: 10, stepDescriptor: 'Designs systematic approaches to community-scale problems', validationStatus: 'VALIDATED' }],
      softSkillDomains: ['Critical Thinking', 'Digital & Technical Literacy', 'Creativity & Innovation'],
      startDate: '2024-09-01', endDate: '2025-05-01', isVisible: true, sortOrder: 0,
    },
    {
      id: 'proj-bj-2', portfolioId: 'port-liwein', academicYear: '2023-24', gradeLevel: 9,
      title: 'Mandarin Calligraphy — Digital Archive', slug: 'calligraphy-archive', category: 'CREATIVE',
      summary: 'Photographed and digitally catalogued 340 historical calligraphy pieces from a private Beijing collection, creating a searchable web archive.',
      reflection: '<p>Balancing technical precision with aesthetic sensitivity taught me that data and beauty are not opposites.</p>',
      mediaItems: [{ id: 'mbj2', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800', caption: 'Digitisation process', sortOrder: 0 }],
      links: [],
      skills: [{ skillId: 'sbk2', skillName: 'Creativity', framework: 'SKILLS_BUILDER', stepNumber: 8, stepDescriptor: 'Brings original vision to a constrained creative brief', validationStatus: 'PENDING' }],
      softSkillDomains: ['Creativity & Innovation', 'Professionalism & Character'],
      startDate: '2023-10-01', endDate: '2024-06-01', isVisible: true, sortOrder: 0,
    },
  ],

  ecas: [
    { id: 'eca-bj-1', portfolioId: 'port-liwein', academicYear: '2024-25', name: 'ISB Debate Society', category: 'DEBATE', role: 'Vice President', hoursPerWeek: 3, weeksActive: 32, totalHours: 96, description: 'Competitive British Parliamentary debate. Represented ISB at BEIMUN and BJMUN conferences.', achievements: 'Best Speaker — BJMUN 2025.', isVisible: true, softSkillDomains: ['Communication', 'Critical Thinking', 'Leadership'] },
    { id: 'eca-bj-2', portfolioId: 'port-liwein', academicYear: '2024-25', name: 'National Youth Science Fair', category: 'STEM', role: 'Competitor', hoursPerWeek: 6, weeksActive: 20, totalHours: 120, description: 'Entered air quality project in national competition alongside 400+ teams.', achievements: 'Provincial Second Prize — Beijing Youth Science Innovation 2025.', isVisible: true, softSkillDomains: ['Critical Thinking', 'Resilience & Growth Mindset', 'Digital & Technical Literacy'] },
    { id: 'eca-bj-3', portfolioId: 'port-liwein', academicYear: '2023-24', name: 'School Chamber Orchestra', category: 'MUSIC', role: 'Cellist', hoursPerWeek: 4, weeksActive: 35, totalHours: 140, description: 'Performed in Beijing concert halls including Zhongshan Music Hall. Toured to Hong Kong.', achievements: 'Grade 7 ABRSM Cello — Distinction.', isVisible: true, softSkillDomains: ['Teamwork & Collaboration', 'Resilience & Growth Mindset'] },
  ],

  skills: [
    { id: 'skill-bj-1', portfolioId: 'port-liwein', projectId: 'proj-bj-1', framework: 'SKILLS_BUILDER', skillName: 'Problem Solving', stepNumber: 10, stepDescriptor: 'Designs systematic approaches to complex, multi-variable problems', evidenceStatement: 'After our first placement of sensors showed inconsistent readings, I designed a calibration protocol comparing against the official Beijing MEP monitoring station — this validated our data accuracy to within 8%.', validationStatus: 'VALIDATED', validatedByName: 'Ms. Jennifer Park', validatedAt: '2025-05-01' },
  ],
  techSkills: [
    { id: 'ts-lw-1', portfolioId: 'port-liwein', skillName: 'Python / IoT', category: 'CODE', level: 3, evidenceNote: 'Programmed Raspberry Pi sensors to log PM2.5 data and push to a live dashboard.', verificationStatus: 'VALIDATED', verifiedByName: 'Ms. Jennifer Park', verifiedAt: '2025-05-01', teacherComment: 'Li Wei\'s sensor calibration methodology was particularly impressive — she designed her own validation process rather than accepting default readings.', nextStepSuggestion: 'Learn data pipeline tools (Kafka or MQTT) to stream live sensor data more reliably at scale.' },
    { id: 'ts-lw-2', portfolioId: 'port-liwein', skillName: 'Arduino / Hardware', category: 'ENGINEERING', level: 2, evidenceNote: 'Assembled and tested the PM2.5 sensor hardware across 8 Haidian locations.', verificationStatus: 'PENDING', nextStepSuggestion: 'Design a custom PCB for the next iteration to reduce sensor size and improve weatherproofing.' },
    { id: 'ts-lw-3', portfolioId: 'port-liwein', skillName: 'Data Dashboard (Web)', category: 'CODE', level: 2, evidenceNote: 'Built a public-facing dashboard showing live air quality across the 8 sensor locations.', verificationStatus: 'VALIDATED', verifiedByName: 'Ms. Jennifer Park', verifiedAt: '2025-05-01', teacherComment: 'Clean, readable UI — good instinct for presenting data accessibly to a non-technical audience.' },
  ],

  volunteering: [
    { id: 'vol-bj-1', portfolioId: 'port-liwein', organisationName: 'Haidian Community Library', role: 'English Conversation Tutor', supervisorName: 'Wang Fang', supervisorEmail: 'wfang@haidian-lib.cn', startDate: '2023-09-01', hoursLogged: 72, hoursVerified: 72, description: 'Weekly English conversation practice sessions for adults preparing for IELTS.', impactStatement: 'All 6 of my regular students improved their IELTS speaking band by at least 0.5 in follow-up tests.', verificationStatus: 'VERIFIED', verifiedAt: '2024-06-15', isVisible: true },
  ],

  badges: [
    { id: 'badge-bj-1', portfolioId: 'port-liwein', source: 'OPEN_BADGE', badgeName: 'Duke of Edinburgh Bronze Award', issuerName: 'The Duke of Edinburgh\'s International Award', imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=200', assertionUrl: 'https://www.dofe.org/verify/example', earnedDate: '2024-07-01', verificationStatus: 'VERIFIED' },
  ],

  personality: {
    favouriteQuote: 'Study hard what interests you the most, in the most undisciplined, irreverent and original manner possible.',
    quoteAttribution: 'Richard Feynman',
    shortBio: "Hi, I'm Li Wei — a Grade 10 student at the International School of Beijing. I care a lot about the air people breathe, which is why I spent last year building a network of IoT sensors across eight locations in my neighbourhood to map hyperlocal pollution levels — data I've now made publicly available. When I'm not doing that, I'm playing cello (since I was five), debating competitively in English and Mandarin, or digitising historical calligraphy collections for a searchable web archive. I tend to find the most interesting problems at the edge of two disciplines that aren't supposed to talk to each other.",
    ambitionStatement: 'Use data science to give communities real-time visibility of environmental risks — starting with air quality in Chinese cities.',
    targetMajor: 'Environmental Data Science',
    dreamUniversity: 'University of Cambridge',
    languagesSpoken: [
      { language: 'Mandarin', proficiency: 'NATIVE' },
      { language: 'English', proficiency: 'FLUENT' },
      { language: 'Japanese', proficiency: 'BASIC' },
    ],
    hometown: 'Beijing, China',
    funFact: 'Has played the cello since age 5, and once sight-read a Dvorak concerto movement 10 minutes before a concert because the scheduled cellist fell ill.',
    favouriteBook: 'Invisible Cities — Italo Calvino',
  },

  curriculumType: 'AP',

  transcript: [
    {
      academicYear: '2024-25', gradeLevel: 10, curriculum: 'AP',
      gpaWeighted: 3.95, gpaUnweighted: 3.75,
      notes: 'Grade 10 — 2 AP courses',
      subjects: [
        { subjectName: 'AP Computer Science Principles', grade: 'A',  gradeType: 'LETTER', isPredicted: false, isVerified: true, verifiedByName: 'Ms. Jennifer Park', apScore: 5 },
        { subjectName: 'AP Chinese Language',            grade: 'A+', gradeType: 'LETTER', isPredicted: false, isVerified: false, apScore: 5 },
        { subjectName: 'Honors Biology',                 grade: 'A-', gradeType: 'LETTER', isPredicted: false, isVerified: false },
        { subjectName: 'Pre-Calculus',                   grade: 'A',  gradeType: 'LETTER', isPredicted: false, isVerified: false },
        { subjectName: 'English 10',                     grade: 'B+', gradeType: 'LETTER', isPredicted: false, isVerified: false },
      ],
      assessments: [
        { id: 'lws1', assessmentType: 'PSAT', name: 'PSAT 10 (Apr 2025)', attemptDate: '2025-04-09', score: 1310, maxScore: 1520, subscores: { 'Reading & Writing': 650, 'Math': 660 }, isVerified: false },
      ],
    },
  ],

  gallery: [
    { id: 'lg1', portfolioId: 'port-liwein', type: 'PHOTO',    title: 'IoT Sensor Installation — Haidian', description: 'Deploying PM2.5 sensor at a local shop, October 2024.', academicYear: '2024-25', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', sortOrder: 0, createdAt: '2024-10-15' },
    { id: 'lg2', portfolioId: 'port-liwein', type: 'PHOTO',    title: 'Calligraphy Archive — Digitisation Session', description: 'Photographing pieces from the private collection for the web archive.', academicYear: '2023-24', url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800', sortOrder: 1, createdAt: '2024-03-10' },
    { id: 'lg3', portfolioId: 'port-liwein', type: 'LINK',     title: 'Open PM2.5 Data Dashboard', description: 'Live air quality data across 8 Haidian locations, updated hourly.', url: 'https://github.com', sortOrder: 2, createdAt: '2025-01-20' },
    { id: 'lg4', portfolioId: 'port-liwein', type: 'ESSAY',    title: 'UKCAT Practice Essay — Environmental Justice', description: 'Extended writing piece on technology and equitable access to environmental data.', academicYear: '2024-25', url: '#', fileType: 'PDF', fileSizeKb: 74, sortOrder: 3, createdAt: '2025-03-01' },
  ],

  awards: [
    { id: 'law1', portfolioId: 'port-liwein', title: 'Provincial Second Prize — Youth Science Innovation', awardingBody: 'Beijing Education Commission', academicYear: '2024-25', gradeLevel: 10, level: 'LOCAL', category: 'STEM', description: 'Air quality IoT network project \u2014 second place from 400+ competing teams across Beijing.', placement: '2nd Place', isVisible: true },
    { id: 'law2', portfolioId: 'port-liwein', title: 'Best Speaker — BJMUN 2025', awardingBody: 'Beijing Model United Nations', academicYear: '2024-25', gradeLevel: 10, level: 'LOCAL', category: 'LEADERSHIP', description: 'Awarded Best Speaker in the Environmental Committee.', placement: 'Best Speaker', isVisible: true },
  ],

  workExperience: [],

  endorsements: [
    { id: 'lend1', portfolioId: 'port-liwein', teacherName: 'Ms. Jennifer Park', teacherSubject: 'Computer Science', attribute: 'Intellectual Initiative', endorsementText: 'Li Wei is the kind of student who does not wait to be taught — she identifies problems, researches solutions, and returns to class with questions that push the entire cohort forward. Her air quality monitoring project was conceived entirely independently during the summer holidays. The calibration methodology she designed to validate sensor accuracy against official government monitoring stations showed a level of scientific rigour that I would expect from a third-year undergraduate.', isVisible: true },
  ],

  pageViewCount: 94,
  totalVerifiedHours: 72,
  totalVerifiedSkills: 1,
};


// ─── Maya B. — UAE / British GCSE ────────────────────────────────────────────
export const mockPortfolioGCSE: PublicPortfolio = {
  slug: 'mayab_kcsdxb',
  visibility: 'PUBLIC',
  moduleVisibility: { ...DEFAULT_MODULE_VISIBILITY },
  isPasswordProtected: false,

  firstName: 'Maya',
  lastInitial: 'B',
  gradeLevel: 11,            // Year 11 — sitting GCSEs this cycle
  graduationYear: 2026,
  schoolName: 'Kings\' School Dubai',
  avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
  coverImageUrl: 'https://images.unsplash.com/photo-1548813395-b37be6d41e14?w=1600&q=85', // Dubai architecture dusk

  // British curriculum: no GPA, no SAT
  gpaWeighted:   undefined,
  gpaUnweighted: undefined,
  satSuperscore: undefined,
  actBest:       undefined,

  curriculumType: 'IGCSE_ALEVELS',

  projects: [
    {
      id: 'proj-gcse-1', portfolioId: 'port-mayab', academicYear: '2024-25', gradeLevel: 11,
      title: 'Rewear Dubai — Circular Fashion Campaign', slug: 'rewear-dubai', category: 'COMMUNITY',
      summary: 'Founded a student-led secondhand clothing initiative that collected 1,200+ garments, partnered with two Dubai charities, and reached 3 schools. Raised AED 14,000 reinvested into community projects.',
      reflection: '<p>I underestimated how difficult it would be to change people\'s habits around fast fashion. The breakthrough came when I reframed the message: instead of guilt, I led with identity — "wear your story". Donations tripled in two weeks.</p>',
      mediaItems: [
        { id: 'mgcse1', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800', caption: 'Rewear pop-up at Kings\' School', sortOrder: 0 },
        { id: 'mgcse2', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800', caption: 'Charity handover, March 2025', sortOrder: 1 },
      ],
      links: [{ id: 'lgcse1', url: 'https://instagram.com', title: 'Rewear Dubai Instagram', description: 'Campaign page — 2,400 followers' }],
      skills: [
        { skillId: 'sgcse1', skillName: 'Leadership', framework: 'SKILLS_BUILDER', stepNumber: 10, stepDescriptor: 'Builds and sustains a team towards a shared goal', validationStatus: 'VALIDATED' },
        { skillId: 'sgcse2', skillName: 'Creativity', framework: 'SKILLS_BUILDER', stepNumber: 9,  stepDescriptor: 'Reframes problems to unlock new audiences', validationStatus: 'VALIDATED' },
      ],
      startDate: '2024-10-01', endDate: '2025-04-30', isVisible: true, sortOrder: 0,
      softSkillDomains: ['Leadership', 'Creativity & Innovation', 'Communication', 'Professionalism & Character'],
    },
    {
      id: 'proj-gcse-2', portfolioId: 'port-mayab', academicYear: '2023-24', gradeLevel: 10,
      title: 'Illustrated Field Guide — UAE Coastal Birds', slug: 'uae-birds-field-guide', category: 'CREATIVE',
      summary: 'Created a 40-page illustrated field guide to 18 UAE coastal bird species in collaboration with the Emirates Bird Records Committee. Self-published digitally and distributed to 6 Dubai schools.',
      reflection: '<p>Scientific illustration forced me to be obsessively accurate — every feather, every proportion — while still making the page inviting. It taught me that art and rigour are not enemies.</p>',
      mediaItems: [{ id: 'mgcse3', type: 'IMAGE', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800', caption: 'Field guide sample pages', sortOrder: 0 }],
      links: [{ id: 'lgcse2', url: 'https://issuu.com', title: 'Digital Edition', description: 'Full guide on Issuu — 1,800 reads' }],
      skills: [{ skillId: 'sgcse3', skillName: 'Creativity', framework: 'SKILLS_BUILDER', stepNumber: 11, stepDescriptor: 'Produces original work combining scientific and aesthetic rigour', validationStatus: 'VALIDATED' }],
      startDate: '2023-09-01', endDate: '2024-05-15', isVisible: true, sortOrder: 1,
      softSkillDomains: ['Creativity & Innovation', 'Critical Thinking', 'Professionalism & Character'],
    },
  ],

  ecas: [
    { id: 'eca-gcse-1', portfolioId: 'port-mayab', academicYear: '2024-25', name: 'Kings\' School Arts Council', category: 'ARTS', role: 'Chair', hoursPerWeek: 4, weeksActive: 32, totalHours: 128, description: 'Led a 14-member arts council organising 3 school exhibitions, securing a visiting artist residency, and launching a student arts magazine.', achievements: 'School arts magazine reached 500+ readers across 4 schools in its first term.', isVisible: true, softSkillDomains: ['Leadership', 'Creativity & Innovation', 'Communication', 'Teamwork & Collaboration'] },
    { id: 'eca-gcse-2', portfolioId: 'port-mayab', academicYear: '2024-25', name: 'Duke of Edinburgh Gold — Expedition', category: 'OTHER', role: 'Participant', hoursPerWeek: 3, weeksActive: 24, totalHours: 72, description: 'Completing DofE Gold award: skill (textiles), volunteering (coastal clean-up), physical (swimming), and a 4-day qualifying expedition in Oman.', achievements: 'Qualifying expedition completed — Hajar Mountains, February 2025.', isVisible: true, softSkillDomains: ['Resilience & Growth Mindset', 'Professionalism & Character'] },
    { id: 'eca-gcse-3', portfolioId: 'port-mayab', academicYear: '2023-24', name: 'Eco Action Team', category: 'COMMUNITY', role: 'Co-Founder', hoursPerWeek: 2, weeksActive: 36, totalHours: 72, description: 'Co-founded school sustainability team. Led a single-use plastic audit across the school canteen, resulting in 3 policy changes adopted by the school.', achievements: 'School plastic audit cited in GEMS sustainability network report.', isVisible: true, softSkillDomains: ['Leadership', 'Critical Thinking', 'Professionalism & Character'] },
    { id: 'eca-gcse-4', portfolioId: 'port-mayab', academicYear: '2023-24', name: 'LAMDA Acting', category: 'ARTS', role: 'Student', hoursPerWeek: 2, weeksActive: 30, totalHours: 60, description: 'Graded acting examinations through LAMDA (London Academy of Music & Dramatic Art).', achievements: 'LAMDA Grade 8 Acting — Distinction.', isVisible: true, softSkillDomains: ['Communication', 'Resilience & Growth Mindset'] },
  ],

  skills: [
    { id: 'skill-gcse-1', portfolioId: 'port-mayab', projectId: 'proj-gcse-1', framework: 'SKILLS_BUILDER', skillName: 'Leadership', stepNumber: 10, stepDescriptor: 'Builds and sustains a team through a complex, multi-phase initiative', evidenceStatement: 'Running Rewear Dubai required coordinating volunteers across 3 schools with no shared timetable. I built a WhatsApp-based operations system with weekly check-in summaries and clear role ownership — volunteer retention over 6 months was 80%.', validationStatus: 'VALIDATED', validatedByName: 'Ms. Claire Bennett', validatedAt: '2025-05-01' },
    { id: 'skill-gcse-2', portfolioId: 'port-mayab', projectId: 'proj-gcse-2', framework: 'SKILLS_BUILDER', skillName: 'Creativity', stepNumber: 11, stepDescriptor: 'Produces original work that blends scientific precision with aesthetic impact', evidenceStatement: 'Each species illustration required cross-referencing 4–6 photographic references and published ornithological descriptions to achieve anatomical accuracy while maintaining a visual style accessible to non-specialists. The Emirates Bird Records Committee reviewed and endorsed all 18 species plates.', validationStatus: 'VALIDATED', validatedByName: 'Mr. David Holt', validatedAt: '2024-05-20' },
  ],
  techSkills: [
    { id: 'ts-mb-1', portfolioId: 'port-mayab', skillName: 'Adobe Illustrator', category: 'DESIGN', level: 4, evidenceNote: 'Created all 18 species illustrations for the UAE Coastal Birds field guide — each reviewed and endorsed by the Emirates Bird Records Committee.', verificationStatus: 'VALIDATED', verifiedByName: 'Ms. Sarah Obi', verifiedAt: '2024-05-20', teacherComment: 'Maya\'s Illustrator work is at a professional standard. The scientific accuracy combined with visual accessibility is genuinely rare in a student her age.', nextStepSuggestion: 'Explore motion design — animating your illustrated work could extend its educational reach significantly.' },
    { id: 'ts-mb-2', portfolioId: 'port-mayab', skillName: 'InDesign / Layout', category: 'DESIGN', level: 3, evidenceNote: 'Laid out the full 40-page field guide including typography, colour system, and print-ready export.', verificationStatus: 'VALIDATED', verifiedByName: 'Ms. Sarah Obi', verifiedAt: '2024-05-20', teacherComment: 'Strong typographic instinct and consistent grid usage throughout.' },
    { id: 'ts-mb-3', portfolioId: 'port-mayab', skillName: 'Sustainable Design Principles', category: 'ENGINEERING', level: 2, evidenceNote: 'Researched LEED materials and assisted with client presentation boards during internship at Studio Caramel.', verificationStatus: 'PENDING', nextStepSuggestion: 'Complete the RIBA sustainable design primer and apply its framework to a speculative project brief.' },
    { id: 'ts-mb-4', portfolioId: 'port-mayab', skillName: 'Social Media & Campaign Design', category: 'DESIGN', level: 3, evidenceNote: 'Grew the Rewear Dubai Instagram to 2,400 followers through consistent visual identity and storytelling.', verificationStatus: 'VALIDATED', verifiedByName: 'Ms. Claire Bennett', verifiedAt: '2025-05-01', teacherComment: 'Maya demonstrates a strong understanding of how visual design shapes audience behaviour — the campaign metrics prove it.' },
  ],

  volunteering: [
    { id: 'vol-gcse-1', portfolioId: 'port-mayab', organisationName: 'Emirates Environmental Group', role: 'Coastal Clean-Up Coordinator', supervisorName: 'Laila Al-Mansoori', supervisorEmail: 'laila@eeg.ae', startDate: '2023-11-01', hoursLogged: 88, hoursVerified: 88, description: 'Organised and led 11 coastal clean-up events at Jumeirah Beach, coordinating 20–40 volunteers per session.', impactStatement: 'Removed 340kg of plastic waste across 11 events. Initiative featured in Gulf News Environment section.', verificationStatus: 'VERIFIED', verifiedAt: '2025-03-15', isVisible: true },
    { id: 'vol-gcse-2', portfolioId: 'port-mayab', organisationName: 'Art Therapy UAE', role: 'Junior Workshop Facilitator', supervisorName: 'Dr. Nour Hamdan', supervisorEmail: 'nour@arttherapy.ae', startDate: '2024-01-15', hoursLogged: 48, hoursVerified: 48, description: 'Assisted certified therapists in art-based sessions for children with learning differences at a Dubai community centre.', impactStatement: 'Supported 24 children over 12 weekly sessions. Developed 3 original workshop activities now used by the therapy team.', verificationStatus: 'VERIFIED', verifiedAt: '2025-01-20', isVisible: true },
  ],

  badges: [
    { id: 'badge-gcse-1', portfolioId: 'port-mayab', source: 'OPEN_BADGE', badgeName: 'Duke of Edinburgh Gold — In Progress', issuerName: 'The Duke of Edinburgh\'s International Award', imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=200', assertionUrl: 'https://www.dofe.org/verify/example', earnedDate: '2025-04-01', verificationStatus: 'SELF_REPORTED' },
    { id: 'badge-gcse-2', portfolioId: 'port-mayab', source: 'OPEN_BADGE', badgeName: 'LAMDA Grade 8 Acting — Distinction', issuerName: 'London Academy of Music & Dramatic Art', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', assertionUrl: 'https://www.lamda.ac.uk/verify/example', earnedDate: '2024-06-10', verificationStatus: 'VERIFIED' },
  ],

  personality: {
    favouriteQuote: 'The earth does not belong to us. We belong to the earth.',
    quoteAttribution: 'Chief Seattle',
    shortBio: "Hi, I'm Maya — a Year 11 student at Kings' School Dubai, sitting my GCSEs this summer. I care deeply about the natural world, and most of what I do is some combination of art and environmental action: I founded Rewear Dubai, a circular fashion campaign that's collected over 1,200 garments for charity across three schools, and I spent a year creating an illustrated field guide to UAE coastal birds that's now in six schools across the city. I also interned at a sustainable architecture studio last summer, which taught me that good design is always part idealism and part pragmatism. Outside of all that, I'm working towards my DofE Gold and I recently got a Distinction in my LAMDA Grade 8 Acting exam.",
    ambitionStatement: 'Blend design, ecology, and storytelling to communicate the environmental crisis in ways that move people to act — not just understand.',
    targetMajor: 'Environmental Art & Design / Sustainable Architecture',
    languagesSpoken: [
      { language: 'English',  proficiency: 'NATIVE' },
      { language: 'Arabic',   proficiency: 'CONVERSATIONAL' },
      { language: 'French',   proficiency: 'CONVERSATIONAL' },
    ],
    hometown: 'Dubai, UAE',
    funFact: 'Once spent a weekend illustrating a single flamingo feather in 1:1 scale — it took 14 hours and she considers it her best work.',
    favouriteBook: 'Braiding Sweetgrass — Robin Wall Kimmerer',
  },

  // GCSE Transcript — predicted grades, no GPA, no SAT
  transcript: [
    {
      academicYear: '2024-25', gradeLevel: 11, curriculum: 'IGCSE_ALEVELS',
      notes: 'GCSE Year 11 — Predicted Grades (Summer 2025 examinations)',
      subjects: [
        { subjectName: 'English Language (GCSE)',        grade: '9',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Ms. Claire Bennett' },
        { subjectName: 'English Literature (GCSE)',      grade: '8',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Ms. Claire Bennett' },
        { subjectName: 'Mathematics (GCSE)',             grade: '7',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Mr. Patel' },
        { subjectName: 'Biology (GCSE)',                 grade: '8',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: false },
        { subjectName: 'Geography (GCSE)',               grade: '9',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Mr. David Holt' },
        { subjectName: 'Art & Design (GCSE)',            grade: '9',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: true,  verifiedByName: 'Ms. Sarah Obi' },
        { subjectName: 'French (GCSE)',                  grade: '7',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: false },
        { subjectName: 'History (GCSE)',                 grade: '8',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: false },
        { subjectName: 'Design & Technology (GCSE)',     grade: '8',  gradeType: 'IGCSE_GRADE', isPredicted: true,  isVerified: false },
      ],
      assessments: [
        { id: 'gcse-as1', assessmentType: 'CAT4', name: 'CAT4 Level E (Sep 2024)', attemptDate: '2024-09', score: 'SAS 109', subscores: { 'Verbal': 8, 'Quantitative': 6, 'Non-verbal': 7, 'Spatial': 8 }, isVerified: true },
      ],
    },
    {
      academicYear: '2023-24', gradeLevel: 10, curriculum: 'IGCSE_ALEVELS',
      notes: 'GCSE Year 10 — Internal Assessment Grades',
      subjects: [
        { subjectName: 'English Language (GCSE)',    grade: '8', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: true,  verifiedByName: 'Ms. Claire Bennett' },
        { subjectName: 'Mathematics (GCSE)',         grade: '7', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: false },
        { subjectName: 'Art & Design (GCSE)',        grade: '9', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: true,  verifiedByName: 'Ms. Sarah Obi' },
        { subjectName: 'Geography (GCSE)',           grade: '8', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: false },
        { subjectName: 'Biology (GCSE)',             grade: '7', gradeType: 'IGCSE_GRADE', isPredicted: false, isVerified: false },
      ],
      assessments: [],
    },
  ],

  gallery: [
    { id: 'gcse-g1', portfolioId: 'port-mayab', type: 'PHOTO',    title: 'Rewear Dubai — Pop-Up Event', description: 'Campaign launch at Kings\' School, October 2024.', academicYear: '2024-25', url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800', sortOrder: 0, createdAt: '2024-10-15' },
    { id: 'gcse-g2', portfolioId: 'port-mayab', type: 'PHOTO',    title: 'UAE Coastal Birds — Field Guide Spread', description: 'Sample illustration spread from the 40-page field guide.', academicYear: '2023-24', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800', sortOrder: 1, createdAt: '2024-04-20' },
    { id: 'gcse-g3', portfolioId: 'port-mayab', type: 'LINK',     title: 'Rewear Dubai — Instagram Campaign', description: 'Campaign social presence — 2,400 followers.', url: 'https://instagram.com', sortOrder: 2, createdAt: '2024-10-01' },
    { id: 'gcse-g4', portfolioId: 'port-mayab', type: 'DOCUMENT', title: 'LAMDA Grade 8 Acting — Distinction Certificate', description: 'Verified certificate from London Academy of Music & Dramatic Art.', academicYear: '2023-24', url: '#', fileType: 'PDF', fileSizeKb: 180, sortOrder: 3, createdAt: '2024-06-10' },
    { id: 'gcse-g5', portfolioId: 'port-mayab', type: 'ESSAY',    title: 'GCSE Geography Extended Response — Coastal Erosion in the UAE', description: 'Teacher-assessed extended writing piece, awarded full marks.', academicYear: '2024-25', url: '#', fileType: 'PDF', fileSizeKb: 65, sortOrder: 4, createdAt: '2025-03-10' },
  ],

  awards: [
    { id: 'gcse-aw1', portfolioId: 'port-mayab', title: 'Gulf News — Young Environmentalist of the Year (Finalist)', awardingBody: 'Gulf News / Emirates Environmental Group', academicYear: '2024-25', gradeLevel: 11, level: 'LOCAL', category: 'SERVICE', description: 'Shortlisted from 180 nominations for the Rewear Dubai initiative and coastal clean-up programme.', placement: 'Finalist', isVisible: true },
    { id: 'gcse-aw2', portfolioId: 'port-mayab', title: 'Kings\' School Art Prize', awardingBody: 'Kings\' School Dubai', academicYear: '2023-24', gradeLevel: 10, level: 'SCHOOL', category: 'ACADEMIC', description: 'Annual prize for outstanding creative achievement. Awarded for the UAE Coastal Birds field guide project.', placement: 'Winner', isVisible: true },
  ],

  workExperience: [
    { id: 'gcse-we1', portfolioId: 'port-mayab', employerName: 'Studio Caramel — Architecture & Interiors', role: 'Design Intern', employerType: 'COMPANY', startDate: '2024-07-01', endDate: '2024-08-15', isCurrent: false, hoursPerWeek: 30, description: 'Six-week summer internship at a Dubai-based sustainable architecture studio. Assisted with materials research for a LEED-certified residential project and prepared client presentation boards.', keyLearning: 'Seeing how much of sustainable architecture is driven by regulation and client budget — not idealism — changed how I think about the gap between design school and practice.', supervisorName: 'Architect Sarah Al-Dawoud', verificationStatus: 'VERIFIED', verifiedAt: '2024-08-20', isVisible: true },
  ],

  endorsements: [
    { id: 'gcse-end1', portfolioId: 'port-mayab', teacherName: 'Ms. Claire Bennett', teacherSubject: 'English Language & Literature', attribute: 'Voice & Purpose', endorsementText: 'Maya is one of the most purposeful writers I have taught in fifteen years. She does not write to demonstrate competence — she writes to change minds. Her GCSE coursework on coastal communities and climate adaptation moved the entire moderation panel. What makes her exceptional is that her artistic instinct is matched by a genuine discipline: she revises obsessively, accepts critique with grace, and always asks whether the work is doing what it needs to do.', isVisible: true },
    { id: 'gcse-end2', portfolioId: 'port-mayab', teacherName: 'Mr. David Holt', teacherSubject: 'Geography & Environmental Studies', attribute: 'Intellectual Courage', endorsementText: 'Maya initiated the Eco Action Team plastic audit without being asked and without knowing whether the school would act on it. They did — three canteen policies changed directly because of her report. In the classroom she pushes back on simplistic environmental narratives with real evidence and genuine curiosity. Her illustrated bird guide is both scientifically credible and beautiful — I am not sure I have seen that combination in a student this age before.', isVisible: true },
  ],

  pageViewCount: 61,
  totalVerifiedHours: 136,
  totalVerifiedSkills: 2,
};

// Convenience map for route lookup
export const allPortfolios: Record<string, PublicPortfolio> = {
  [mockPublicPortfolio.slug]:  mockPublicPortfolio,
  [mockPortfolioUAE.slug]:     mockPortfolioUAE,
  [mockPortfolioBeijing.slug]: mockPortfolioBeijing,
  [mockPortfolioGCSE.slug]:    mockPortfolioGCSE,
};

