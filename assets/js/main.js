// Novacifer — Steampunk JS

// Animate gear on hover over nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    document.querySelectorAll('.logo-glyph').forEach(g => {
      g.style.animationDuration = '3s';
    });
  });
  link.addEventListener('mouseleave', () => {
    document.querySelectorAll('.logo-glyph').forEach(g => {
      g.style.animationDuration = '20s';
    });
  });
});

// Typewriter effect for elements with class .typewriter
document.querySelectorAll('.typewriter').forEach(el => {
  const text = el.textContent;
  el.textContent = '';
  el.style.visibility = 'visible';
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 35);
});

// Random flicker on page load (subtle)
setTimeout(() => {
  const panel = document.querySelector('.content-panel');
  if (panel) {
    panel.style.transition = 'opacity 0.05s';
    panel.style.opacity = '0.92';
    setTimeout(() => { panel.style.opacity = '1'; }, 80);
  }
}, 600);
