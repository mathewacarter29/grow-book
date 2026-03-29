/**
 * PlantCardModal.tsx
 *
 * Displays an enlarged version of a plant card in a MUI Modal.
 * Shows the fully grown picture if available, otherwise falls back
 * to the current growth stage image via getGrowthStageImage().
 * Closeable via: X button, clicking the backdrop, or pressing Escape.
 */

import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type Plant } from "../types/types";
import { colors, borderRadius, typography } from "../theme/theme";
import { getGrowthStageImage, getDaysOld, formatPlantDate } from "../utils/plantUtils";

interface PlantCardModalProps {
  /** The plant to display, or null when the modal is closed */
  plant: Plant | null;
  /** Called when the modal should close */
  onClose: () => void;
}

const PlantCardModal: React.FC<PlantCardModalProps> = ({ plant, onClose }) => {
  if (!plant) return null;

  const imageSrc = plant.fullyGrownPicture ?? getGrowthStageImage(plant);
  const daysOld = getDaysOld(plant.plantDate);

  return (
    <Modal
      open={!!plant}
      onClose={onClose}
      aria-labelledby="plant-modal-title"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: colors.cardBackground,
          border: `5px solid ${colors.cardBorder}`,
          borderRadius: borderRadius.card,
          padding: "16px",
          width: { xs: "85vw", sm: "420px" },
          outline: "none",
          fontFamily: typography.fontFamily,
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: colors.cardBorder,
            color: colors.cardBackground,
            "&:hover": { backgroundColor: colors.cardBorder, opacity: 0.85 },
            zIndex: 1,
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {/* Image */}
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: colors.imagePlaceholder,
            borderRadius: borderRadius.imagePlaceholder,
            overflow: "hidden",
            mt: 1,
          }}
        >
          <img
            src={imageSrc}
            alt={`${plant.name} growth stage`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Info */}
        <Box sx={{ textAlign: "center", mt: 2, color: colors.cardText, fontFamily: typography.fontFamily }}>
          <p style={{ margin: "0 0 6px", fontSize: "1.8rem" }}>{plant.name}</p>
          <p style={{ margin: "0 0 4px", fontSize: "1.05rem", opacity: 0.85 }}>{daysOld} Days Old</p>
          <p style={{ margin: "0 0 4px", fontSize: "0.85rem", opacity: 0.7 }}>Planted: {formatPlantDate(plant.plantDate)}</p>
          <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>Fully grown in {plant.daysToFullyGrow} days</p>
        </Box>
      </Box>
    </Modal>
  );
};

export default PlantCardModal;