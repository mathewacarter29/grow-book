/**
 * plantUtils.ts
 *
 * Pure utility / helper functions for plant-related calculations.
 * These functions contain no UI logic and are easily unit-testable.
 */

import { type Plant } from "../types/types";

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