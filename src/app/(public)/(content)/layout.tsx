import Grid from "@mui/material/Grid";
import { ContentSidebar } from "./components/content-sidebar";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ borderLeft: "1px dashed gray", borderRight: "1px dashed gray",  height: "calc(100vh - 124px)" }}
    >
      <Grid size={2} sx={{ p: 2 }}>
        <ContentSidebar />
      </Grid>
      <Grid size={10} sx={{ borderLeft: "1px dashed gray", p: 2 }}>
        {children}
      </Grid>
    </Grid>
  );
}
