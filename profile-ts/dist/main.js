"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const App_1 = require("./App");
// Use process.cwd() so this works when running from project root or inside package folder
const projectRoot = process.cwd();
const dataPath = path_1.default.resolve(projectRoot, 'src', 'data', 'profile.json');
if (!fs_1.default.existsSync(dataPath)) {
    throw new Error(`Profile data not found at ${dataPath}`);
}
const profileData = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
const appHtml = (0, App_1.App)(profileData);
const publicDir = path_1.default.resolve(projectRoot, 'public');
if (!fs_1.default.existsSync(publicDir))
    fs_1.default.mkdirSync(publicDir, { recursive: true });
fs_1.default.writeFileSync(path_1.default.join(publicDir, 'index.html'), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${profileData.name} - Profile</title><link rel="stylesheet" href="styles.css"></head><body>${appHtml}</body></html>`);
console.log('Generated public/index.html at', path_1.default.join(publicDir, 'index.html'));
