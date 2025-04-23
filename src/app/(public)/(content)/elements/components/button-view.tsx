"use client";
import CodeBlockWrapper from "@/components/codeblock-wrapper";
import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
import React from "react";

const codeString = `<Button
              variant="text"
              sx={{
                backgroundColor: "yellow",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 1
            </Button>
            <Button
              variant="contained"
              sx={{ 
                backgroundColor: "red",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 2
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "green",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 3
            </Button>`;

export const ButtonView = () => {
  return (
    <Stack spacing={4} direction={"column"}>
      <ButtonView1 />
      <ButtonView2 />
      <ButtonView3 />
    </Stack>
  );
};

const ButtonView1 = () => {
  const [value, setValue] = React.useState<"preview" | "code">("preview");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: "preview" | "code"
  ) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="preview" label="Preview" />
        <Tab value="code" label="Code" />
      </Tabs>
      <Box mt={2}>
        {value === "preview" && (
          <Box>
            <h3>This is the preview tab</h3>
            <Button
              variant="text"
              sx={{
                backgroundColor: "yellow",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 11
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 21
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "green",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 31
            </Button>
          </Box>
        )}
        {value === "code" && (
          <Box>
            <CodeBlockWrapper codeString={codeString} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const ButtonView2 = () => {
  const [value, setValue] = React.useState<"preview" | "code">("preview");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: "preview" | "code"
  ) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="preview" label="Preview" />
        <Tab value="code" label="Code" />
      </Tabs>
      <Box mt={2}>
        {value === "preview" && (
          <Box>
            <h3>This is the preview tab</h3>
            <Button
              variant="text"
              sx={{
                backgroundColor: "yellow",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 12
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 22
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "green",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 32
            </Button>
          </Box>
        )}
        {value === "code" && (
          <Box>
            <CodeBlockWrapper codeString={codeString} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const ButtonView3 = () => {
  const [value, setValue] = React.useState<"preview" | "code">("preview");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: "preview" | "code"
  ) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="preview" label="Preview" />
        <Tab value="code" label="Code" />
      </Tabs>
      <Box mt={2}>
        {value === "preview" && (
          <Box>
            <h3>This is the preview tab</h3>
            <Button
              variant="text"
              sx={{
                backgroundColor: "yellow",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 13
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 23
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "green",
                borderRadius: "0px",
                border: "1px solid blue",
              }}
            >
              Modified Button 33
            </Button>
          </Box>
        )}
        {value === "code" && (
          <Box>
            <CodeBlockWrapper codeString={codeString} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
