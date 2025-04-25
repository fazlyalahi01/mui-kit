"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider, Stack, TextField, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { elementsArr } from "../constants/elements";

export const ElementView = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState(elementsArr);
  console.log(searchText, "searchText...");
  console.log(filteredData, "filteredData1...");

  React.useEffect(() => {
    if (searchText) {
      console.log(searchText, "searchText2...");
      const filtered = elementsArr.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filtered, "filtered...");
      setFilteredData(filtered);
    } else {
      setFilteredData(elementsArr);
    }
  }, [searchText]);

  console.log(filteredData, "filteredData2...");
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
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        {filteredData.map((item) => (
          <Box
            key={item?.path}
            border="1px dashed gray"
            component={Link}
            href={item?.path}
            sx={{
              bgcolor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              px: 2,
              py: 1,
              textDecoration: "none",
              fontWeight: 500,
              width: "fit-content",
              transition: "0.3s",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            {item.label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
