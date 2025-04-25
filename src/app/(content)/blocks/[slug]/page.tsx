import { Box } from "@mui/material";
import { AccordionView } from "../components/accordion-view";
import { ButtonView } from "../components/button-view";

export default function Page({ params }: { params: { slug: string } }) {
  const elementView = () => {
    switch (params.slug) {
      case "accordion":
        return <AccordionView />;
      case "button":
        return <ButtonView />;
      default:
        return <Box>Buttons</Box>;
    }
  };
  return <Box>{elementView()}</Box>;
}
