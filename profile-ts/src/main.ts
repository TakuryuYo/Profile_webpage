import fs from 'fs';
import path from 'path';
import { App } from './App';

// Simple server-less build: write HTML with injected content for demo
const profileData = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/profile.json'), 'utf8'));
const appHtml = App(profileData);

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'index.html'), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${profileData.name} - Profile</title><link rel="stylesheet" href="styles.css"></head><body>${appHtml}</body></html>`);
console.log('Generated public/index.html');
