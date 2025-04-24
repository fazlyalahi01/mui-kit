import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { PageTitle } from "@/components/core/page-title";

export const InstallationView = () => {
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Docs", path: "/docs/intro" },
          { label: "Installation", path: "" },
        ]}
      />
      <PageTitle
        title="Installation"
        description={[
          { text: "MUI Kit requires " },
          { text: "no installation", highlight: true },
          {
            text: ". Built entirely with Material UI, components are designed to be copied and pasted directly into your project, offering a seamless and lightweight way to enhance your UI.",
          },
        ]}
      />

      <Typography variant="body1" sx={{ my: 2 }}>
        MUI Kit eliminates the need for traditional installation processes like
        npm packages or dependency management. Every component is crafted using
        only Material UI, ensuring full compatibility with its ecosystem. Simply
        copy the component code from our documentation or repository and paste
        it into your project to start building beautiful, responsive interfaces.
      </Typography>

      <Typography variant="h5" fontWeight={600} sx={{ mt: 3 }}>
        How to Use MUI Kit
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        Getting started with MUI Kit is straightforward. Follow these steps to
        integrate our components into your project:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Browse Components: Visit the MUI Kit documentation or repository to explore our collection of components." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Copy the Code: Select the component you need and copy its source code." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Paste and Customize: Paste the code into your project and modify it to fit your design or functionality requirements." />
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ mb: 2 }}>
        No setup, no build tools, no dependencies—just pure Material UI
        components ready to use.
      </Typography>

      <Typography variant="h5" fontWeight={600} sx={{ mt: 3 }}>
        Why No Installation?
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        MUI Kit’s copy-and-paste model is designed to simplify your workflow and
        enhance flexibility. Benefits include:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Zero Dependencies: No need to install or manage external packages, keeping your project lightweight." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Material UI Native: Components are built with Material UI, ensuring seamless integration and consistency." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Responsive by Default: Every component is designed to work across all screen sizes out of the box." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Instant Use: Copy and paste to start building immediately, no setup required." />
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This approach empowers you to focus on building your UI without the
        overhead of complex setup processes.
      </Typography>

      <Typography variant="h5" fontWeight={600} sx={{ mt: 3 }}>
        Prerequisites
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        To use MUI Kit components, ensure your project meets these minimal
        requirements:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Material UI: Your project must include Material UI (@mui/material) and its peer dependencies (e.g., @emotion/react, @emotion/styled)." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon sx={{ fontSize: 8, color: "text.primary", mr: 1 }} />
          </ListItemIcon>
          <ListItemText primary="React: MUI Kit components are built for React applications (version 17 or later recommended)." />
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If Material UI is already set up in your project, you’re ready to start
        using MUI Kit components immediately.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        MUI Kit’s installation-free approach makes it the easiest way to enhance
        your Material UI projects. Explore our components, copy what you need,
        and build with confidence.
      </Typography>
    </Box>
  );
};
