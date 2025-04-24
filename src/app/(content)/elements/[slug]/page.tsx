import { Box } from "@mui/material";
import { ButtonView } from "../components/button-view";
import { CardView } from "../components/card-view";

export default function Page({ params }: { params: { slug: string } }) {
  const elementView = () => {
    switch (params.slug) {
      case "buttons":
        return <ButtonView />;
      case "cards":
        return <CardView />;
      default:
        return <Box>Buttons</Box>;
    }
  };
  return (
    <Box>
      <h1>Docs</h1>
      {elementView()}
    </Box>
  );
}
