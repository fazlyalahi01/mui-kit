import Grid from "@mui/material/Grid";
import { ContentSidebar } from "./components/content-sidebar";
import { Container } from "@mui/material";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={0}
        sx={{
          borderLeft: "1px dashed gray",
          borderRight: "1px dashed gray",
          height: "calc(100vh - 124px)",
        }}
      >
        <Grid
          size={{ xs: 0, md: 2 }}
          sx={{
            display: { xs: "none", md: "block" },
            p: 2,
            borderRight: "1px dashed gray",
            // overflow: "hidden",
          }}
        >
          <ContentSidebar />
        </Grid>

        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{
            p: 2,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
