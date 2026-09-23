/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — PROJECTS DATA
 * ====================================================================
 * Verified projects hosted under github.com/Odisha-Students-Code-Community
 * New projects can be added by opening a PR modifying this file.
 */

export const projectsData = [
  {
    id: "oscc-website",
    name: "OSCC Official Website",
    repoName: "Odisha-Students-Code-Community.github.io",
    tagline: "The living hub for student developers in Odisha",
    description: "The official web platform of Odisha Students Code Community. Built with raw Industrial Brutalism and zero framework bloat, this repository is explicitly structured for students to make their very first open-source pull requests.",
    status: "ACTIVE",
    difficulty: "BEGINNER",
    featured: true,
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    repoUrl: "https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io",
    issuesUrl: "https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io/issues",
    goodFirstIssuesUrl: "https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io/labels/good%20first%20issue",
    docsUrl: "https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io/blob/main/README.md",
    contributionGuide: "contribute.html"
  },
  {
    id: "oscc-connect",
    name: "Connect",
    repoName: "Connect",
    tagline: "Automated student invitation and onboarding bot",
    description: "An IssueOps automation system enabling students across Odisha to request invitations and join the GitHub organization automatically by opening a structured issue template.",
    status: "ACTIVE",
    difficulty: "BEGINNER",
    featured: true,
    techStack: ["GitHub Actions", "IssueOps", "YAML", "Automation"],
    repoUrl: "https://github.com/Odisha-Students-Code-Community/Connect",
    issuesUrl: "https://github.com/Odisha-Students-Code-Community/Connect/issues",
    goodFirstIssuesUrl: "https://github.com/Odisha-Students-Code-Community/Connect/labels/good%20first%20issue",
    docsUrl: "https://github.com/Odisha-Students-Code-Community/Connect/blob/main/README.md",
    contributionGuide: "https://github.com/Odisha-Students-Code-Community/Connect/blob/main/CONTRIBUTING.md"
  },
  {
    id: "oscc-org-profile",
    name: ".github (Organization Governance)",
    repoName: ".github",
    tagline: "Master organization profile, templates & community health",
    description: "Holds organization-wide GitHub profile documentation, issue templates, PR review policies, and community governance resources for all member repositories.",
    status: "MAINTENANCE",
    difficulty: "BEGINNER",
    featured: false,
    techStack: ["Markdown", "GitHub Workflows", "Documentation"],
    repoUrl: "https://github.com/Odisha-Students-Code-Community/.github",
    issuesUrl: "https://github.com/Odisha-Students-Code-Community/.github/issues",
    goodFirstIssuesUrl: "https://github.com/Odisha-Students-Code-Community/.github/labels/good%20first%20issue",
    docsUrl: "https://github.com/Odisha-Students-Code-Community/.github/blob/main/README.md",
    contributionGuide: "contribute.html"
  }
];

export const projectDifficulties = {
  BEGINNER: {
    label: "Beginner",
    description: "Ideal for first-time open source contributors. Clear instructions, straightforward codebase, and supportive review."
  },
  INTERMEDIATE: {
    label: "Intermediate",
    description: "Requires familiarity with Git branching, state management, or multi-component workflows."
  },
  ADVANCED: {
    label: "Advanced",
    description: "Complex system architecture, performance optimization, or distributed toolchains."
  }
};
