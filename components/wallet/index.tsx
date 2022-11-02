import React from "react";
import { InjectedConnector } from "@web3-react/injected-connector";

export const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});

export const WalletContext = React.createContext(null as string | null | undefined);
export const SetWalletContext = React.createContext(((value: string | null | undefined) => { }) as React.Dispatch<React.SetStateAction<string | null | undefined>>);