import React, { useState } from 'react';
import { ClosePositionModal } from '../modal/closeposition';
import { classNames } from '../utils';
import { getAccountPositions } from '../backend_calls';


export const AccountPositions: React.FC<{
    walletAddress: string | null | undefined,
}> = ({
    walletAddress,
}) => {
        const accountPositions = getAccountPositions(walletAddress);

        const [modalOpen, setModalOpen] = useState(false);
        const [positionIndex, setPositionIndex] = useState(0);

        return (
            <div className="w-full flex flex-wrap justify-start text-sm">
                <ClosePositionModal open={modalOpen} setOpen={setModalOpen} positionIndex={positionIndex} walletAddress={walletAddress} />
                <div className="flex justify-between items-center content-center text-center w-5/6 text-slate-500">
                    <span className="basis-full">Type</span>
                    <span className="basis-full">Side</span>
                    <span className="basis-full">Strike</span>
                    <span className="basis-full">Expiry</span>
                    <span className="basis-full">Quantity</span>
                    <span className="basis-full">Entry Price</span>
                    <span className="basis-full">Current Mark Price</span>
                    <span className="basis-full">Unrealized PnL</span>
                </div>
                {accountPositions.map((entry, idx) => {
                    return (
                        <div key={idx} className='flex justify-between items-center w-full rounded-xl bg-white h-12 mt-2 drop-shadow'>
                            <div className="flex justify-between items-center content-center w-5/6 font-bold text-center text-slate-500">
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
                                <span className="basis-full">{entry.currentPrice}</span>
                                <span className="basis-full">{entry.unrealizedPnL}</span>
                            </div>
                            <div className='grow flex justify-center items-center content-center'>
                                <button
                                    className='w-[9rem] text-white bg-green-500 rounded-xl h-[2rem]'
                                    onClick={() => {
                                        setModalOpen(true);
                                    }}
                                >
                                    Close Position
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }