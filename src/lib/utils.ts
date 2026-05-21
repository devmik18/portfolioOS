import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function formatAcademicYear(year: string): string {
  return year; // e.g. "2023-24"
}

export function gradeToLabel(grade: 9 | 10 | 11 | 12): string {
  const map: Record<number, string> = { 9: 'Year 9', 10: 'Year 10', 11: 'Year 11', 12: 'Year 12' };
  return map[grade] ?? `Grade ${grade}`;
}

export function getAcademicYearsFromProjects(
  projects: { academicYear: string; gradeLevel: number }[]
): { year: string; gradeLabel: string }[] {
  const seen = new Map<string, number>();
  for (const p of projects) {
    if (!seen.has(p.academicYear)) seen.set(p.academicYear, p.gradeLevel);
  }
  return Array.from(seen.entries())
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([year, grade]) => ({
      year,
      gradeLabel: gradeToLabel(grade as 9 | 10 | 11 | 12),
    }));
}

export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + '…';
}

export function getInitials(firstName: string, lastInitial: string): string {
  return `${firstName} ${lastInitial}.`;
}

export function isExpired(dateStr: string): boolean {
  return new Date(dateStr) < new Date();
}
