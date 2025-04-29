import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
// import Link from "next/link";

interface IProps {
  sections: {
    id: string;
    title: string;
  }[];
}
export const OnThisPage = ({ sections }: IProps) => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: "1rem",
        display: { xs: "none", md: "block" },
        px: 4,
        // border: "1px solid red",
        width: "100%",
      }}
    >
      <Typography variant="h6">On this page</Typography>
      <List dense sx={{ ml: 2 }}>
        {sections.map((section) => (
          <ListItem
            key={section.id}
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemText
              primary={
                <Link
                  component="button"
                  onClick={() => handleScrollToSection(section.id)}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {section.title}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          mt: "auto",
          p: 2,
          bgcolor: "background.default",
          borderTop: 1,
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Want to contribute?
        </Typography>
        <Link href="/contribute">
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Join our community!
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
