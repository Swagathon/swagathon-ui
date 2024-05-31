"use client";
import { type ReactNode, useState, useEffect } from "react";

// import { CacheProvider } from "@chakra-ui/next-js";
// import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { wagmiConfig } from "@/wagmi";
import { APP_NAME } from "@/constants";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const queryClient = new QueryClient();

  // const theme = extendTheme({ initialColorMode: "dark", useSystemColorMode: false });

  const appInfo = {
    appName: APP_NAME,
  };

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/* <CacheProvider> */}
        {/* <ChakraProvider resetCSS theme={theme}> */}
        <RainbowKitProvider coolMode appInfo={appInfo}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {mounted && children}
          </ThemeProvider>
        </RainbowKitProvider>
        {/* </ChakraProvider> */}
        {/* </CacheProvider> */}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
