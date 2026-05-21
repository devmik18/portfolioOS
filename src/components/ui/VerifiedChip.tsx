'use client';

import { CheckCircle, Clock, XCircle, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SkillValidationStatus, VerificationStatus, BadgeStatus } from '@/lib/types';

type Variant = 'verified' | 'supervisor' | 'pending' | 'declined' | 'self';

const config: Record<Variant, { label: string; icon?: React.ReactNode; cls: string }> = {
  verified:   { label: 'Teacher Verified',    icon: <CheckCircle size={10} />, cls: 'chip chip-verified' },
  supervisor: { label: 'Supervisor Verified', icon: <Shield size={10} />,      cls: 'chip chip-supervisor' },
  pending:    { label: 'Pending',             icon: <Clock size={10} />,        cls: 'chip chip-pending' },
  declined:   { label: 'Declined',            icon: <XCircle size={10} />,      cls: 'chip chip-declined' },
  self:       { label: 'Self-Reported',                                         cls: 'chip chip-self' },
};

function resolveSkill(s: SkillValidationStatus): Variant {
  return s === 'VALIDATED' ? 'verified' : s === 'REJECTED' ? 'declined' : 'pending';
}
function resolveVol(s: VerificationStatus): Variant {
  return s === 'VERIFIED' ? 'supervisor' : s === 'PENDING' ? 'pending' : 'self';
}
function resolveBadge(s: BadgeStatus): Variant {
  return s === 'VERIFIED' ? 'verified' : s === 'PENDING' ? 'pending' : 'self';
}

interface Props {
  variant?: Variant;
  skillStatus?: SkillValidationStatus;
  verificationStatus?: VerificationStatus;
  badgeStatus?: BadgeStatus;
  className?: string;
}

export function VerifiedChip({ variant, skillStatus, verificationStatus, badgeStatus, className }: Props) {
  const v = variant ??
    (skillStatus ? resolveSkill(skillStatus) :
     verificationStatus ? resolveVol(verificationStatus) :
     badgeStatus ? resolveBadge(badgeStatus) : 'self');
  const c = config[v];
  return (
    <span className={cn(c.cls, className)}>
      {c.icon}
      {c.label}
    </span>
  );
}
