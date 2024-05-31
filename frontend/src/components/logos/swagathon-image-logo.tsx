"use client";
import { type FC } from "react";

// import Link from "next/link";

import { Stack, Box, Text, Link, HStack } from "@chakra-ui/react";

interface LogoProps {
  width?: string;
  height?: string;
  alt?: string;
}

const SwagathonImageLogo: FC<LogoProps> = ({
  width = "100px",
  height = "100px",
  alt = "Logo",
}) => {
  // const { theme } = useTheme();
  // const textColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <img
      src="/img/swagathon-logo-square-color.png" // Adjust the path to where your image is located
      alt={alt}
      width={width}
      height={height}
      style={{ display: "block" }} // Ensures it behaves like a block element if needed
    />
  );
};

export default SwagathonImageLogo;