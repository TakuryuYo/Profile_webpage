import fs from 'fs';
import path from 'path';
import { App } from './App';

// Use process.cwd() so this works when running from project root or inside package folder
const projectRoot = process.cwd();
const dataPath = path.resolve(projectRoot, 'src', 'data', 'profile.json');
if (!fs.existsSync(dataPath)) {
	throw new Error(`Profile data not found at ${dataPath}`);
}
const profileData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const appHtml = App(profileData);

const publicDir = path.resolve(projectRoot, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'index.html'), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${profileData.name} - Profile</title><link rel="stylesheet" href="styles.css"></head><body>${appHtml}</body></html>`);
console.log('Generated public/index.html at', path.join(publicDir, 'index.html'));
