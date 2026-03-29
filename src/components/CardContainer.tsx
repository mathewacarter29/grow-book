/**
 * CardContainer.tsx
 *
 * The pink rounded panel that wraps all PlantCards.
 * On desktop it displays cards in a multi-column CSS grid.
 * On mobile (max-width: 600px) it collapses to a single-column
 * layout so the user can scroll vertically through all cards.
 */

import React from "react";
import { type Plant } from "../types/types";
import { colors, borderRadius, spacing } from "../theme/theme";
import PlantCard from "./PlantCard";
import { getDaysOld } from "../utils/plantUtils";

interface CardContainerProps {
  /** The list of plants to render as cards */
  plants: Plant[];
}

const CardContainer: React.FC<CardContainerProps> = ({ plants }) => {
  return (
    <>
      {/*
       * Inline <style> injects the responsive grid rule.
       * We use a CSS custom property approach so the grid auto-fills
       * columns that are at least 300px wide — matching each PlantCard's
       * width — and collapses to a single column on narrow viewports.
       */}
      <style>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          justify-content: space-around;
          place-items: center;
          gap: ${spacing.cardGap};
        }

        @media (max-width: 600px) {
          .card-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div
        style={{
          backgroundColor: colors.cardContainerBackground,
          borderRadius: borderRadius.cardContainer,
          padding: spacing.containerPadding,
          boxSizing: "border-box",
          /* Allow the container itself to scroll vertically on mobile
             if the viewport is shorter than the card list */
          overflowY: "auto",
        }}
      >
        <div className="card-grid">
          {plants
            .sort(
              (a, b) =>
                getDaysOld(b.plantDate) / b.daysToFullyGrow -
                getDaysOld(a.plantDate) / a.daysToFullyGrow,
            )
            .map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
