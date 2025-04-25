"use client";
import { Logo } from "@/components/core/logo";
import { contentSidebarPathGroups } from "@/router/router";
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
  variant?: "sidebar" | "drawer";
};

export const ContentSidebar = ({
  variant = "sidebar",
}: ContentSidebarProps) => {
  const [open, setOpen] = React.useState("DOCS");
  const pathname = usePathname();

  const handleClick = (mode: TContentSidebarMode) => {
    setOpen((prev) => (prev === mode ? "" : mode));
  };

  const isActive = (path: string) => pathname === path;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: variant === "drawer" ? 2 : 0,
        pt: variant === "drawer" ? 4 : 0,
      }}
    >
      {variant === "drawer" && (
        <Box sx={{ ml: 2 }}>
          <Logo />
        </Box>
      )}

      <List sx={{ flexGrow: 1 }}>
        {contentSidebarPathGroups.map(({ key, label, items, path }) => {
          const hasChildren = items.length > 0;

          return (
            <React.Fragment key={key}>
              {hasChildren ? (
                <>
                  <ListItemButton onClick={() => handleClick(key)}>
                    <ListItemText primary={label} />
                  </ListItemButton>
                  <Collapse
                    in={open === key}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                      ml: 1.5,
                    }}
                  >
                    <List>
                      {items.map((item) => (
                        <ListItem
                          key={item.path}
                          disablePadding
                          sx={{ pl: 1 }}
                        >
                          <Link href={item.path} legacyBehavior passHref>
                            <ListItemButton>
                              <ListItemText
                                primary={item.label}
                                slotProps={{
                                  primary: {
                                    sx: {
                                      color: isActive(item.path)
                                        ? "primary.main"
                                        : "text.primary",
                                    },
                                  },
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem key={path || key} disablePadding>
                  <Link href={path || ""} legacyBehavior passHref>
                    <ListItemButton>
                      <ListItemText
                        primary={label}
                        slotProps={{
                          primary: {
                            sx: {
                              color: isActive(path || "")
                                ? "primary.main"
                                : "text.primary",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )}
            </React.Fragment>
          );
        })}
      </List>

      <Box
        sx={{
          mt: "auto",
          p: 2,
          bgcolor: "background.default",
          border: "1px dotted gray",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Want to contribute?
        </Typography>
        <Link href="/contribute" passHref>
          <Typography
            variant="body2"
            component="a"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Join our community!
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};