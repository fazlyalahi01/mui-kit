import { Box } from "@mui/material";

export default function Page({ params }: { params: { slug: string } }) {
  const elementView = () => {
    switch (params.slug) {
      case "buttons":
        return <Box>Buttons</Box>;
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
