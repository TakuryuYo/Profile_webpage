"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = App;
function App(profile) {
    return `
    <main>
      <h1>${profile.name}</h1>
      <h2>${profile.title}</h2>
      <p>${profile.bio}</p>
      <h3>Skills</h3>
      <ul>
        ${profile.skills.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </main>
  `;
}
