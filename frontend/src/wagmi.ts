"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import type { Transport } from "viem";
import { createConfig, http } from "wagmi";
import {
  sepolia,
  rootstock,
  rootstockTestnet,
} from "wagmi/chains";

import rootstock_logo from "../public/img/rootstock_logo.svg";
import { APP_NAME } from "./constants";


const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    "WalletConnect project ID is not defined. Please check your environment variables.",
  );
}

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        rabbyWallet,
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        safeWallet,
      ],
    },
  ],
  { appName: APP_NAME, projectId: walletConnectProjectId }
);

// Fix missing icons
// const customRootstock = { ...rootstock, iconUrl: rootstock_logo.src };
// const customRootstockTestnet = { ...rootstockTestnet, iconUrl: rootstock_logo.src };

const transports: Record<number, Transport> = {
  [sepolia.id]: http(),
  [rootstock.id]: http(),
  [rootstockTestnet.id]: http(),
};

export const wagmiConfig = createConfig({
  chains: [
    sepolia,
    // customRootstock,
    // customRootstockTestnet,
    rootstock,
    rootstockTestnet,
  ],
  connectors,
  transports,
  ssr: true,
});
