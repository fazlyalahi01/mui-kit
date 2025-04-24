import { Box, Typography } from "@mui/material";

interface IProps {
  title: string;
  description: string;
}
export const PageTitle = ({ title, description }: IProps) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: { xs: 1, md: 2 }, mb: {xs: 1, md: 1.5}}}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};
