import {useState} from "react";
import { Page, Card, Button } from "@shopify/polaris";
import Offers from "./Offers";
import WagmiProvider from "./wagmi/WagmiProvider";
import Wallet from "./components/Wallet";

const OFFERS = [
  {
      name: "Paul",
      id: "provider-1"
  },
  {
      name: "Jane",
      id: "provider-2"
  },
  {
      name: "Ali",
      id: "provider-3"
  }
];

export default function App() {

  const [hasToken, setHasToken] = useState(false);

  const onApiKey = apiKey => signAndGetToken(apiKey, 'user-1').then(token => {
    window.dispatchEvent(new CustomEvent('utuIdentityDataReady', {detail: token}));
    setHasToken(true);
  })

  return (
    <WagmiProvider>
      <Page title='Shopify Base App'>
        <Card sectioned>
       { /* { !hasToken && <ApiKeyForm onApiKey={onApiKey}/> }
        <Offers offers={OFFERS} /> */}
        <Wallet />
        </Card>
      </Page>
    </WagmiProvider>
  )
}

function ApiKeyForm({ onApiKey }) {
  const [apiKey, setApiKey] = useState(null);

  return <form onSubmit={event => { event.preventDefault(); onApiKey(apiKey); }}>
      <input type="text" className="apiKey" placeholder="Your API key" onChange={event => setApiKey(event.target.value)}/>
      <input type="submit" value="Submit" className="btn" />
  </form>
}
