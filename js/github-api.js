/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — GITHUB API INTEGRATION
 * ====================================================================
 * Features:
 * - Unauthenticated public client (safe for public repository)
 * - SessionStorage caching to prevent rate-limiting (60 req/hr ceiling)
 * - Fallback to static data on error or offline
 */

import { projectsData } from './data/projects.js';

const CACHE_PREFIX = 'oscc_gh_cache_';
const CACHE_DURATION_MS = 30 * 60 * 1000; // 30 minutes

/**
 * Fetch with sessionStorage caching
 */
async function fetchWithCache(url, cacheKey) {
  try {
    const cached = sessionStorage.getItem(CACHE_PREFIX + cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION_MS) {
        return parsed.data;
      }
    }
  } catch (e) {
    // sessionStorage not available or disabled
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const data = await response.json();
    try {
      sessionStorage.setItem(CACHE_PREFIX + cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data
      }));
    } catch (e) {
      // Storage quota or disabled
    }
    return data;
  } catch (err) {
    console.warn(`[OSCC GitHub API] Failed to fetch ${url}:`, err.message);
    return null;
  }
}

/**
 * Get organization repositories metadata
 */
export async function getOrgRepos() {
  const url = 'https://api.github.com/orgs/Odisha-Students-Code-Community/repos?per_page=100';
  const remoteRepos = await fetchWithCache(url, 'org_repos');
  
  // Merge remote stats with local project data
  if (Array.isArray(remoteRepos)) {
    return projectsData.map(proj => {
      const remote = remoteRepos.find(r => r.name.toLowerCase() === proj.repoName.toLowerCase());
      if (remote) {
        return {
          ...proj,
          stars: remote.stargazers_count,
          forks: remote.forks_count,
          openIssues: remote.open_issues_count,
          updatedAt: remote.updated_at,
          defaultBranch: remote.default_branch
        };
      }
      return proj;
    });
  }

  // Graceful fallback to local data
  return projectsData;
}

/**
 * Get organization contributors
 */
export async function getOrgContributors() {
  const url = 'https://api.github.com/repos/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io/contributors';
  const contributors = await fetchWithCache(url, 'website_contributors');
  return Array.isArray(contributors) ? contributors : [];
}
