/**
 * plantUtils.ts
 *
 * Pure utility / helper functions for plant-related calculations.
 * These functions contain no UI logic and are easily unit-testable.
 */

import { type Plant } from "../types/types";

// -- Stage image imports --
// Vite resolves these at build time so the paths are always correct.
import plant1 from '../assets/plants/png/plant1.png'
import plant2 from "../assets/plants/png/plant2.png";
import plant3 from "../assets/plants/png/plant3.png";
import plant4 from "../assets/plants/png/plant4.png";
import plant5 from "../assets/plants/png/plant5.png";
import plant6 from "../assets/plants/png/plant6.png";

/** Ordered array of stage images, index 0 = earliest stage. */
const STAGE_IMAGES: string[] = [
  plant1,
  plant2,
  plant3,
  plant4,
  plant5,
  plant6,
];

const TOTAL_STAGES = STAGE_IMAGES.length; // 6

/**
 * Calculates how many days have elapsed since the plant was planted,
 * relative to the current date.
 *
 * @param plantDate - The date the plant was first put in the ground.
 * @returns The number of whole days since planting (minimum 0).
 */
export function getDaysOld(plantDate: Date): number {
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffMs = now.getTime() - plantDate.getTime();
  return Math.max(0, Math.floor(diffMs / msPerDay));
}

/**
 * Formats a Date object into a human-readable string (e.g. "March 19, 2024").
 *
 * @param date - The date to format.
 * @returns A locale-formatted date string.
 */
export function formatPlantDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Determines whether a plant has reached full maturity based on how
 * many days it has been growing versus its expected grow time.
 *
 * @param plant - The plant to evaluate.
 * @returns True if the plant is fully grown, false otherwise.
 */
export function isFullyGrown(plant: Plant): boolean {
  return getDaysOld(plant.plantDate) >= plant.daysToFullyGrow;
}

/**
 * Returns the image path that should be shown for a plant based on
 * how far along it is in its growth cycle.
 *
 * Growth is divided into 6 equal stages:
 *   - Stage 1: 0 – 1/6 of daysToFullyGrow  → plant1.png
 *   - Stage 2: 1/6 – 2/6                   → plant2.png
 *   - ...
 *   - Stage 6: 5/6 – fully grown           → plant6.png
 *
 * Once the plant IS fully grown:
 *   - If a fullyGrownPicture URL is provided, that is returned.
 *   - Otherwise plant6.png is used as the fallback.
 *
 * @param plant - The plant to evaluate.
 * @returns The resolved image URL/path to display.
 */
export function getGrowthStageImage(plant: Plant): string {
  const daysOld = getDaysOld(plant.plantDate);

  // If the plant has reached or passed its full-growth threshold,
  // prefer the custom fullyGrownPicture; fall back to the last stage.
  if (daysOld >= plant.daysToFullyGrow) {
    return plant.fullyGrownPicture ?? STAGE_IMAGES[TOTAL_STAGES - 1];
  }

  // progress: a value in [0, 1) representing how far along the plant is.
  const progress = daysOld / plant.daysToFullyGrow;

  // Map progress onto stages 1-6, then convert to a 0-based array index.
  // Math.ceil maps (0, 1/6] → 1, (1/6, 2/6] → 2, ..., (5/6, 1) → 6.
  // We clamp to at least 1 so that daysOld === 0 (progress === 0) still
  // shows stage 1 rather than stage 0 (which doesn't exist).
  const stage = Math.max(1, Math.ceil(progress * TOTAL_STAGES));
  const index = stage - 1; // convert to 0-based

  return STAGE_IMAGES[index];
}