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
  /** The plant data to display inside this card */
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
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
  };

  return (
    <div style={cardStyle}>
      <PlantImage
        fullyGrownPicture={plant.fullyGrownPicture}
        plantName={plant.name}
      />
      <PlantCardInfo plant={plant} />
    </div>
  );
};

export default PlantCard;