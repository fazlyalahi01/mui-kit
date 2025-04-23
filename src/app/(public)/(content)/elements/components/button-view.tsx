"use client";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

export const ButtonView = () => {
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
            <button style={{ padding: "8px 16px" }}>Click Me</button>
          </Box>
        )}
        {value === "code" && (
          <Box>
            <h3>Code Example</h3>
            <pre>
              <code>{`<button style={{ padding: "8px 16px" }}>Click Me</button>`}</code>
            </pre>
          </Box>
        )}
      </Box>
    </Box>
  );
};
