/**
 * types.ts
 *
 * Shared TypeScript interfaces and types for the Kelsi's Grow Book app.
 * All data shapes used across components are defined here to ensure
 * type safety and a single source of truth for the data model.
 */

/**
 * Represents a single plant entry in the grow book.
 */
export interface Plant {
  /** Unique identifier for the plant entry */
  id: string;

  /** Display name of the plant (e.g. "Cucumber") */
  name: string;

  /** The date the plant was first planted */
  plantDate: Date;

  /** How many days it takes for the plant to be fully grown */
  daysToFullyGrow: number;

  /**
   * URL or imported image path for the fully-grown plant photo.
   * Set to null when no photo is available yet.
   */
  fullyGrownPicture: string | null;
}