import { useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
// import { coinbaseWallet } from "wagmi/connectors";

/* export default function Wallet() {
    const { address, isConnected} = useAccount();
    const { connect } = useConnect({
        connector: coinbaseWallet({ appName: 'Wagmi', preference: 'smartWalletOnly'})
    });
    const { disconnect } = useDisconnect();

    useEffect(() => {
        if (isConnected) {
            console.log('Connected to ${address');
        }
    }, [isConnected, address]);

    return (
        <div>
            <h1>Smart Wallet</h1>
            {isConnected ? (
                <div>
                    <p>Connected to: {address}</p>
                    <button onClick={disconnect}>Disconnect Wallet</button>
                </div>
            ) : (
                <button onClick={connect}>Connect Wallet</button>
            )}
        </div>
    )
} */