"use client";
import { type FC } from "react";

// import Link from "next/link";

import { Stack, Box, Text, Link, HStack } from "@chakra-ui/react";

const SwagathonLogo: FC = () => {
  return (
    <Link href="/" target="_blank" rel="noopener noreferrer">
      <Box
        as="footer"
        p={"0rem"}
        position="sticky"
        bottom={0}
        zIndex={10}
        textAlign={"center"}
      >
        <HStack>
          <Text
            fontFamily="Damion"
            fontWeight="regular"
            fontSize={{ base: "24px", md: "40px", lg: "56px" }}
            color="#000000"
          >
            Swag-
          </Text>
          <Text
            fontFamily="Cutive Mono"
            fontWeight="regular"
            marginLeft={-2}
            fontSize={{ base: "20px", md: "32px", lg: "44px" }}
            color="#000000"
          >
            athon
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default SwagathonLogo;
