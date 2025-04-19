import { Box } from "@mui/material";
import { HeroSection } from "./components/hero-section";
import { ComponentOverview } from "./components/components-overview";

export const RootView = () => {
  return (
    <Box>
      <HeroSection />
      <ComponentOverview />
    </Box>
  );
};
