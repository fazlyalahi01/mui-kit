import { TContentSidebarMode } from "@/types/content.types";

export const docs = [
  { label: "Introduction", path: "/docs/introduction" },
  { label: "Installation", path: "/docs/installation" },
];



export const contentSidebarPathGroups: {
  key: TContentSidebarMode;
  label: string;
  items: { path: string; label: string }[];
  path?: string;
}[] = [
  { key: "DOCS", label: "Docs", items: docs },
  { key: "ELEMENTS", label: "Elements", path: "elements", items: [] },
  { key: "BLOCKS", label: "Blocks", path: "blocks", items: [] },
  // { key: "KITS", label: "Kits", items: [], path: "/kits" },
];
