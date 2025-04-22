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
      spacing={0}
      sx={{
        borderLeft: "1px dashed gray",
        borderRight: "1px dashed gray",
        height: "calc(100vh - 124px)",
      }}
    >
      {/* Sidebar (only visible on md and above) */}
      <Grid
        size={{ xs: 0, md: 3 }}
        sx={{
          display: { xs: "none", md: "block" },
          p: 2,
          borderRight: "1px dashed gray",
        }}
      >
        <ContentSidebar />
      </Grid>

      {/* Main content */}
      <Grid
        size={{ xs: 12, md: 9 }}
        sx={{
          p: 2,
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
