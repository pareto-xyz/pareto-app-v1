import React, { useState } from 'react';
import { AccountPositions } from './positions';
import { PositionsRadio } from './radio';
import { AccountSettlementHistory } from './settlementhistory';
import { AccountTradeHistory } from './tradehistory';


export const AccountInfo: React.FC<{
    walletAddress: string | null | undefined,
}> = ({
    walletAddress,
}) => {
        const [selectedInfo, setSelectedInfo] = useState('Positions')

        return (
            <div className="positions w-full min-w-fit my-12">
                <div className="box border-2 border-green-500 md:px-8 px-1 rounded-xl py-8">
                    <div className="w-full">
                        <h1 className="text-2xl font-bold text-left mb-4">Eth Margin Account Positions</h1>
                        <PositionsRadio selected={selectedInfo} setSelected={setSelectedInfo} />
                        <br />
                        {
                            selectedInfo === 'Positions' &&
                            <AccountPositions walletAddress={walletAddress} />
                        }
                        {
                            selectedInfo === 'Trade History' &&
                            <AccountTradeHistory walletAddress={walletAddress} />
                        }
                        {
                            selectedInfo === 'Settlement History' &&
                            <AccountSettlementHistory walletAddress={walletAddress} />
                        }
                    </div>
                </div>
            </div>
        )
    }