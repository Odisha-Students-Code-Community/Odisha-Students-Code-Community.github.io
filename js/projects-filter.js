/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — PROJECTS FILTER & RENDERER
 * ====================================================================
 */

import { getOrgRepos } from './github-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const searchInput = document.getElementById('project-search');
  const filterButtons = document.querySelectorAll('.filter-btn');

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
      <div class="skeleton-card">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line full"></div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function renderProjects(projects, container) {
  if (!projects || projects.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">📁</div>
        <h3 class="empty-title">NO REPOSITORIES MATCHED</h3>
        <p class="empty-desc">No OSCC repositories match your current filter or search criteria.</p>
        <button class="btn btn-sm btn-dark" onclick="window.location.reload()">RESET FILTERS</button>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(proj => {
    const statusClass = proj.status === 'ACTIVE' ? 'badge-active' :
                        proj.status === 'IN DEVELOPMENT' ? 'badge-dev' : 'badge-maintenance';
    
    const diffClass = proj.difficulty === 'BEGINNER' ? 'diff-beginner' :
                      proj.difficulty === 'INTERMEDIATE' ? 'diff-intermediate' : 'diff-advanced';

    return `
      <article class="card-brutal project-card">
        <div class="card-header-bar">
          <span>REPO: ${escapeHtml(proj.repoName)}</span>
          <span class="badge ${diffClass}">${escapeHtml(proj.difficulty)}</span>
        </div>
        <div class="card-body">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.35rem; text-transform: uppercase;">
              ${escapeHtml(proj.name)}
            </h3>
            <span class="badge ${statusClass}">
              <span class="status-dot ${proj.status === 'ACTIVE' ? 'active' : 'dev'}"></span>
              ${escapeHtml(proj.status)}
            </span>
          </div>

          <p style="font-size: var(--text-sm); color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem;">
            ${escapeHtml(proj.description)}
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem;">
            ${proj.techStack.map(tech => `<span class="tag-stack">${escapeHtml(tech)}</span>`).join('')}
          </div>

          ${(proj.stars !== undefined || proj.openIssues !== undefined) ? `
            <div style="display: flex; gap: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle); margin-bottom: 1.25rem; border-top: 1px dashed #CCCCCC; padding-top: 0.5rem;">
              <span>⭐ ${proj.stars ?? 0} stars</span>
              <span>🍴 ${proj.forks ?? 0} forks</span>
              <span>📋 ${proj.openIssues ?? 0} issues</span>
            </div>
          ` : ''}

          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: auto;">
            <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-dark">
              VIEW GITHUB ↗
            </a>
            ${proj.goodFirstIssuesUrl ? `
              <a href="${proj.goodFirstIssuesUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-red">
                GOOD FIRST ISSUES 🎯
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
