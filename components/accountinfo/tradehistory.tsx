import React from 'react';
import { getAccountTradeHistory } from '../backend_calls';
import { classNames } from '../utils';


export const AccountTradeHistory: React.FC<{
    walletAddress: string | null | undefined,
}> = ({
    walletAddress,
}) => {
        const accountTradeHistory = getAccountTradeHistory(walletAddress);

        return (
            <div className="w-full flex flex-wrap justify-start text-sm drop-shadow">
                <div className="flex justify-between items-center content-center text-center w-full text-slate-500">
                    <span className="basis-full">Type</span>
                    <span className="basis-full">Side</span>
                    <span className="basis-full">Strike</span>
                    <span className="basis-full">Expiry</span>
                    <span className="basis-full">Quantity</span>
                    <span className="basis-full">Entry Price</span>
                    <span className="basis-full">Timestamp</span>
                </div>
                {accountTradeHistory.map((entry, idx) => {
                    return (
                        <div key={idx} className='flex justify-between items-center w-full rounded-xl bg-white h-12 mt-2'>
                            <div className="flex justify-between items-center content-center w-full font-bold text-center text-slate-500">
                                <span className="basis-full">{entry.contractType}</span>
                                <span className={
                                    classNames(
                                        'basis-full',
                                        entry.side === 'Short' ? 'text-red-500' : 'text-green-500',
                                    )}>{entry.side}</span>
                                <span className="basis-full">{entry.strike}</span>
                                <span className="basis-full">{entry.expiry}</span>
                                <span className="basis-full">{entry.quantity}</span>
                                <span className="basis-full">{entry.entryPrice}</span>
                                <span className="basis-full">{entry.timestamp}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }