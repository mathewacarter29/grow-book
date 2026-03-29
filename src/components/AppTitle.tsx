/**
 * AppTitle.tsx
 *
 * Displays the "Kelsi's Grow Book" title at the top of the page.
 * It is a fixed header so it remains visible as the user scrolls
 * through the plant cards on mobile.
 */

import React from "react";
import { colors, typography } from "../theme/theme";
import vine from '../assets/vine.png';

const AppTitle: React.FC = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: colors.background,
        padding: "2vw 0 1vw",
        textAlign: "center",
        /* Subtle shadow to separate the title from scrolled content */
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          color: colors.titleText,
          fontFamily: typography.fontFamily,
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        Kelsi's Grow Book
      </h1>
      <img src={vine} alt="line break" />
    </header>
  );
};

export default AppTitle;