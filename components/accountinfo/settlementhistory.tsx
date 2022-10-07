import React from 'react';
import { getAccountSettlementHistory } from '../backend_calls';


export const AccountSettlementHistory: React.FC<{
    walletAddress: string | null | undefined,
}> = ({
    walletAddress,
}) => {
        const accountSettlementHistory = getAccountSettlementHistory(walletAddress);

        return (
            <div className="w-full flex flex-wrap justify-start text-sm drop-shadow">
                <div className="flex justify-between items-center content-center text-center w-full text-slate-500">
                    <span className="basis-full">Asset</span>
                    <span className="basis-full">Price at Settlement</span>
                    <span className="basis-full">Settlement Timestamp</span>
                </div>
                {accountSettlementHistory.map((entry, idx) => {
                    return (
                        <div key={idx} className='flex justify-between items-center w-full rounded-xl bg-white h-12 mt-2'>
                            <div className="flex justify-between items-center content-center w-full font-bold text-center text-slate-500">
                                <span className="basis-full">ETH</span>
                                <span className="basis-full">{entry.priceAtSettlement}</span>
                                <span className="basis-full">{entry.settlementTimestamp}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }