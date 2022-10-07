import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { classNames } from '../utils';
import { DepositWithdrawModal } from '../modal/depositwithdraw';
import { getAccountInfo, getOptionInfo } from '../backend_calls';
import { PnLGraphGraph } from './graph';



// TODO replace this with math to calculate pnl
export const getPnlInfo = (strikePrice: number, currentPrice: number) => {
    return {
        expectedPnL: 2000 - strikePrice - 20,
        maxProfit: Infinity,
        maxLoss: 10,
        breakEven: strikePrice + 20,
    }
}

export const PnLGraph: React.FC<{
    walletAddress: string | null | undefined,
    optionType: string,
    selectedStrikePrice: number | null,
}> = ({
    walletAddress,
    optionType,
    selectedStrikePrice,
}) => {
        if (selectedStrikePrice === null) {
            return <></>
        }

        const accountInfo = getAccountInfo(walletAddress);

        const optionInfo = getOptionInfo(optionType, selectedStrikePrice);
        const [action, contractType, ...rest] = optionType.split(' ');

        const pnlInfo = getPnlInfo(selectedStrikePrice, optionInfo.price);

        const price = action === 'Buy' ? optionInfo.ask : optionInfo.bid;

        return (
            <div className="flex justify-center min-w-fit w-full max-w-sm min-h-fit h-[24rem] bg-white rounded-xl py-4 p-8 m-4 drop-shadow">
                <div className="w-full h-max">
                    <div className='w-full flex justify-between items-center'>
                        <div className="flex justify-start w-full">
                            <h3 className="text-xl text-black font-bold w-3/4">Expected profit and loss</h3>
                        </div>
                        <div className='text-xl text-green-500 font-bold w-1/4'>
                            +${pnlInfo.expectedPnL.toFixed(2)}
                        </div>
                    </div>

                    <PnLGraphGraph firstSegment={0} secondSegment={1} color='green' />

                    <hr className="h-4 invisible" />
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                        <Tooltip title='The best available price to buy or sell this option, right now.' placement='top' arrow>
                            <p className="">
                                Max profit
                            </p>
                        </Tooltip>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold text-base">${(pnlInfo.maxProfit).toFixed(2)}</p>
                    </div>
                    <hr className="h-4 invisible" />
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                        <Tooltip title='This is your quantity multiplied by the price.' placement='top' arrow>
                            <p className="">
                                Break even
                            </p>
                        </Tooltip>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold text-base">${(pnlInfo.breakEven).toFixed(2)}</p>
                    </div>
                    <hr className="h-4 invisible" />
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                        <Tooltip title="The minimum available balance to open a new position. This will be less than the trade value, given Pareto's undercollateralized trading." placement='top' arrow>
                            <p className="">
                                Max loss
                            </p>
                        </Tooltip>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold text-base">${(pnlInfo.maxLoss).toFixed(2)}</p>
                    </div>
                </div>
            </div >
        )
    };
