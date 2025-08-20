// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', (!expanded).toString());
  menu.classList.toggle('show');
});

// Theme toggle with persistence
const themeBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme');
if (stored === 'dark' || (!stored && prefersDark)) document.documentElement.classList.add('dark');
themeBtn?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// Apply dark variables via class
const darkVars = `
  .dark {
    --bg: #0e1217;
    --card: #0f1520;
    --ink: #f2f5f8;
    --muted: #a3adba;
    --primary: #33c2bd;
    --primary-ink: #1aa39e;
    --accent: #ffd75e;
    --ring: rgba(51,194,189,.35);
    --shadow: 0 8px 30px rgba(0,0,0,.35);
  }
`;
const style = document.createElement('style');
style.innerHTML = darkVars;
document.head.appendChild(style);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
