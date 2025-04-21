"use client";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PathSVG from "./PathSVG";

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 4, md: 8 }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mt: 8,
        mb: 6,
      }}
    >
      {/* Left text box */}
      <Box sx={{ maxWidth: 800, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: -60,
            left: 0,
            zIndex: 1,
          }}
        >
          <PathSVG />
        </Box>

        <Typography
          variant="h1"
          gutterBottom
          sx={{
            "& span": { color: "primary.main" },
          }}
        >
          We&apos;ve covered, what <span>Material UI</span> is missing!
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          <Chip label="REACT" size="small" />
          <Chip label="TYPESCRIPT" size="small" />
          <Chip label="MATERIAL DESIGN" size="small" />
        </Stack>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4, fontSize: "1.1rem" }}
        >
          Material UI is a comprehensive library of components that features
          implementation of Google&apos;s Material Design system, providing
          ready-to-use UI elements for creating beautiful and responsive React
          applications.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Stack>
      </Box>

      {/* Right image box */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 600,
          height: isMobile ? 400 : 500,
        }}
      >
        {/* Floating UI components */}
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: "60%",
            height: "40%",
            borderRadius: 2,
            p: 2,
            zIndex: 3,
            transform: "rotate(-5deg)",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Dashboard
          </Typography>
          <Box
            sx={{
              height: 10,
              width: "80%",
              bgcolor: "primary.light",
              borderRadius: 1,
              mb: 1,
            }}
          />
          <Box
            sx={{
              height: 10,
              width: "60%",
              bgcolor: "secondary.light",
              borderRadius: 1,
              mb: 1,
            }}
          />
          <Box
            sx={{
              height: 10,
              width: "70%",
              bgcolor: "grey.300",
              borderRadius: 1,
            }}
          />
        </Paper>

        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "30%",
            right: "5%",
            width: "50%",
            height: "35%",
            borderRadius: 2,
            p: 2,
            zIndex: 2,
            transform: "rotate(3deg)",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            User Profile
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Box
              sx={{
                height: 30,
                width: 30,
                bgcolor: "primary.main",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                height: 10,
                width: "60%",
                bgcolor: "grey.300",
                borderRadius: 1,
                alignSelf: "center",
              }}
            />
          </Stack>
          <Box
            sx={{
              height: 10,
              width: "80%",
              bgcolor: "grey.300",
              borderRadius: 1,
              mb: 1,
            }}
          />
          <Box
            sx={{
              height: 10,
              width: "70%",
              bgcolor: "grey.300",
              borderRadius: 1,
            }}
          />
        </Paper>

        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "15%",
            width: "55%",
            height: "30%",
            borderRadius: 2,
            p: 2,
            zIndex: 1,
            transform: "rotate(2deg)",
            bgcolor: theme.palette.primary.main,
            color: "white",
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Analytics
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "60%",
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "15%",
                  bgcolor: "rgba(255,255,255,0.3)",
                  borderRadius: "2px",
                  alignSelf: "flex-end",
                  height: `${30 + item * 10}%`,
                }}
              />
            ))}
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};
