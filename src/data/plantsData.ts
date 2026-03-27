/**
 * plantsData.ts
 *
 * Static data source for all plants displayed in Kelsi's Grow Book.
 * To add a new plant, simply append a new object to the PLANTS array.
 * No other files need to be changed — the UI will automatically render
 * a new card for each entry in this list.
 */

import { type Plant } from "../types/types";

/**
 * The master list of plants in the grow book.
 * Each entry corresponds to one card rendered in the UI.
 */
export const PLANTS: Plant[] = [
  {
    id: "cucumber-1",
    name: "Cucumber",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "cilantro-1",
    name: "Cilantro",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 45,
    fullyGrownPicture: null,
  },
  {
    id: "jalapeno-1",
    name: "Jalapeño",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 75,
    fullyGrownPicture: null,
  },
  {
    id: "tomato-1",
    name: "Tomato",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 70,
    fullyGrownPicture: null,
  },
  {
    id: "cucumber-1",
    name: "Cucumber",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "cilantro-1",
    name: "Cilantro",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 45,
    fullyGrownPicture: null,
  },
  {
    id: "jalapeno-1",
    name: "Jalapeño",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 75,
    fullyGrownPicture: null,
  },
  {
    id: "tomato-1",
    name: "Tomato",
    plantDate: new Date("2024-03-19"),
    daysToFullyGrow: 70,
    fullyGrownPicture: null,
  },
];