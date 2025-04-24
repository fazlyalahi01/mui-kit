"use client";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Iconify } from "@/components/iconify"; // Ensure this works in your setup

interface CodePreviewWrapperProps {
  codeString: string;
  preview: React.ReactNode;
}

export const CodePreviewCopyWrapper: React.FC<CodePreviewWrapperProps> = ({
  codeString,
  preview,
}) => {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [icon, setIcon] = useState<string>("eva:copy-fill");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopySuccess("Copied!");
      setIcon("eva:checkmark-fill");
      setTimeout(() => {
        setCopySuccess("");
        setIcon("solar:copy-line-duotone");
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2 }}>
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        aria-label="preview and code tabs"
        sx={{ mb: 2 }}
      >
        <Tab value="preview" label="Preview" />
        <Tab value="code" label="Code" />
      </Tabs>

      {tab === "preview" ? (
        <Box>{preview}</Box>
      ) : (
        <Box sx={{ position: "relative" }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleCopy}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Iconify icon={icon} />
            {copySuccess ? "Copied" : "Copy"}
          </Button>
          <SyntaxHighlighter language="tsx" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </Box>
      )}
    </Box>
  );
};
