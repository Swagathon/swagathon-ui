"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header/header";
import { Box, Flex } from "@chakra-ui/react";


export default function AdminHome() {
  return (
    <Flex flexDirection="column" flexGrow={1}>

      <Box as="main" flex={1} p={4}>
        {/* <MainPane /> */}
        ADMIN PAGE
      </Box>

    </Flex>
  );
}
