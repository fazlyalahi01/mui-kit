import { PATHS } from "./paths";
import { TContentSidebarMode } from "@/types/content.types";

export const docs = [
  { label: "Introduction", path: PATHS.DOCS.INTRO },
  { label: "Installation", path: PATHS.DOCS.INSTALL },
];

export const contentSidebarPathGroups: {
  key: TContentSidebarMode;
  label: string;
  items: { path: string; label: string }[];
  path?: string;
}[] = [
  { key: "DOCS", label: "Docs", items: docs, path: PATHS.DOCS.ROOT },
  { key: "ELEMENTS", label: "Elements", path: PATHS.ELEMENTS.ROOT, items: [] },
  { key: "BLOCKS", label: "Blocks", path: PATHS.BLOCKS.ROOT, items: [] },
  {
    key: "TEMPLATES",
    label: "Templates",
    path: PATHS.TEMPLATES.ROOT,
    items: [],
  },
  {
    key: "DASHBOARD",
    label: "Dashboard",
    path: PATHS.DASHBOARD.ROOT,
    items: [],
  },
  { key: "FORM", label: "Form", path: PATHS.FORM.ROOT, items: [] },
];

export const navItems = [
  { label: "Docs", path: PATHS.DOCS.INSTALL },
  { label: "Kit", path: PATHS.ELEMENTS.ROOT },
  { label: "Contribute ♡", path: PATHS.CONTRIBUTE },
];
