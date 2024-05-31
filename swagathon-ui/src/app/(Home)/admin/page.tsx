"use client";
import { Box, Flex } from "@chakra-ui/react";

import { Footer, Header, MainPane } from "@/components";
import { FooterNew } from "@/components/footer-new";

export default function AdminPage() {
  return (
    <Flex flexDirection="column" minHeight="100vh">

      <Box as="main" flex={1} p={4}>
        ADMIN
      </Box>

    </Flex>
  );
}
