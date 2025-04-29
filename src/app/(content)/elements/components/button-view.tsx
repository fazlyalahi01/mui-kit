"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import { Button1Preview } from "../preview/button-preview";
import { OnThisPage } from "@/components/on-this-page";

// Reusable OnThisPage component

export const ButtonView = () => {
  // Define sections for this page
  const sections = [
    { title: "#1 Icon Buttons", id: "section-1" },
    { title: "#1 Icon Buttons", id: "section-2" },
    { title: "#1 Icon Buttons", id: "section-3" },
    { title: "#1 Icon Buttons", id: "section-4" },
    { title: "#1 Icon Buttons", id: "section-5" },
    // Add more sections here for other button types or future content
  ];

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 10 }}>
        <Box>
          <CustomBreadCrumbs
            pathArr={[
              { label: "Elements", path: "/elements" },
              { label: "Button", path: "" },
            ]}
          />
          <PageTitle
            title="Button"
            description="Material UI core button with extended design, and functionality."
          />
          <Divider sx={{ my: 4 }} />

          <Typography id="section-1" variant="h5" sx={{ mb: 2 }}>
            #1 Icon Buttons
          </Typography>
          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button1Preview />}
          />
          <Typography id="section-2" variant="h5" sx={{ mb: 2 }}>
            #1 Icon Buttons
          </Typography>
          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button1Preview />}
          />
          <Typography id="section-3" variant="h5" sx={{ mb: 2 }}>
            #1 Icon Buttons
          </Typography>
          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button1Preview />}
          />
          <Typography id="section-4" variant="h5" sx={{ mb: 2 }}>
            #1 Icon Buttons
          </Typography>
          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button1Preview />}
          />
          <Typography id="section-5" variant="h5" sx={{ mb: 2 }}>
            #1 Icon Buttons
          </Typography>
          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button1Preview />}
          />
          {/* Add more sections as needed */}
        </Box>
      </Grid>
      <Grid size={{ xs: 0, md: 2 }}>
        <OnThisPage sections={sections} />
      </Grid>
    </Grid>
  );
};