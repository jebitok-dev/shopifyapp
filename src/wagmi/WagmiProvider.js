import { WagmiConfig } from "wagmi";
import { config } from "./Wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function WagmiProvider ({ children }) {
    return (
        <QueryClientProvider client={QueryClient}>
            <WagmiConfig config={config}>
                {children}
            </WagmiConfig>
        </QueryClientProvider>
    )
}