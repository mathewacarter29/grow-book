/**
 * theme.ts
 *
 * Central theme configuration for Kelsi's Grow Book app.
 * All colors, spacing, and shared design tokens live here.
 * Import this file anywhere you need design values to avoid
 * hard-coding hex codes or magic numbers across components.
 */

export const colors = {
  /** Main page background */
  background: "#FFD8B5",

  /** Background of the scrollable card container panel */
  cardContainerBackground: "#EF898A",

  /** Background color of each plant card */
  cardBackground: "#346640",

  /** Border / accent color of each plant card */
  cardBorder: "#FAC021",

  /** Light color used for text on dark card backgrounds */
  cardText: "#FFFFFF",

  /** Dark color used for the app title on the light background */
  titleText: "#1a1a1a",

  /** Placeholder image area background (inside each card) */
  imagePlaceholder: "#FFFFFF",
} as const;

export const typography = {
  /** Primary font family used for ALL text in the app */
  fontFamily: "'Instrument Serif', serif",
} as const;

export const borderRadius = {
  card: "12px",
  cardContainer: "20px",
  imagePlaceholder: "6px",
} as const;

export const spacing = {
  cardGap: "24px",
  containerPadding: "28px",
} as const;