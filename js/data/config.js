/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — SITE CONFIGURATION
 * ====================================================================
 */

export const siteConfig = {
  name: "Odisha Students Code Community",
  shortName: "OSCC",
  symbol: "❤️",
  established: 2026,
  tagline: "Students in Odisha building software together — in public.",
  description: "A student-driven, free technology and open-source community for students across Odisha, India. Learn, build, and contribute in public.",
  
  // Organization Details
  org: {
    name: "Odisha-Students-Code-Community",
    url: "https://github.com/Odisha-Students-Code-Community",
    websiteRepo: "https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io",
    connectRepo: "https://github.com/Odisha-Students-Code-Community/Connect"
  },

  // Brand Assets
  branding: {
    logoIcon: "assets/icons/Logo.png",
    fullLogo: "assets/icons/Full-Logo.png"
  },

  // Verified & Configured Community Social Channels
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Odisha-Students-Code-Community",
      icon: "github",
      label: "Code & Repositories",
      primary: true
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/oscc.bsky.social",
      icon: "bluesky",
      label: "Public Updates & Dev Logs"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/odisha-students-code-community/",
      icon: "linkedin",
      label: "Student Network & Opportunities"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/oscc.community/",
      icon: "instagram",
      label: "Community Moments & Spotlights"
    },
    {
      name: "WhatsApp Community",
      url: "https://chat.whatsapp.com/invite/OSCC",
      icon: "whatsapp",
      label: "Student Group Chat"
    },
    {
      name: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/OSCC",
      icon: "whatsapp-channel",
      label: "Official Announcements"
    }
  ],

  // Main Navigation Structure
  navigation: [
    { label: "Home", href: "index.html" },
    { label: "Projects", href: "projects.html" },
    { label: "How to Contribute", href: "contribute.html" },
    { label: "Community", href: "community.html" },
    { label: "Events", href: "events.html" }
  ]
};
