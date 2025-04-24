import { TContentSidebarMode } from "@/types/content.types";

export const docs = [
  { label: "Introduction", path: "/docs/intro" },
  { label: "Installation", path: "/docs/installation" },
];

export const contentSidebarPathGroups: {
  key: TContentSidebarMode;
  label: string;
  items: { path: string; label: string }[];
  path?: string;
}[] = [
  { key: "DOCS", label: "Docs", items: docs },
  { key: "ELEMENTS", label: "Elements", path: "/elements", items: [] },
  { key: "BLOCKS", label: "Blocks", path: "/blocks", items: [] },
  { key: "TEMPLATES", label: "Templates", path: "/templates", items: [] },
  { key: "DASHBOARD", label: "Dashboard", path: "/dashboard", items: [] },
  { key: "FORM", label: "Form", path: "/form", items: [] },
];

export const navItems = [
  { label: "Docs", path: "/docs/installation" },
  { label: "Kit", path: "/elements" },
  { label: "Contribute ♡", path: "/contribute" },
];
