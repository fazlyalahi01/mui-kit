"use client";
import { overviewItems } from "@/constants/component-overview-data";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import Link from "next/link";

export const ComponentOverview = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Grid container spacing={3}>
        {overviewItems.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}> 
            <Paper
              elevation={1}
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 8,
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Icon
                  icon={item.icon}
                  style={{ fontSize: 40, color: theme.palette.primary.main }}
                />
              </Box>
              <Typography
                variant="h5"
                component="h3"
                align="center"
                gutterBottom
                fontWeight="bold"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mb: 3 }}
              >
                {item.description}
              </Typography>
              <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {item.tags.map((tag) => (
                  <Link href={tag.url} key={tag.label} passHref>
                    <Chip
                      label={tag.label}
                      size="small"
                      clickable
                      // component="a"
                      sx={{ m: 0.5 }}
                    />
                  </Link>
                ))}
              </Stack>

              {item.button && (
                <Box
                  sx={{ mt: "auto", textAlign: "center", marginTop: "1rem" }}
                >
                  <Link href={item.button.url} passHref>
                    <Button
                      endIcon={<Icon icon="mdi:arrow-right" />}
                      color="primary"
                      // component="a"
                    >
                      {item.button.label}
                    </Button>
                  </Link>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
