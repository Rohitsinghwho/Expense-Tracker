import React, { useEffect, useState } from 'react'
import WalletContext from './WalletContext'
const WalletProvider = ({children}) => {
 const [wallet,setWallet]=useState(()=>{
    const saved=localStorage.getItem("walletBalance");
    return saved?JSON.parse(saved):5000;
 });

 useEffect(()=>{
    localStorage.setItem("walletBalance",JSON.stringify(wallet));
 },[wallet])
  return (
    <WalletContext.Provider value={{wallet,setWallet}}>
        {children}
    </WalletContext.Provider>
  )
}

export default WalletProvider   