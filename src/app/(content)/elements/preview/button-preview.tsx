import { Stack, Button, Box, Divider } from "@mui/material";

export const Button1Preview = () => {
  return (
    <Box>
      {/* Custom Size */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems={"center"}>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontSize: "0.625rem", padding: "3px 8px", minWidth: "auto" }}
          >
            xs
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary" size="small">
            small
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary" size="medium">
            medium
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary" size="large">
            large
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontSize: "1rem", padding: "10px 20px" }}
          >
            xl
          </Button>
        </Box>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              fontSize: "0.65rem",
              padding: "2px 8px",
              minWidth: "64px",
              height: "94px",
            }}
          >
            Custom Size
          </Button>
        </Box>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {/* Custom Shapes */}
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems={"center"}>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "5px" }}
          >
            Rounded
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "50px", padding: "6px 20px" }}
          >
            Pill Shape
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%",
              minWidth: 0,
              width: 68,
              height: 68,
              padding: 0,
            }}
          >
            Circle
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ width: 64, height: 64, borderRadius: 0 }}
          >
            Sq
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              width: 100,
              height: 56,
              padding: 0,
            }}
          >
            Hex
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
