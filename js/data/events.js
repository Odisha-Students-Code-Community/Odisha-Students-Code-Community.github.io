/**
 * ====================================================================
 * ODISHA STUDENTS CODE COMMUNITY (OSCC) — EVENTS DATA
 * ====================================================================
 * Strict "No Fake Information" Policy:
 * Only real, confirmed community workshops and events are listed here.
 * When none are scheduled, the UI displays a clean engineered empty state.
 */

export const eventsData = [
  // Populated when verified events/workshops are announced
];

export const eventsCategories = [
  { id: "all", label: "All Items" },
  { id: "workshop", label: "Workshops" },
  { id: "hackathon", label: "Hackathons" },
  { id: "meetup", label: "Meetups" },
  { id: "opensource", label: "Open Source Programs" }
];

export const eventSubmission = {
  title: "Host or Propose a Workshop",
  description: "Are you a student lead or open-source developer wanting to organize a technical workshop, demo session, or hackathon squad under OSCC?",
  actionUrl: "https://github.com/Odisha-Students-Code-Community/Connect/issues/new?title=Event+Proposal"
};
