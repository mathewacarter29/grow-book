/**
 * PlantImage.tsx
 *
 * Renders the image section at the top of a plant card.
 * Delegates image selection entirely to getGrowthStageImage(), which
 * maps the plant's current age to one of the six stage PNGs (or to
 * the fullyGrownPicture once the plant has matured).
 */

import React from "react";
import { colors, borderRadius } from "../theme/theme";
import { type Plant } from "../types/types";
import { getGrowthStageImage } from "../utils/plantUtils";

interface PlantImageProps {
  /** The full plant object; used to calculate which stage image to show */
  plant: Plant;
}

const PlantImage: React.FC<PlantImageProps> = ({ plant }) => {
  const imageSrc = getGrowthStageImage(plant);

  const containerStyle: React.CSSProperties = {
    width: "100%",
    aspectRatio: "1 / 1",
    backgroundColor: colors.imagePlaceholder,
    borderRadius: borderRadius.imagePlaceholder,
    overflow: "hidden",
    flexShrink: 0,
  };

  return (
    <div style={containerStyle}>
      <img
        src={imageSrc}
        alt={`${plant.name} growth stage`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default PlantImage;