// ─── Inlined Portfolio Types (standalone — no @ct/types workspace dep needed) ──
// This file is a self-contained copy so the portfolio can be deployed to Vercel
// as a standalone project without the monorepo workspace resolution.

export type ProjectCategory =
  | 'ACADEMIC' | 'CREATIVE' | 'COMMUNITY' | 'SPORT'
  | 'RESEARCH' | 'EMPLOYMENT' | 'LEADERSHIP' | 'OTHER';

export type EcaCategory =
  | 'SPORT' | 'ARTS' | 'MUSIC' | 'ACADEMIC' | 'COMMUNITY'
  | 'LEADERSHIP' | 'DEBATE' | 'STEM' | 'CULTURAL' | 'OTHER';

export type MediaItemType = 'IMAGE' | 'VIDEO' | 'EMBED';
export type BadgeSource = 'CREDLY' | 'OPEN_BADGE' | 'INTERNAL';
export type BadgeStatus = 'VERIFIED' | 'SELF_REPORTED' | 'PENDING';
export type PortfolioVisibility = 'PRIVATE' | 'LINK_ONLY' | 'PASSWORD_PROTECTED' | 'PUBLIC';
export type SkillFramework = 'SKILLS_BUILDER' | 'NACE';
export type SkillValidationStatus = 'PENDING' | 'VALIDATED' | 'REJECTED';
export type VerificationStatus = 'UNVERIFIED' | 'PENDING' | 'VERIFIED';

export type SoftSkillDomain =
  | 'Communication' | 'Critical Thinking' | 'Creativity & Innovation'
  | 'Leadership' | 'Teamwork & Collaboration' | 'Resilience & Growth Mindset'
  | 'Professionalism & Character' | 'Digital & Technical Literacy';

export type TechSkillCategory = 'CODE' | 'DATA' | 'DESIGN' | 'LANGUAGE' | 'ENGINEERING' | 'OTHER';
export type TechProficiencyLevel = 1 | 2 | 3 | 4 | 5;

export interface TechSkillEntry {
  id: string;
  portfolioId: string;
  skillName: string;
  category: TechSkillCategory;
  level: TechProficiencyLevel;
  evidenceNote?: string;
  verificationStatus: SkillValidationStatus;
  verifiedByName?: string;
  verifiedAt?: string;
  teacherComment?: string;
  nextStepSuggestion?: string;
}

export interface PortfolioModuleVisibility {
  hero: boolean; academicScores: boolean; transcript: boolean;
  projects: boolean; ecas: boolean; workExperience: boolean;
  achievements: boolean; skills: boolean; volunteering: boolean;
  awards: boolean; gallery: boolean; endorsements: boolean; sidebar: boolean;
}

export interface MediaItem { id: string; type: MediaItemType; url: string; caption?: string; sortOrder: number; }
export interface ProjectLink { id: string; url: string; title?: string; description?: string; ogImageUrl?: string; }
export interface ProjectSkillLink {
  skillId: string; skillName: string; framework: SkillFramework;
  stepNumber?: number; stepDescriptor?: string; validationStatus: SkillValidationStatus;
}

export interface PortfolioProject {
  id: string; portfolioId: string; academicYear: string;
  gradeLevel: 9 | 10 | 11 | 12; title: string; slug: string;
  category: ProjectCategory; summary: string; reflection: string;
  mediaItems: MediaItem[]; links: ProjectLink[]; skills: ProjectSkillLink[];
  softSkillDomains?: SoftSkillDomain[]; startDate: string; endDate?: string;
  isVisible: boolean; sortOrder: number;
}

export interface EcaEntry {
  id: string; portfolioId: string; academicYear: string; name: string;
  category: EcaCategory; role: string; hoursPerWeek?: number;
  weeksActive?: number; totalHours?: number; description?: string;
  achievements?: string; isVisible: boolean; softSkillDomains?: SoftSkillDomain[];
}

export interface VerifiedBadge {
  id: string; portfolioId: string; source: BadgeSource; badgeName: string;
  issuerName: string; imageUrl: string; assertionUrl: string;
  earnedDate: string; verificationStatus: BadgeStatus; recipientEmailHash?: string;
}

export interface SkillEntry {
  id: string; portfolioId: string; projectId?: string;
  framework: SkillFramework; skillName: string; stepNumber?: number;
  stepDescriptor?: string; evidenceStatement: string;
  validationStatus: SkillValidationStatus; validatedBy?: string;
  validatedByName?: string; validatedAt?: string; teacherComment?: string;
}

export interface VolunteeringEntry {
  id: string; portfolioId: string; organisationName: string; role: string;
  supervisorName: string; supervisorEmail: string; startDate: string;
  endDate?: string; hoursLogged: number; hoursVerified?: number;
  description: string; impactStatement: string;
  verificationStatus: VerificationStatus; verifiedAt?: string; isVisible: boolean;
}

export type LanguageProficiency = 'NATIVE' | 'FLUENT' | 'CONVERSATIONAL' | 'BASIC';
export interface LanguageEntry { language: string; proficiency: LanguageProficiency; }
export interface PersonalityProfile {
  favouriteQuote?: string; quoteAttribution?: string; shortBio?: string;
  ambitionStatement?: string; targetMajor?: string; dreamUniversity?: string;
  languagesSpoken?: LanguageEntry[]; favouriteBook?: string; hometown?: string; funFact?: string;
}

export type PortfolioCurriculumSystem = 'AP' | 'IGCSE_ALEVELS' | 'IB' | 'MIXED' | 'OTHER';
export type SubjectGradeType = 'LETTER' | 'PERCENTAGE' | 'IB_POINT' | 'IGCSE_GRADE';
export type AssessmentRecordType =
  | 'CAT4' | 'MAP' | 'PSAT' | 'SAT' | 'ACT' | 'IELTS' | 'TOEFL'
  | 'AP_EXAM' | 'IGCSE_FINAL' | 'AS_FINAL' | 'A2_FINAL' | 'IB_MOCK' | 'OTHER';

export interface SubjectGrade {
  subjectName: string; grade: string; gradeType: SubjectGradeType;
  isPredicted: boolean; isVerified: boolean; verifiedByName?: string;
  apScore?: number; notes?: string;
}

export interface AssessmentRecord {
  id: string; assessmentType: AssessmentRecordType; name: string;
  attemptDate?: string; score?: number | string; maxScore?: number;
  percentile?: number; subscores?: Record<string, number | string>;
  reportUrl?: string; isVerified: boolean;
}

export interface TranscriptYear {
  academicYear: string; gradeLevel: 9 | 10 | 11 | 12;
  curriculum: PortfolioCurriculumSystem; subjects: SubjectGrade[];
  assessments: AssessmentRecord[]; gpaWeighted?: number;
  gpaUnweighted?: number; ibPointsTotal?: number; ibPointsPredicted?: number; notes?: string;
}

export type GalleryItemType = 'PHOTO' | 'DOCUMENT' | 'LINK' | 'ESSAY';
export interface GalleryItem {
  id: string; portfolioId: string; type: GalleryItemType; title: string;
  description?: string; academicYear?: string; url: string; thumbnailUrl?: string;
  fileType?: string; fileSizeKb?: number; sortOrder: number; createdAt: string;
}

export type AwardLevel = 'SCHOOL' | 'LOCAL' | 'NATIONAL' | 'INTERNATIONAL';
export type AwardCategory = 'ACADEMIC' | 'SPORT' | 'ARTS' | 'LEADERSHIP' | 'SERVICE' | 'STEM' | 'OTHER';
export interface AwardEntry {
  id: string; portfolioId: string; title: string; awardingBody: string;
  academicYear: string; gradeLevel?: number; level: AwardLevel;
  category: AwardCategory; description?: string; placement?: string;
  evidenceUrl?: string; isVisible: boolean;
}

export type EmployerType = 'COMPANY' | 'STARTUP' | 'NGO' | 'RESEARCH_LAB' | 'SCHOOL' | 'FAMILY_BUSINESS' | 'OTHER';
export interface WorkExperienceEntry {
  id: string; portfolioId: string; employerName: string; role: string;
  employerType: EmployerType; startDate: string; endDate?: string;
  isCurrent: boolean; hoursPerWeek?: number; description: string;
  keyLearning?: string; supervisorName?: string; supervisorEmail?: string;
  verificationStatus: VerificationStatus; verifiedAt?: string; isVisible: boolean;
}

export interface TeacherEndorsement {
  id: string; portfolioId: string; teacherName: string;
  teacherSubject: string; attribute: string; endorsementText: string; isVisible: boolean;
}

export type BadgeEntry = VerifiedBadge;

export interface PublicPortfolio {
  slug: string; visibility: PortfolioVisibility;
  moduleVisibility: PortfolioModuleVisibility; isPasswordProtected: boolean;
  firstName: string; lastInitial: string; gradeLevel: 9 | 10 | 11 | 12;
  graduationYear: number; schoolName?: string; avatarUrl?: string; coverImageUrl?: string;
  gpaWeighted?: number; gpaUnweighted?: number; satSuperscore?: number; actBest?: number;
  curriculumType?: PortfolioCurriculumSystem;
  projects: PortfolioProject[]; ecas: EcaEntry[]; skills: SkillEntry[];
  techSkills?: TechSkillEntry[]; volunteering: VolunteeringEntry[];
  badges: VerifiedBadge[]; personality?: PersonalityProfile;
  transcript?: TranscriptYear[]; gallery?: GalleryItem[];
  awards?: AwardEntry[]; workExperience?: WorkExperienceEntry[];
  endorsements?: TeacherEndorsement[];
  pageViewCount: number; totalVerifiedHours: number; totalVerifiedSkills: number;
}

export interface SkillVerificationContext {
  studentName: string; schoolName: string; projectTitle?: string;
  projectSummary?: string; skillName: string; framework: SkillFramework;
  stepNumber?: number; stepDescriptor?: string; evidenceStatement: string;
  mediaItems?: MediaItem[]; requestedAt: string; expiresAt: string; alreadyResolved: boolean;
}

export interface VolunteerVerificationContext {
  studentName: string; organisationName: string; role: string;
  startDate: string; endDate?: string; hoursLogged: number;
  description: string; impactStatement: string;
  requestedAt: string; expiresAt: string; alreadyResolved: boolean;
}
