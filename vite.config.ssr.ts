import { viteConfigSsr } from '@packlify/config-build';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteConfigSsr([
    {
      name: 'home',
      path: '/src/server/entries/home.tsx',
    },
    {
      name: 'login',
      path: '/src/server/entries/login.tsx',
    },
    {
      name: 'register',
      path: '/src/server/entries/register.tsx',
    },
    {
      name: 'dashboard',
      path: '/src/server/entries/dashboard.tsx',
    },
    {
      name: 'cloud',
      path: '/src/server/entries/cloud.tsx',
    },
  ]),
});
