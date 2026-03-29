/**
 * PlantCardInfo.tsx
 *
 * Renders the text information section displayed at the bottom of each
 * plant card: the plant's name, how many days old it is, and the
 * expected number of days until it is fully grown.
 */

import React from "react";
import { colors } from "../theme/theme";
import { getDaysOld, formatPlantDate } from "../utils/plantUtils";
import { type Plant } from "../types/types";

interface PlantCardInfoProps {
  /** The plant whose info should be displayed */
  plant: Plant;
}

const PlantCardInfo: React.FC<PlantCardInfoProps> = ({ plant }) => {
  const daysOld = getDaysOld(plant.plantDate);

  const wrapperStyle: React.CSSProperties = {
    padding: "12px 8px 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
  };

  const nameStyle: React.CSSProperties = {
    color: colors.cardText,
    fontSize: "1.4rem",
    margin: 0,
    textAlign: "center",
  };

  const subtitleStyle: React.CSSProperties = {
    color: colors.cardText,
    fontSize: "0.95rem",
    margin: 0,
    opacity: 0.85,
    textAlign: "center",
  };

  const dateStyle: React.CSSProperties = {
    color: colors.cardText,
    fontSize: "0.8rem",
    margin: 0,
    opacity: 0.7,
    textAlign: "center",
  };

  return (
    <div style={wrapperStyle}>
      <p style={nameStyle}>{plant.name}</p>
      <p style={subtitleStyle}>{`${daysOld} Day${daysOld === 1 ? '' : 's'} Old`}</p>
      <p style={dateStyle}>Planted: {formatPlantDate(plant.plantDate)}</p>
      <p style={dateStyle}>Fully grown in {plant.daysToFullyGrow} days</p>
    </div>
  );
};

export default PlantCardInfo;