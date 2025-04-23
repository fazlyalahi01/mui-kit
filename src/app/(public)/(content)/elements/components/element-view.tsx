"use client";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const ElementView = () => {
  const router = useRouter();
  return (
    <Box>
      <Button onClick={() => router.push("/elements/buttons")}>Button</Button>
    </Box>
  );
};
