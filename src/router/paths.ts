import { TContentSidebarMode } from "@/types/content.types";

export const docs = [
  { label: "Trash", path: "/docs/trash" },
  { label: "Spam", path: "/docs/spam" },
];

export const elementPaths = [
  { label: "Buttons", path: "/elements/buttons" },
  { label: "Spam", path: "/elements/spam" },
];


export const blockPaths = [
  { label: "Trash", path: "/kits/trash" },
  { label: "Spam", path: "/kits/spam" },
];
export const kitPaths = [
  { label: "Trash", path: "/kits/trash" },
  { label: "Spam", path: "/kits/spam" },
];

export const contentSidebarPathGroups: {
  key: TContentSidebarMode;
  label: string;
  items: { path: string; label: string }[];
  path?: string;
}[] = [
  { key: "DOCS", label: "Docs", items: docs },
  { key: "ELEMENTS", label: "Elements", items: elementPaths },
  { key: "BLOCKS", label: "Blocks", items: blockPaths }, 
  // { key: "KITS", label: "Kits", items: [], path: "/kits" }, 
];
