"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { Iconify } from "@/components/iconify";
import { Box, InputAdornment, Stack, TextField, useTheme } from "@mui/material";

export const ElementView = () => {
  const theme = useTheme();
  return (
    <Box>
      <CustomBreadCrumbs pathArr={[{ label: "Elements", path: "" }]} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ xs: "start", md: "center" }}
        spacing={{ xs: 2, md: 0 }}
      >
        <PageTitle
          title="Elements"
          description="Material UI core components with extended design, and functionality. "
        />
        <TextField
          placeholder="Search..."
          id="outlined-size-small"
          size="small"
          sx={{ width: { xs: "100%", md: "25%" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify
                  icon="ic:baseline-search"
                  style={{ color: theme.palette.text.secondary }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
};
