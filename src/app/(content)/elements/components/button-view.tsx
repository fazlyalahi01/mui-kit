"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { Stack } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import { Button1Preview } from "../preview/button-preview";

export const ButtonView = () => {
  return (
    <Stack spacing={4} direction={"column"}>
      <CodePreviewCopyWrapper
        codeString={button1CodeString}
        preview={<Button1Preview />}
      />
    </Stack>
  );
};
