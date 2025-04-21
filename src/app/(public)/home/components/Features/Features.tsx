import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Modern MUI Designs",
    desc: "Explore a growing collection of clean, production-ready Material UI components built for modern web apps.",
    icon: <Icon icon="mdi:palette-outline" width={24} height={24} />,
  },
  {
    title: "Developer Friendly",
    desc: "Easily integrate and customize components with your existing MUI project — fast setup and easy code.",
    icon: <Icon icon="mdi:code-tags" width={24} height={24} />,
  },
  {
    title: "Fully Responsive",
    desc: "Each component is responsive by default, ensuring a great experience across all devices and screen sizes.",
    icon: <Icon icon="mdi:devices" width={24} height={24} />,
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ mb: 8, px: 3 }}>
      <Box textAlign="center" maxWidth={600} mx="auto" mb={6}>
        <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
          Build beautiful UIs with MUi Kit
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A developer-focused Material UI component kit built for speed,
          flexibility, and modern design standards.
        </Typography>
      </Box>

      {/* cards */}
      <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
        {features.map((feature, index) => (
          <Box key={index} width={{ xs: "100%", sm: "48%", md: "30%" }}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
