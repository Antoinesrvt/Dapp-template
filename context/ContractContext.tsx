import React, { useState, useEffect, ReactNode } from 'react';
import Web3Modal from 'web3modal';
import { Web3ModalProvider } from '@web3modal/react'
import { Contract, ethers } from "ethers";
import {CoinbaseWalletSDK} from "@coinbase/wallet-sdk";

import {contractAddress, contractABI} from './constants';
import { Web3Provider } from '@coinbase/wallet-sdk/dist/provider/Web3Provider';


type ContractContextValues = {
    contractAsSigner: any;
    connectWallet: any;
    currentAccount: any;
    getContractAndSigner: any,
}


export const ContractContext = React.createContext<ContractContextValues>({
    contractAsSigner: {} as Contract,
    connectWallet: {} as Function,
    currentAccount: {} as string,
    getContractAndSigner: {} as Function,
});


export const ContractProvider = ({ children} : { children: ReactNode }) =>{
  const [contractAsSigner, setContractAsSigner] = useState<Contract>();
  const [provider, setProvider] = useState();
  const [currentAccount, setCurrentAccount] = useState('0x');
  const [fileStored, setFileStored] = useState<Web3Provider>();

  const getContractAndSigner = async () =>{
    
    try {

      const signer = provider.getSigner();
      const signerAddr = await signer.getAddress();
      setCurrentAccount(signerAddr)

      if(signer != '0x'){
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      setContractAsSigner(contract);
      console.log("Contract created")
    }
    } catch (error) {
      console.log(error);
    }
    
  }

  const verifyWeb3 = async() =>{

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    } else if (window.web3) {
      setProvider(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      ); // message d’erreur si le navigateur ne détecte pas Ethereum
    }

    if (!provider) {
      console.error("No web3 provider found");
      return;
    } else {
      getContractAndSigner()
    }
  }

  const connectWallet = async () => {
    if(!window.ethereum) return alert('Please install Metamask');

    await provider.send("eth_requestAccounts", []);
    getContractAndSigner();
    window.location.reload;
  }

  useEffect(() => {  
    verifyWeb3()
  },[]);


    return(
        <ContractContext.Provider value={{contractAsSigner, connectWallet, currentAccount, getContractAndSigner}}>
          {children}
        </ContractContext.Provider>
    )
};

    // const [web3Provider, setweb3Provider] = useState(null);



