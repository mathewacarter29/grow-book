/**
 * plantsData.ts
 *
 * Static data source for all plants displayed in Kelsi's Grow Book.
 * To add a new plant, simply append a new object to the PLANTS array.
 * No other files need to be changed — the UI will automatically render
 * a new card for each entry in this list.
 */

import { type Plant } from "../types/types";
import tomato from "../assets/plants/png/tomato.png";
import hotPepper from "../assets/plants/png/hot-pepper.png";

/**
 * The master list of plants in the grow book.
 * Each entry corresponds to one card rendered in the UI.
 */
export const PLANTS: Plant[] = [
  {
    id: "1",
    name: "Tomato",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: tomato,
  },
  {
    id: "2",
    name: "Basil",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "3",
    name: "Marigold",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "4",
    name: "Hot Pepper",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: hotPepper,
  },
  {
    id: "5",
    name: "Echinacea",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "6",
    name: "Thyme",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "7",
    name: "Oregano",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "8",
    name: "Green Bean",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "9",
    name: "Nasturtium",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "10",
    name: "Dill",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "11",
    name: "Cucumber",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "12",
    name: "Cilantro",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "13",
    name: "Radish",
    plantDate: new Date("2026-03-29T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
  {
    id: "14",
    name: "Lettuce",
    plantDate: new Date("2026-03-29T00:00:00-04:00"),
    daysToFullyGrow: 55,
    fullyGrownPicture: null,
  },
];
