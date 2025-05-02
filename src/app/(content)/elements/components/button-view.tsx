"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { OnThisPage } from "@/components/on-this-page";
import { Box, Divider, Grid } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import { Button1Preview } from "../preview/button-preview";

export const ButtonView = () => {
  const sections = [
    { title: "#1 Contained", id: "button-section-1" },
    { title: "#2 Outlined", id: "button-section-2" },
    { title: "#3 Text", id: "button-section-3" },
    { title: "#4 Soft", id: "button-section-3" },
    { title: "#5 Icon", id: "button-section-4" },
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

          <Box sx={{ mb: 4 }}>
            <SectionTitle
              title="Contained"
              description="Default contained button. This is the section for contained buttons."
              id="button-section-1"
            />

            <CodePreviewCopyWrapper
              codeString={button1CodeString}
              preview={<Button1Preview />}
            />
          </Box>
          
        </Box>
      </Grid>
      <Grid size={{ xs: 0, md: 2 }}>
        <OnThisPage sections={sections} />
      </Grid>
    </Grid>
  );
};
