"use client";
import { ContentSidebar } from "@/app/(public)/(content)/components/content-sidebar";
import { useColorMode } from "@/providers/app-provider";
import { Icon } from "@iconify/react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "./core/logo";
import { Iconify } from "./iconify";

// Navigation items
const pages = ["Docs", "Kits", "Contact"];

export const Header = () => {
  const router = useRouter();
  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();
  console.log(mode, " mode");
  console.log(toggleColorMode, " toggleColorMode");

  const handleOpenNavMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseNavMenu = () => {
    setMobileOpen(false);
  };

  const handleNavigate = (page: string) => () => {
    console.log(page, " page");
    router.push(`/${page.toLowerCase()}`);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px dashed gray",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Logo />
          </Box>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Icon icon="mdi:menu" />
            </IconButton>
          </Box>

          {/* Logo - Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo />
          </Box>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleNavigate(page)}
                sx={{ mx: 1, color: "text.primary" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Desktop action buttons */}
          <Stack gap={2} direction={"row"}>
            <Iconify icon="mdi:github" />
            <span onClick={toggleColorMode}>
              <Iconify
                icon={
                  mode === "light" ? "tdesign:mode-dark" : "iconoir:sun-light"
                }
              />
            </span>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleCloseNavMenu}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "transparent",
            },
          },
        }}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <ContentSidebar variant="drawer" />
      </Drawer>
    </AppBar>
  );
};
