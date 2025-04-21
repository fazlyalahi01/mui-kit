"use client"
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";


const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

// Sample data
const testimonials = [
  {
    username: "Sarah Johnson",
    handle: "@sarahj_dev",
    review: "MUI Kit is a game-changer! The components are so easy to use and look amazing.",
  },
  {
    username: "Mike Chen",
    handle: "@mikechen_ui",
    review: "I’m blown away by MUI Kit’s animations. Building interfaces has never been this fun!",
  },
  {
    username: "Emily Davis",
    handle: "@emilyd_codes",
    review: "The best UI library I’ve used. MUI Kit saves me so much time! 🚀",
  },
  {
    username: "Alex Turner",
    handle: "@alexturner_dev",
    review: "MUI Kit’s responsive design is top-notch. My apps look great on every device!",
  },
  {
    username: "Priya Sharma",
    handle: "@priya_sharma",
    review: "Loving the customization options in MUI Kit. It’s perfect for my projects! 💖",
  },
  {
    username: "James Carter",
    handle: "@jamesc_dev",
    review: "Have you tried MUI Kit yet? It’s packed with awesome features. Highly recommend!",
  },
];

const TestimonialCard = ({ username, handle, review }: { username: string; handle: string; review: string }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        backdropFilter: "blur(8px)",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(30, 30, 30, 0.9)" : "rgba(255, 255, 255, 0.1)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
        color: theme.palette.mode === "dark" ? "white" : "text.primary",
        minHeight: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary">
          {handle}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {review}
        </Typography>
      </Box>
      <Typography variant="subtitle2" fontWeight={600} sx={{ mt: 2 }}>
        {username}
      </Typography>
    </Paper>
  );
};

export const Testimonials = () => {
  return (
    <Box sx={{ py: 8, textAlign: "center", bgcolor: "background.default" }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Loved by thousands of developers
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Here&apos;s what some of our users have to say about MUI Kit.
      </Typography>

      {/* Testimonial Grid */}
      <Box
        sx={{
          position: "relative",
          height: 400, 
          overflow: "hidden",
          display: "flex",
          justifyContent: "center", 
          gap: { xs: 2, md: 4 }, 
          maxWidth: 900, 
          mx: "auto", 
        }}
      >
        {/* Column 1 */}
        <Box
          sx={{
            width: { xs: 200, md: 250 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            animation: `${slideUp} 15s linear infinite`,
          }}
        >
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[0]} /> 
          <TestimonialCard {...testimonials[3]} />
        </Box>

        {/* Column 2 */}
        <Box
          sx={{
            width: { xs: 200, md: 250 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            animation: `${slideUp} 18s linear infinite`,
            mt: { xs: 4, md: 6 }, 
          }}
        >
          <TestimonialCard {...testimonials[1]} />
          <TestimonialCard {...testimonials[4]} />
          <TestimonialCard {...testimonials[1]} /> 
          <TestimonialCard {...testimonials[4]} />
        </Box>

        {/* Column 3 */}
        <Box
          sx={{
            width: { xs: 200, md: 250 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            animation: `${slideUp} 20s linear infinite`,
            mt: { xs: 2, md: 3 }, 
          }}
        >
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[2]} /> 
          <TestimonialCard {...testimonials[5]} />
        </Box>
      </Box>
    </Box>
  );
};