"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header/header";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";


export default function Home() {
  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Box as="main" flex={1} p={4}>
        
        <Image
          src="/img/swagathon-logo-full-color.png" // Adjust the path to where your image is located
          alt="Swagathon Logo"
          width={600}
          height={420}
          style={{ display: "block" }} // Ensures it behaves like a block element if needed
        />
      </Box>
    </Flex>
  );
}
