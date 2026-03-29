/**
 * App.tsx
 *
 * Root application component for Kelsi's Grow Book.
 * Composes the AppTitle and CardContainer, passing the static
 * PLANTS data array down to the card grid.
 */

import React from "react";
import { colors, typography } from "./theme/theme";
import { PLANTS } from "./data/plantsData";
import AppTitle from "./components/AppTitle";
import CardContainer from "./components/CardContainer";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.background,
        fontFamily: typography.fontFamily,
        boxSizing: "border-box",
      }}
    >
      {/* Sticky page title */}
      <AppTitle />

      {/* Main scrollable content area */}
      <main
        style={{
          padding: "2vw 3vw 4vw",
          // maxWidth: "1400px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <CardContainer plants={PLANTS} />
      </main>
    </div>
  );
};

export default App;