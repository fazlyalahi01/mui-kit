import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      href="/"
      sx={{
        mr: 2,
        flexGrow: 1,
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
        MUI
      </Box>{" "}
      KIT
    </Typography>
  );
};
