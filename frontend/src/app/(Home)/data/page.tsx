"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header/header";
import { RatingsDataTable } from "@/components/ratings-data-table";
import { WinnersTabBox } from "@/components/Ratings/winners-tab-box";
import { Box, Flex } from "@chakra-ui/react";

export default function DataPage() {
  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Box as="main" flex={1} p={4}>
        <RatingsDataTable />
      </Box>
    </Flex>
  );
}
