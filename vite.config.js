import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Preview uses the deployment headers so CSP can be checked locally.
//
// A missing or reshaped vercel.json fails loudly with an actionable message
// instead of a TypeError, and never silently serves preview without its
// security headers — that would let local CSP checks pass for the wrong reason.
//
// The lookup is deferred to preview only, so `vite build` and the dev server do
// not depend on the deployment config being present or valid.
function productionHeaders() {
  const configPath = new URL('./vercel.json', import.meta.url);

  if (!existsSync(configPath)) {
    throw new Error(
      '[vite] vercel.json is missing, so preview cannot mirror the production security headers.'
    );
  }

  const { headers } = JSON.parse(readFileSync(configPath, 'utf8'));
  const rule = (headers ?? []).find((entry) => entry?.source === '/(.*)');

  if (!Array.isArray(rule?.headers) || rule.headers.length === 0) {
    throw new Error(
      '[vite] vercel.json has no "/(.*)" header rule, so preview cannot mirror the production security headers.'
    );
  }

  return Object.fromEntries(rule.headers.map(({ key, value }) => [key, value]));
}

export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  server: { host: '127.0.0.1' },
  // `vite preview` resolves with command "serve" and mode "production";
  // `vite` (dev) resolves with mode "development" and `vite build` with
  // command "build", so neither touches vercel.json.
  preview: {
    host: '127.0.0.1',
    headers: command === 'serve' && mode === 'production' ? productionHeaders() : {},
  },
}));
