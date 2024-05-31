"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header/header";
import { Box, Flex } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex flexDirection="column" flexGrow={1}>

      <Box as="main" flex={1} p={4}>
        {/* <MainPane /> */}
        body here
      </Box>

    </Flex>
  );
}
