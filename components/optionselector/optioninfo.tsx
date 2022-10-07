import { Dispatch, SetStateAction } from "react";
import { Tooltip } from '@mui/material';
import { getOptionInfo } from "../backend_calls";


const PurpleSelectedButtonPair: React.FC<{
    price: number,
    setPrice: Dispatch<SetStateAction<number | null>>,
}> = ({
    price,
    setPrice,
}) => {
        return (
            <div className="flex justify-center w-1/6">
                <div className={'flex justify-center items-center rounded-l-xl border border-r-0 border-indigo-500 h-10 px-4 text-white bg-indigo-500'}>
                    ${price}
                </div>
                <button
                    className={'rounded-r-xl border border-indigo-500 h-10 px-3 text-white bg-indigo-500'}
                    onClick={() => {
                        setPrice(null);
                    }}
                >
                    <div className="w-4 h-full flex justify-center items-center">
                        ✓
                    </div>
                </button>
            </div>
        )
    }

const PurpleUnselectedButtonPair: React.FC<{
    price: number,
    setPrice: Dispatch<SetStateAction<number | null>>,
    strikePrice: number,
}> = ({
    price,
    setPrice,
    strikePrice,
}) => {
        return (
            <div className="flex justify-center w-1/6">
                <div className={'flex justify-center items-center rounded-l-xl border border-r-0 border-indigo-500 h-10 px-4 text-indigo-500'}>
                    ${price}
                </div>
                <button
                    className={'rounded-r-xl border border-indigo-500 h-10 px-3 text-indigo-500'}
                    onClick={() => {
                        setPrice(strikePrice)
                    }}
                >
                    <div className="w-4 h-full flex justify-center items-center">
                        +
                    </div>
                </button>
            </div >
        )
    }

export const OptionInfo: React.FC<{
    optionType: string | null,
    strikePrice: number,
    selectedStrikePrice: number | null,
    setSelectedStrikePrice: Dispatch<SetStateAction<number | null>>,
}> = ({
    optionType,
    strikePrice,
    selectedStrikePrice,
    setSelectedStrikePrice,
}) => {
        const optionInfo = getOptionInfo(optionType, strikePrice);

        return (
            <div className='w-full flex flex-wrap justify-between items-center bg-white rounded-xl min-h-16 px-6 py-2 drop-shadow'>
                <div className="flex justify-around items-center w-5/6">
                    <p className="font-bold text-center w-1/3">${strikePrice}</p>
                    <p className="font-bold text-center w-1/3">${optionInfo.breakEvenPrice}</p>
                    <p className="font-bold text-center w-1/3">${optionInfo.impliedVolitility}</p>
                </div>
                {
                    strikePrice === selectedStrikePrice ?
                        <PurpleSelectedButtonPair price={optionInfo.price} setPrice={setSelectedStrikePrice} /> :
                        <PurpleUnselectedButtonPair price={optionInfo.price} strikePrice={strikePrice} setPrice={setSelectedStrikePrice} />
                }
                {
                    strikePrice === selectedStrikePrice &&
                    (
                        <div className='w-full flex flex-wrap justify-between items-center pt-4 pb-2'>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title='The bid is the cheapest price you can buy at, right now. It is the lowest price others will sell to you.' placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Bid</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.bid}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title='The ask is the highest price you can sell at, right now. It is the highest price others will buy from you.' placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Ask</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.ask}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title='Implied Volatility (IV) is the forecasted volatility of the option. Higher IV = more expensive option.' placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Implied Volitility</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.impliedVolitility}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title='Open interest is the notional volume in open positions for this option strike and expiry.' placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Open Interest</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.openInterest}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title="Delta is important for hedging. It represents how much the value of an option changes with a $1 change in the underlying asset's price. If an option's delta is +0.25, then shorting 0.25 of the underlying asset will make your combined position is delta neutral." placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Delta</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.delta}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title="Vega is important for hedging. It measures how much an option’s price changes with respect to a 1% change in the underlying asset's implied volatility (IV)." placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Vega</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.vega}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title="Gamma represents how an option's delta changes with a $1 change in the underlying asset's price. Gamma is important for hedging and effective leverage. When Gamma is high, the amount of hedging instrument (e.g. spot / future) required for an option's position can change rapidly." placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Gamma</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.gamma}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title='Theta represents how the value of an option changes over time. It is negative for option buyers and positive for option sellers.' placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Theta</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.theta}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <Tooltip title="Rho represents how an option's price changes with a change in interest rates. Less important than the others!" placement='top' arrow>
                                    <div className='text-slate-500 w-full flex justify-center items-center text-sm'>Rho</div>
                                </Tooltip>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.rho}</div>
                            </div>
                        </div>
                    )
                }
            </div >
        );
    };