export type ThemeId = 'codex' | 'constellation';

export interface ThemePreset {
  id: ThemeId;
  colorBackground: string;
  colorSurface: string;
  colorSurfaceRaised: string;
  colorBorder: string;
  colorPrimary: string;
  colorPrimaryGlow: string;
  colorAccent: string;
  colorText: string;
  colorTextSoft: string;
  colorMuted: string;
  fontSans: string;
  fontDisplay: string;
  radiusCard: string;
  animations: boolean;
  rtlSupport: boolean;
}

export const themes: Record<ThemeId, ThemePreset> = {
  codex: {
    id: 'codex',
    // Warm charcoal — NOT navy, NOT blue
    colorBackground:    '#100F0E',
    colorSurface:       '#1C1B19',
    colorSurfaceRaised: '#252420',
    colorBorder:        'rgba(255,255,255,0.07)',
    colorPrimary:       '#5B8FD4',   // refined slate blue
    colorPrimaryGlow:   'rgba(91,143,212,0.15)',
    colorAccent:        '#E8D9BC',   // cream
    colorText:          '#F5F3EE',   // warm white
    colorTextSoft:      '#B8B4AC',
    colorMuted:         '#6B6862',
    fontSans:           '"Space Grotesk", system-ui, sans-serif',
    fontDisplay:        '"Syne", "Space Grotesk", sans-serif',
    radiusCard:         '12px',
    animations:         true,
    rtlSupport:         false,
  },
  constellation: {
    id: 'constellation',
    colorBackground:    '#0A0F0E',
    colorSurface:       '#141C1B',
    colorSurfaceRaised: '#1D2826',
    colorBorder:        'rgba(255,255,255,0.07)',
    colorPrimary:       '#2DD4BF',
    colorPrimaryGlow:   'rgba(45,212,191,0.15)',
    colorAccent:        '#C8A96E',
    colorText:          '#EEF2F0',
    colorTextSoft:      '#9EB0AC',
    colorMuted:         '#607570',
    fontSans:           '"Space Grotesk", system-ui, sans-serif',
    fontDisplay:        '"Syne", "Space Grotesk", sans-serif',
    radiusCard:         '12px',
    animations:         true,
    rtlSupport:         true,
  },
};

export function getTheme(id?: string | null): ThemePreset {
  return themes[(id as ThemeId) ?? 'codex'] ?? themes.codex;
}

export function themeToVars(t: ThemePreset): Record<string, string> {
  return {
    '--color-bg':           t.colorBackground,
    '--color-surface':      t.colorSurface,
    '--color-raised':       t.colorSurfaceRaised,
    '--color-border':       t.colorBorder,
    '--color-primary':      t.colorPrimary,
    '--color-primary-glow': t.colorPrimaryGlow,
    '--color-accent':       t.colorAccent,
    '--color-text':         t.colorText,
    '--color-text-soft':    t.colorTextSoft,
    '--color-muted':        t.colorMuted,
    '--font-sans':          t.fontSans,
    '--font-display':       t.fontDisplay,
    '--radius':             t.radiusCard,
  };
}
