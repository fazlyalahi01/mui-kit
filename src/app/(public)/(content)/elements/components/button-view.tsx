"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { Button, Stack } from "@mui/material";

export const ButtonView = () => {
  return (
    <Stack spacing={4} direction={"column"}>
      <CodePreviewCopyWrapper
        codeString={`<Button variant="text" sx={{ backgroundColor: "yellow", borderRadius: "0px", border: "1px solid blue" }}>Modified Button</Button>`}
        preview={
          <Button
            variant="text"
            sx={{
              backgroundColor: "yellow",
              borderRadius: "0px",
              border: "1px solid blue",
            }}
          >
            Modified Button
          </Button>
        }
      />
      <CodePreviewCopyWrapper
        codeString={`<Button variant="text" sx={{ backgroundColor: "yellow", borderRadius: "0px", border: "1px solid blue" }}>Modified Button</Button>`}
        preview={
          <Button
            variant="text"
            sx={{
              backgroundColor: "yellow",
              borderRadius: "0px",
              border: "1px solid blue",
            }}
          >
            Modified Button
          </Button>
        }
      />
    </Stack>
  );
};
