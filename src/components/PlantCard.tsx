/**
 * PlantCard.tsx
 *
 * Composes a single plant card by combining the PlantImage and
 * PlantCardInfo sub-components. The card uses the green background
 * and gold border from the Figma design. Each card is self-contained
 * and receives only a Plant object as its prop.
 */

import React from "react";
import { type Plant } from "../types/types";
import { colors, borderRadius } from "../theme/theme";
import PlantImage from "./PlantImage";
import PlantCardInfo from "./PlantCardInfo";

interface PlantCardProps {
  plant: Plant;
  /** Called when the card is clicked */
  onClick: (plant: Plant) => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: colors.cardBackground,
    border: `4px solid ${colors.cardBorder}`,
    borderRadius: borderRadius.card,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    /* Fixed width so all cards are uniform; on mobile the container
       switches to a single-column layout via CSS in CardContainer */
    width: "300px",
    flexShrink: 0,
    boxSizing: "border-box",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle} onClick={() => onClick(plant)}>
      <PlantImage plant={plant} />
      <PlantCardInfo plant={plant} />
    </div>
  );
};

export default PlantCard;