/**
 * Design tokens — clean, professional, modern (Linear / Vercel / Stripe inspired).
 * Deep slate #090d16 / #111726 dark, airy #f7f8fa / #ffffff light — contracts preserved.
 * Hairline 1px borders, glass AppBar blur(16px), Inter tight tracking, soft elevations.
 * Contract: dark bg.default #090d16, paper #111726, text #f8fafc/#94a3b8.
 */
export function getThemeOptions(mode = 'light') {
  const isDark = mode === 'dark';

  return {
    custom: {
      gradients: {
        hero: isDark
          ? 'radial-gradient(ellipse 900px 420px at 50% -10%, rgba(79,117,242,0.16), transparent 60%), radial-gradient(ellipse 720px 360px at 85% 12%, rgba(56,189,248,0.10), transparent 55%), linear-gradient(180deg, #090d16 0%, #0e152a 55%, #090d16 100%)'
          : 'radial-gradient(ellipse 820px 380px at 82% 8%, rgba(36,91,225,0.08), transparent 58%), linear-gradient(115deg, #ffffff 52%, #eef3ff 100%)',
        brand: isDark ? 'linear-gradient(#4f75f2, #4f75f2)' : 'linear-gradient(#245be1, #245be1)',
        avatarRing: isDark ? 'linear-gradient(#1e293b, #1e293b)' : 'linear-gradient(#e6eaf0, #e6eaf0)',
        iconTile: isDark ? 'linear-gradient(#162035, #162035)' : 'linear-gradient(#eef2f7, #eef2f7)',
        category: {},
        categoryFallback: isDark ? 'linear-gradient(#0d1322, #0d1322)' : 'linear-gradient(#161c28, #161c28)',
      },
      surfaces: {
        navy: isDark ? '#0d1322' : '#161c28',
        navyBorder: isDark ? 'rgba(255, 255, 255, 0.08)' : '#323b4d',
        slateBorder: isDark ? 'rgba(255, 255, 255, 0.12)' : '#465267',
        tile: isDark ? '#162035' : '#f7f8fa',
      },
      onDark: {
        strong: '#ffffff',
        body: isDark ? '#f8fafc' : '#e5e9f1',
        muted: isDark ? '#94a3b8' : '#ccd4e1',
        subtle: isDark ? '#64748b' : '#acb9ce',
        faint: isDark ? '#475569' : '#acb9ce',
        accent: isDark ? '#38bdf8' : '#b7ccff',
        accentSoft: isDark ? '#7dd3fc' : '#b7ccff',
      },
      onPrimary: { soft: isDark ? '#e2e8f0' : '#e5e9f1' },
      chip: {
        bg: isDark ? '#162035' : '#ffffff',
        border: isDark ? 'rgba(255, 255, 255, 0.10)' : '#e2e8f0',
      },
    },
    palette: {
      mode,
      primary: isDark
        ? { main: '#4f75f2', dark: '#3b5bc7', light: 'rgba(79, 117, 242, 0.16)', contrastText: '#ffffff' }
        : { main: '#0f172a', dark: '#020617', light: '#eef2ff', contrastText: '#ffffff' },
      secondary: { main: isDark ? '#38bdf8' : '#245be1' },
      success: { main: isDark ? '#10b981' : '#0e7a4a' },
      background: {
        default: isDark ? '#090d16' : '#f7f8fa',
        paper: isDark ? '#111726' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f8fafc' : '#0f172a',
        secondary: isDark ? '#94a3b8' : '#64748b',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0',
      action: {
        hover: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.04)',
        selected: isDark ? 'rgba(79, 117, 242, 0.14)' : 'rgba(15, 23, 42, 0.06)',
      },
    },
    typography: {
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      h1: { fontWeight: 760, letterSpacing: '-0.06em', lineHeight: 0.98 },
      h2: { fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1.08 },
      h3: { fontWeight: 650, letterSpacing: '-0.03em', lineHeight: 1.20 },
      h4: { fontWeight: 650, letterSpacing: '-0.028em', lineHeight: 1.24 },
      h5: { fontWeight: 600, letterSpacing: '-0.018em', lineHeight: 1.34 },
      h6: { fontWeight: 600, letterSpacing: '-0.012em', lineHeight: 1.44 },
      subtitle1: { fontWeight: 600, lineHeight: 1.5, letterSpacing: '-0.01em' },
      subtitle2: { fontWeight: 600, lineHeight: 1.5, letterSpacing: '-0.01em' },
      body1: { fontSize: '1rem', lineHeight: 1.72 },
      body2: { fontSize: '0.9375rem', lineHeight: 1.66 },
      overline: { fontWeight: 600, letterSpacing: '0.13em' },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius: 999, minHeight: 44, padding: '10px 18px', letterSpacing: '-0.01em' },
          contained: { boxShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4), 0 8px 20px rgba(79,117,242,0.22)' : '0 1px 2px rgba(15,23,42,0.06), 0 8px 20px rgba(15,23,42,0.08)' },
          outlined: { borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : '#e2e8f0', backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#ffffff' },
          sizeSmall: { fontSize: '0.8125rem', padding: '7px 14px', minHeight: 36, borderRadius: 999 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : '#e2e8f0'}`,
            boxShadow: isDark ? '0 1px 0 rgba(255,255,255,0.04) inset, 0 10px 28px rgba(0,0,0,0.32)' : '0 1px 2px rgba(15,23,42,0.04), 0 10px 28px rgba(15,23,42,0.06)',
            backgroundColor: isDark ? '#111726' : '#ffffff',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
          outlined: { borderColor: isDark ? 'rgba(255, 255, 255, 0.07)' : '#e2e8f0' },
          rounded: { borderRadius: 16 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: 999,
            maxWidth: '100%',
            height: 28,
            fontSize: '0.8125rem',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.10)' : '#e2e8f0',
            backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : '#ffffff',
          },
          label: { whiteSpace: 'normal', overflowWrap: 'anywhere', paddingLeft: 10, paddingRight: 10 },
          sizeSmall: { height: 'auto', minHeight: 28 },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: { '@media (min-width: 1200px)': { paddingLeft: 32, paddingRight: 32 } },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? 'rgba(9, 13, 22, 0.72)' : 'rgba(255, 255, 255, 0.84)',
            color: isDark ? '#f8fafc' : '#0f172a',
            backdropFilter: 'blur(16px) saturate(160%)',
            WebkitBackdropFilter: 'blur(16px) saturate(160%)',
            borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)'}`,
            boxShadow: 'none',
          },
        },
      },
      MuiAccordion: { styleOverrides: { root: { boxShadow: 'none' } } },
    },
  };
}
