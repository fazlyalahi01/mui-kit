"use client";
import { Icon } from "@iconify/react";
import { Box, Container, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: "background.paper",
        color: "text.secondary",
        mt: "auto",
        borderTop: "1px dashed gray",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          Built by{" "}
          <Link
            href="#"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              mx: 0.5,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            MUI KIT
          </Link>
          . The source code is available on{" "}
          <Link
            href="#"
            sx={{
              color: "primary.main",
              textDecoration: "underline",
              ml: 0.5,
              display: "inline-flex",
              alignItems: "center",
              "&:hover": {
                color: "primary.dark",
              },
            }}
          >
            GitHub
            <Icon icon="mdi:github" style={{ marginLeft: 4, fontSize: 16 }} />
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};
