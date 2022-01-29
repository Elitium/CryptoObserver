// Sets currency and category options

import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "INR") setSymbol("₹");
    else if (currency === "GBP") setSymbol("£");
    else if (currency === "JPY") setSymbol("¥");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "AUD") setSymbol("$");
    else if (currency === "CAD") setSymbol("$");
    else if (currency === "MYR") setSymbol("RM");
    else if (currency === "NZ") setSymbol("$");
    else if (currency === "SGD") setSymbol("$");
  }, [currency]);
  useEffect(() => {
    if (category === "All");
    else if (category === "binance-smart-chain");
    else if (category === "avalanche-ecosystem");
    else if (category=== "arbitrum-ecosystem");
    else if (category=== "aave-tokens");
    else if (category=== "axie-infinity");
    else if (category=== "cardano-ecosystem");
    else if (category=== "celo-ecosystem");
    else if (category=== "cosmos-ccosystem");
    else if (category=== "daomaker-ecosystem");
    else if (category=== "fantom-ecosystem");
    else if (category=== "xdai-ecosystem");
    else if (category=== "heco-chain-ecosystem");
    else if (category=== "polygon-ecosystem");
    else if (category=== "dot-ecosystem");
    else if (category=== "solana-ecosystem");
    else if (category === "cryptocurrency");

  }, [category]);


  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol, category, setCategory }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
