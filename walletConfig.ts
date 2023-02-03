import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
    configureChains,
    createClient,
    Chain
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
const tFil: Chain = {
    id: 3141,
    name: "Filecoin — Hyperspace testnet",
    network: "tfil",
    rpcUrls: {
        default: {
            http: ["https://api.hyperspace.node.glif.io/rpc/v1"]
        },
        public: {
            http: ["https://api.hyperspace.node.glif.io/rpc/v1"]
        }
    },
    nativeCurrency: {
        name: "FIL",
        decimals: 18,
        symbol: "tFIL"
    },
    testnet: true
}


const { chains, provider } = configureChains(
    [tFil],
    [
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'DFP',
    chains
});

export const Chains = chains
export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})