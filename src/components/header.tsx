"use client";
import { Icon } from "@iconify/react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Iconify } from "./iconify";
import { useColorMode } from "@/providers/app-provider";
import Link from "next/link";

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

  // Mobile drawer content
  const drawer = (
    <Box onClick={handleCloseNavMenu} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        <Box component="span" sx={{ color: "primary.main" }}>
          Material
        </Box>
        UI
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={handleNavigate(page)}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              // bgcolor: "primary.main",
              color: "white",
              my: 1,
              mx: 2,
              borderRadius: 1,
            }}
          >
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href={"/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
              MUI
            </Box>{" "}
            KIT
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              Material
            </Box>{" "}
            UI
          </Typography>

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
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
