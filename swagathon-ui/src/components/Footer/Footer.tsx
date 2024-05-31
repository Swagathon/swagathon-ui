"use client";
import { type FC } from "react";

import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { GITHUB_URL } from "@/constants";

const Footer: FC = () => {
  return (
    <Box as="footer" p={"1rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}>
      <Link
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Please, follow and leave a ⭐️ on this repo if you like it!
      </Link>
    </Box>
  );
};


// export { Component as FooterNew };
export default Footer;
