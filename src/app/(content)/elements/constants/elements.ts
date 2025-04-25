import { PATHS } from "@/router/paths";

export const elementsArr = [
  { label: "Accordion", path: PATHS.ELEMENTS.ACCORDION },
  { label: "Button", path: PATHS.ELEMENTS.BUTTON },
  { label: "Dialog", path: PATHS.ELEMENTS.DIALOG },
].sort((a, b) => a.label.localeCompare(b.label));
