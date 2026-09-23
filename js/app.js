/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — MAIN APP RUNTIME
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initSystemClock();
  initMobileNavigation();
  initCodeCopyButtons();
  highlightActiveNavLink();
});

/**
 * Live IST Clock for System Ticker
 */
function initSystemClock() {
  const clockEl = document.getElementById('ist-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format to IST (UTC+05:30)
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
    clockEl.textContent = `IST: ${timeStr}`;
  }

  update();
  setInterval(update, 1000);
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !drawer) return;

  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  // Close on link click inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleDrawer(false);
      toggleBtn.focus();
    }
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleDrawer(false);
    }
  });
}

/**
 * One-Click Clipboard Copy for Code Blocks
 */
function initCodeCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeTarget = btn.getAttribute('data-target');
      let textToCopy = '';

      if (codeTarget) {
        const targetEl = document.querySelector(codeTarget);
        if (targetEl) textToCopy = targetEl.textContent.trim();
      } else {
        const terminalLine = btn.closest('.code-terminal')?.querySelector('.terminal-cmd');
        if (terminalLine) textToCopy = terminalLine.textContent.trim();
      }

      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'COPIED!';
        btn.style.background = 'var(--accent-green)';
        btn.style.color = '#000000';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

/**
 * Highlight Current Nav Page
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-drawer-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
