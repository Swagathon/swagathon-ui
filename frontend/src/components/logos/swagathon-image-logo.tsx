"use client";
import { type FC } from "react";

// import Link from "next/link";

import { Stack, Box, Text, Link, HStack } from "@chakra-ui/react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  alt?: string;
}

const SwagathonImageLogo: FC<LogoProps> = ({
  width = 100,
  height = 100,
  alt = "Logo",
}) => {
  // const { theme } = useTheme();
  // const textColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Image
      src="/img/swagathon-logo-square-color.png" // Adjust the path to where your image is located
      alt={alt}
      width={width}
      height={height}
      style={{ display: "block" }} // Ensures it behaves like a block element if needed
    />
  );
};

export default SwagathonImageLogo;