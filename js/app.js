/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — MAIN APP RUNTIME
 * Aesthetic: Industrial Brutalism / Hardware Workshop
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initSystemClock();
  initMobileConsole();
  initCodeCopyButtons();
  initInteractiveTerminal();
});

/**
 * 1. Live IST Clock for Diagnostic Status Rack
 */
function initSystemClock() {
  const clockEl = document.getElementById('ist-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
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
 * 2. Mobile Hardware Console Drawer
 */
function initMobileConsole() {
  const toggleBtn = document.querySelector('.console-mobile-toggle');
  const drawer = document.querySelector('.mobile-console-drawer');

  if (!toggleBtn || !drawer) return;

  function toggle(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle();
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggle(false);
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggle(false);
    }
  });
}

/**
 * 3. One-Click Clipboard Copy for Industrial Commands
 */
function initCodeCopyButtons() {
  document.querySelectorAll('.btn-copy-cmd, .copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      let textToCopy = btn.getAttribute('data-cmd');
      if (!textToCopy) {
        const box = btn.closest('.station-cmd-box');
        if (box) {
          const codeEl = box.querySelector('code');
          if (codeEl) textToCopy = codeEl.textContent.trim();
        }
      }

      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'COPIED! ✓';
        btn.style.background = '#00DF81';
        btn.style.color = '#0D0D0D';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 1800);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  });
}

/**
 * 4. Interactive OSCC CLI Terminal Emulator
 */
function initInteractiveTerminal() {
  const terminalBody = document.getElementById('terminal-feed');
  const terminalInput = document.getElementById('terminal-cli-input');
  if (!terminalBody) return;

  const COMMANDS = {
    'help': () => [
      '<span class="terminal-out-highlight">AVAILABLE OSCC CLI COMMANDS:</span>',
      '  <span class="terminal-prompt">oscc repos</span>      : List active official repositories',
      '  <span class="terminal-prompt">oscc bot</span>        : Inspect Connect automated invitation bot',
      '  <span class="terminal-prompt">oscc pipeline</span>   : View 5-step pull request conveyor',
      '  <span class="terminal-prompt">oscc manifest</span>   : Read core community principles',
      '  <span class="terminal-prompt">clear</span>           : Clear terminal output screen'
    ],
    'oscc help': () => COMMANDS['help'](),
    'oscc repos': () => [
      '<span class="terminal-out-highlight">[OSCC OFFICIAL REPOSITORIES REGISTRY]</span>',
      '  1. <span class="terminal-out-cmd">Odisha-Students-Code-Community.github.io</span> [HTML5/CSS3/JS]',
      '     Official Industrial Brutalist platform. Pure static Pages.',
      '  2. <span class="terminal-out-cmd">Connect</span> [GitHub Actions / IssueOps]',
      '     Automated invitation & student onboarding bot.',
      '  3. <span class="terminal-out-cmd">.github</span> [Governance / Profiles]',
      '     Community health files, contributing guidelines & templates.',
      '  Status: 100% Free, Public, MIT Licensed.'
    ],
    'oscc bot': () => [
      '<span class="terminal-out-highlight">[CONNECT BOT AUTOMATION PIPELINE]</span>',
      '  How to join the organization in 30 seconds:',
      '  1. Open invitation template: <span class="terminal-out-cmd">Connect/issues/new?template=invitation.yml</span>',
      '  2. Enter your Name, College, and Interests.',
      '  3. Submit issue -> GitHub Actions triggers automatically.',
      '  4. You receive an invite link & organization invite email instantly.',
      '  5. Switch membership visibility to Public in org people list! ❤️'
    ],
    'oscc pipeline': () => [
      '<span class="terminal-out-highlight">[OSCC 5-STEP ASSEMBLY LINE]</span>',
      '  [01] git clone https://github.com/Odisha-Students-Code-Community/&lt;repo&gt;.git',
      '  [02] git checkout -b feat/my-contribution',
      '  [03] Write clean, focused code according to CONTRIBUTING.md',
      '  [04] Test locally in browser / test runner',
      '  [05] git push origin feat/my-contribution && open Pull Request!'
    ],
    'oscc manifest': () => [
      '<span class="terminal-out-highlight">[OSCC CORE PHILOSOPHY]</span>',
      '  "Students in Odisha building software together — in public."',
      '  - No commercial paywalls (₹0.00 forever).',
      '  - Cross-college collaboration across all 30 districts of Odisha.',
      '  - Practical hands-on Git & open-source experience.'
    ],
    'clear': () => 'CLEAR'
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Render user command line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">student@odisha:~$</span> <span class="terminal-out-cmd">${escapeHTML(rawCmd)}</span>`;
    terminalBody.appendChild(userLine);

    if (cmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    const handler = COMMANDS[cmd];
    const outDiv = document.createElement('div');
    outDiv.className = 'terminal-line';

    if (handler) {
      const output = handler();
      outDiv.innerHTML = output.join('<br>');
    } else {
      outDiv.innerHTML = `<span class="terminal-out-warn">Command not recognized: '${escapeHTML(rawCmd)}'. Type 'oscc help' for command list.</span>`;
    }

    terminalBody.appendChild(outDiv);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Handle Enter key on input
  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = terminalInput.value;
        terminalInput.value = '';
        executeCommand(val);
      }
    });
  }

  // Handle quick button clicks
  document.querySelectorAll('.terminal-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-run');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });
}
