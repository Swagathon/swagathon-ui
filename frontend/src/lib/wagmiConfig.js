import { configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "wagmi/chains";
import { Provider } from "@wagmi/core";
import { createPublicClient } from "viem";

const rootstock = {
  id: 30,
  name: "Rootstock",
  network: "rootstock",
  rpcUrls: {
    default: { http: ["https://public-node.testnet.rsk.co"] },
  },
};

const { provider, webSocketProvider } = configureChains(
  [rootstock],
  [publicProvider()]
);

export const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});
