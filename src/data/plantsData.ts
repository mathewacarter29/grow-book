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
import marigold from "../assets/plants/png/marigold.png";
import cucumber from "../assets/plants/png/cucumber.png";
import lettuce from "../assets/plants/png/lettuce.png";
import radish from "../assets/plants/png/radish.png";
import echinacea from "../assets/plants/png/echinacea.png";
import basil from "../assets/plants/png/basil.png";
import greenBean from "../assets/plants/png/green-bean.png";
import dill from "../assets/plants/png/dill.png";
import cilantro from "../assets/plants/png/cilantro.png";

/**
 * The master list of plants in the grow book.
 * Each entry corresponds to one card rendered in the UI.
 */
export const PLANTS: Plant[] = [
  {
    id: "1",
    name: "Tomato",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 65,
    fullyGrownPicture: tomato,
  },
  {
    id: "2",
    name: "Basil",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 60,
    fullyGrownPicture: basil,
  },
  {
    id: "3",
    name: "Marigold",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 60,
    fullyGrownPicture: marigold,
  },
  {
    id: "4",
    name: "Hot Pepper",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 69,
    fullyGrownPicture: hotPepper,
  },
  {
    id: "5",
    name: "Echinacea",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 80,
    fullyGrownPicture: echinacea,
  },
  {
    id: "6",
    name: "Thyme",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 180,
    fullyGrownPicture: null,
  },
  {
    id: "7",
    name: "Oregano",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 90,
    fullyGrownPicture: null,
  },
  {
    id: "8",
    name: "Green Bean",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 50,
    fullyGrownPicture: greenBean,
  },
  {
    id: "9",
    name: "Nasturtium",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 60,
    fullyGrownPicture: null,
  },
  {
    id: "10",
    name: "Dill",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 40,
    fullyGrownPicture: dill,
  },
  {
    id: "11",
    name: "Cucumber",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 52,
    fullyGrownPicture: cucumber,
  },
  {
    id: "12",
    name: "Cilantro",
    plantDate: new Date("2026-03-28T00:00:00-04:00"),
    daysToFullyGrow: 60,
    fullyGrownPicture: cilantro,
  },
  {
    id: "13",
    name: "Radish",
    plantDate: new Date("2026-04-15T00:00:00-04:00"),
    daysToFullyGrow: 22,
    fullyGrownPicture: radish,
  },
  {
    id: "14",
    name: "Lettuce",
    plantDate: new Date("2026-04-15T00:00:00-04:00"),
    daysToFullyGrow: 30,
    fullyGrownPicture: lettuce,
  },
];
