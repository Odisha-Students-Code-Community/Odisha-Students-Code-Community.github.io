/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — PROJECTS FILTER & RENDERER
 * Aesthetic: Industrial Brutalism Spec Schematics
 * ====================================================================
 */

import { getOrgRepos } from './github-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const searchInput = document.getElementById('project-search');
  const filterButtons = document.querySelectorAll('.switch-item, .filter-btn');

  let allProjects = [];
  let currentDifficulty = 'all';
  let searchQuery = '';

  // Render Skeleton while loading
  renderSkeletons(container, 3);

  // Fetch verified repositories with stats
  allProjects = await getOrgRepos();
  renderProjects(allProjects, container);

  // Filter Button Clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDifficulty = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Real-time Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  function applyFilters() {
    const filtered = allProjects.filter(proj => {
      const matchesDifficulty = currentDifficulty === 'all' || proj.difficulty.toLowerCase() === currentDifficulty.toLowerCase();
      const matchesSearch = !searchQuery || 
        proj.name.toLowerCase().includes(searchQuery) ||
        proj.description.toLowerCase().includes(searchQuery) ||
        proj.techStack.some(t => t.toLowerCase().includes(searchQuery));
      return matchesDifficulty && matchesSearch;
    });

    renderProjects(filtered, container);
  }
});

function renderSkeletons(container, count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div class="spec-card" style="opacity: 0.6; min-height: 280px; padding: var(--space-6);">
        <div style="height: 20px; background: #CCCCCC; margin-bottom: var(--space-4);"></div>
        <div style="height: 14px; width: 70%; background: #E0E0E0; margin-bottom: var(--space-2);"></div>
        <div style="height: 14px; width: 90%; background: #E0E0E0; margin-bottom: var(--space-4);"></div>
        <div style="height: 38px; background: #CCCCCC; margin-top: auto;"></div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function renderProjects(projects, container) {
  if (!projects || projects.length === 0) {
    container.innerHTML = `
      <div class="spec-card" style="grid-column: 1 / -1; padding: var(--space-8); text-align: center;">
        <h3 class="spec-card-title">NO REPOSITORIES MATCHED</h3>
        <p class="spec-card-desc">No OSCC codebases match your current search or difficulty filter.</p>
        <div>
          <button class="btn btn-sm btn-dark" onclick="window.location.reload()">RESET MATRIX FILTERS</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(proj => {
    const isBeginner = proj.difficulty.toUpperCase() === 'BEGINNER';
    const tagClass = isBeginner ? 'tag-green' : 'tag-dark';

    return `
      <article class="spec-card">
        <div class="spec-card-header">
          <span class="spec-card-ref">SCHEMATIC: ${escapeHtml(proj.repoName)}</span>
          <span class="tech-tag ${tagClass}">[${escapeHtml(proj.difficulty)}]</span>
        </div>
        <div class="spec-card-body">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: var(--space-2); gap: var(--space-2);">
            <h3 class="spec-card-title" style="font-size: var(--text-xl);">${escapeHtml(proj.name)}</h3>
            <span class="tech-tag tag-dark">${escapeHtml(proj.status)}</span>
          </div>

          <p class="spec-card-desc">
            ${escapeHtml(proj.description)}
          </p>

          <div class="spec-card-meta">
            ${proj.techStack.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
          </div>

          ${(proj.stars !== undefined || proj.openIssues !== undefined) ? `
            <div style="display: flex; gap: 1rem; font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--text-subtle); margin-bottom: var(--space-4); border-top: 1px dashed #CCCCCC; padding-top: var(--space-2);">
              <span>★ ${proj.stars ?? 0} STARS</span>
              <span>⑂ ${proj.forks ?? 0} FORKS</span>
              <span>☉ ${proj.openIssues ?? 0} ISSUES</span>
            </div>
          ` : ''}

          <div class="spec-card-actions">
            <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-dark">
              INSPECT CODE ↗
            </a>
            ${proj.goodFirstIssuesUrl ? `
              <a href="${proj.goodFirstIssuesUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-red">
                CLAIM ISSUE ⚡
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
