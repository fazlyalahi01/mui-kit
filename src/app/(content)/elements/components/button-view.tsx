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
    { title: "#1 Icon Buttons", id: "button-section-1" },
    { title: "#2 Gradient Buttons", id: "button-section-2" },
    { title: "#3 Color Buttons", id: "button-section-3" },
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
              title="Icon Buttons"
              description="All types icon buttons in one place. This is the section for icon buttons."
              id="button-section-1"
            />

            <CodePreviewCopyWrapper
              codeString={button1CodeString}
              preview={<Button1Preview />}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <SectionTitle
              title="Gradient Buttons"
              description="All types icon buttons in one place. This is the section for icon buttons."
              id="button-section-2"
            />

            <CodePreviewCopyWrapper
              codeString={button1CodeString}
              preview={<Button1Preview />}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <SectionTitle
              title="Color Buttons"
              description="All types icon buttons in one place. This is the section for icon buttons."
              id="button-section-3"
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
