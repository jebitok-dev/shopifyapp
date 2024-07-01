import {useState} from "react";
import { Page, Card, Button } from "@shopify/polaris";
import Offers from "./Offers";
import { Mutation } from "@tanstack/react-query";
import { WalletButton } from "./wagmi/WalletButton";
import './index.css';

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

  const handleSuccess = (address) => {
    console.log('Wallet address:', address);
  };

  const handleError = (error) => {
    console.error('Error creating wallet:', error);
  };

  return (
    <Page title='Shopify Base App' className='centered'>
      <Card sectioned className='content'>
      <WalletButton handleSuccess={handleSuccess} handleError={handleError}>
        { !hasToken && <ApiKeyForm onApiKey={onApiKey}/> }
        <Offers offers={OFFERS} /> 
      </WalletButton>
      </Card>
    </Page>
  )
}

function ApiKeyForm({ onApiKey }) {
  const [apiKey, setApiKey] = useState(null);

  return <form onSubmit={event => { event.preventDefault(); onApiKey(apiKey); }}>
      <input type="text" className="apiKey" placeholder="Your API key" onChange={event => setApiKey(event.target.value)}/>
      <input type="submit" value="Submit" className="btn" />
  </form>
} 
