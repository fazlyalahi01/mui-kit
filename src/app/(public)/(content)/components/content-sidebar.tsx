"use client";
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
  variant?: "sidebar" | "drawer";
};

export const ContentSidebar = ({
  variant = "sidebar",
}: ContentSidebarProps) => {
  const [open, setOpen] = React.useState<TContentSidebarMode>("DOCS");
  const pathname = usePathname();
  console.log(pathname, "pathname....");

  const handleClick = (mode: TContentSidebarMode) => {
    setOpen((prev) => (prev === mode ? "" : mode));
  };

  const isActive = (path: string) => {
    console.log(path, "path......");
    return pathname === path;
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: variant === "drawer" ? 2 : 0,
        pt: variant === "drawer" ? 4 : 0,
      }}
    >
      {variant === "drawer" && (
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          <Box component="span" sx={{ color: "primary.main" }}>
            MUI
          </Box>{" "}
          KIT
        </Typography>
      )}

      <List>
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
                      {items.map((item) => {
                        return (
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
                        );
                      })}
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
    </Box>
  );
};
