"use client";
import { Iconify } from "@/components/iconify";
import { contentSidebarPathGroups } from "@/router/paths"; // Assume blocks is separate
import { TContentSidebarMode } from "@/types/content.types";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ContentSidebarProps = {
  variant?: 'sidebar' | 'drawer';
};

export const ContentSidebar = ({ variant = 'sidebar' }: ContentSidebarProps) => {
  const [open, setOpen] = React.useState<TContentSidebarMode>("DOCS");
  const pathname = usePathname();

  const handleClick = (mode: TContentSidebarMode) => {
    setOpen((prev) => (prev === mode ? "" : mode));
  };

  return (
    <Box
      sx={{
        width: variant === "drawer" ? "100%" : 280,
        p: variant === "drawer" ? 2 : 0,
        pt: variant === "drawer" ? 4 : 0,
      }}
    >
      {/* Render header in drawer if needed */}
      {variant === "drawer" && (
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          <Box component="span" sx={{ color: "primary.main" }}>MUI</Box> KIT
        </Typography>
      )}

      <List>
        {contentSidebarPathGroups.map(({ key, label, items, path }) => {
          const hasChildren = items.length > 0;
          const isChildActive = items.some((item) => pathname === item.path);
          const isActive = pathname === path || isChildActive;

          return (
            <React.Fragment key={key}>
              {hasChildren ? (
                <>
                  <ListItemButton
                    onClick={() => handleClick(key)}
                    sx={{
                      backgroundColor: isActive ? "action.selected" : "inherit",
                      borderLeft: isActive ? "3px solid #1976d2" : "3px solid transparent",
                    }}
                  >
                    <ListItemText primary={label} />
                    <Iconify
                      icon={
                        open === key
                          ? "eva:arrow-ios-downward-fill"
                          : "eva:arrow-ios-forward-fill"
                      }
                    />
                  </ListItemButton>
                  <Collapse
                    in={open === key}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                      borderLeft: "2px dashed #ccc",
                      ml: 1.5,
                      pl: 1,
                    }}
                  >
                    <List>
                      {items.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                          <ListItem key={item.path} disablePadding sx={{ pl: 1 }}>
                            <Link href={item.path} legacyBehavior passHref>
                              <ListItemButton
                                component="a"
                                selected={isActive}
                                sx={{
                                  borderLeft: isActive
                                    ? "3px solid #1976d2"
                                    : "3px solid transparent",
                                  backgroundColor: isActive
                                    ? "action.selected"
                                    : "inherit",
                                }}
                              >
                                <ListItemText primary={item.label} />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem key={path || key} disablePadding>
                  <Link href={path || ""} legacyBehavior passHref>
                    <ListItemButton
                      component="a"
                      sx={{
                        borderLeft: isActive
                          ? "3px solid #1976d2"
                          : "3px solid transparent",
                        backgroundColor: isActive
                          ? "action.selected"
                          : "inherit",
                      }}
                    >
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
};

