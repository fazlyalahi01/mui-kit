import { Box, Typography } from "@mui/material";
import type { Metadata } from "next";
import { ButtonView } from "./button-view";

export const metadata: Metadata = {
  title: "Button | MUI KIT",
  description: "We've covered what mui is missing.",
  keywords: ["button", "UI components", "design system", "MUI", "Next.js"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  robots: "index, follow",
};

export default function Page() {
  return (
    <Box>
      <Typography variant="h4">Button</Typography>
      <Typography variant="body1">
        We have multiple version of mui buttons.{" "}
      </Typography>
      <Box>
        <ButtonView />
      </Box>
    </Box>
  );
}
