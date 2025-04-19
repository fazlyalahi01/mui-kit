"use client";
import { Iconify } from "@/components/iconify";
import { contentSidebarPathGroups } from "@/router/paths"; // Assume blocks is separate
import { TContentSidebarMode } from "@/types/content.types";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export const ContentSidebar = () => {
  const [open, setOpen] = React.useState<TContentSidebarMode>("DOCS");

  const handleClick = (mode: TContentSidebarMode) => {
    setOpen((prev) => (prev === mode ? "" : mode));
  };

  return (
    <>
      {contentSidebarPathGroups.map(({ key, label, items, path }) => {
        const hasChildren = items.length > 0;

        return (
          <React.Fragment key={key}>
            {hasChildren ? (
              <>
                <ListItemButton onClick={() => handleClick(key)}>
                  <ListItemText primary={label} />
                  <Iconify
                    icon={
                      open === key
                        ? "eva:arrow-ios-downward-fill"
                        : "eva:arrow-ios-forward-fill"
                    }
                  />
                </ListItemButton>
                <Collapse in={open === key} timeout="auto" unmountOnExit>
                  <List>
                    {items.map((item) => (
                      <ListItem key={item.path} disablePadding>
                        <Link href={item.path} legacyBehavior passHref>
                          <ListItemButton component="a">
                            <ListItemText primary={item.label} />
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
                  <ListItemButton component="a">
                    <ListItemText primary={label} />
                  </ListItemButton>
                </Link>
              </ListItem>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
