/**
 * PlantImage.tsx
 *
 * Renders the image section at the top of a plant card.
 * If a fully-grown picture URL is provided it renders the image;
 * otherwise it renders a white placeholder rectangle — matching
 * the blank-photo aesthetic shown in the Figma design.
 */

import React from "react";
import { colors, borderRadius } from "../theme/theme";

interface PlantImageProps {
  /** URL or path to the fully-grown plant photo, or null if unavailable */
  fullyGrownPicture: string | null;
  /** Plant name used as the image alt text for accessibility */
  plantName: string;
}

const PlantImage: React.FC<PlantImageProps> = ({
  fullyGrownPicture,
  plantName,
}) => {
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
      {fullyGrownPicture ? (
        <img
          src={fullyGrownPicture}
          alt={`Fully grown ${plantName}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : null}
    </div>
  );
};

export default PlantImage;