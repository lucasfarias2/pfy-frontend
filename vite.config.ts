import { viteConfigClient } from '@packlify/config-build';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteConfigClient([
    { name: 'home', path: '/src/client/entries/home/home.html' },
    { name: 'login', path: '/src/client/entries/login/login.html' },
    { name: 'register', path: '/src/client/entries/register/register.html' },
    { name: 'dashboard', path: '/src/client/entries/dashboard/dashboard.html' },
    { name: 'cloud', path: '/src/client/entries/cloud/cloud.html' },
  ]),
});
