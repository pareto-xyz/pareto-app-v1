import { Dispatch, PropsWithChildren, SetStateAction } from "react";


// TODO replace this with a call to the backend
const getOptionInfo = (optionType: string | null, optionPrice: string) => {
    return {
        strikePrice: 1,
        breakEvenPrice: 2,
        impliedVolitility: 3,
        bid: 4,
        ask: 5,
        openInterest: 6,
        delta: 7,
        vega: 8,
        gamma: 9,
        theta: 10,
        rho: 11,
    }
}

const PurpleSelectedButtonPair: React.FC<{
    price: string,
    setPrice: Dispatch<SetStateAction<string | null>>,
}> = ({
    price,
    setPrice,
}) => {
        return (
            <div className="flex justify-end w-1/6">
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
    price: string,
    setPrice: Dispatch<SetStateAction<string | null>>,
}> = ({
    price,
    setPrice,
}) => {
        return (
            <div className="flex justify-end w-1/6">
                <div className={'flex justify-center items-center rounded-l-xl border border-r-0 border-indigo-500 h-10 px-4 text-indigo-500'}>
                    ${price}
                </div>
                <button
                    className={'rounded-r-xl border border-indigo-500 h-10 px-3 text-indigo-500'}
                    onClick={() => {
                        setPrice(price)
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
    optionPrice: string,
    selectedPrice: string | null,
    setSelectedPrice: Dispatch<SetStateAction<string | null>>,
}> = ({
    optionType,
    optionPrice,
    selectedPrice,
    setSelectedPrice,
}) => {
        const optionInfo = getOptionInfo(optionType, optionPrice);

        return (
            <div className='w-full flex flex-wrap justify-between items-center bg-white rounded-xl min-h-16 px-6 py-2'>
                <div className="flex justify-around items-center w-5/6">
                    <p className="font-bold text-center grow">${optionInfo.strikePrice}</p>
                    <p className="font-bold text-center grow">${optionInfo.breakEvenPrice}</p>
                    <p className="font-bold text-center grow">${optionInfo.impliedVolitility}</p>
                </div>
                {
                    optionPrice === selectedPrice ?
                        <PurpleSelectedButtonPair price={optionPrice} setPrice={setSelectedPrice} /> :
                        <PurpleUnselectedButtonPair price={optionPrice} setPrice={setSelectedPrice} />
                }
                {
                    optionPrice === selectedPrice &&
                    (
                        <div className='w-full flex flex-wrap justify-between items-center pt-4 pb-2'>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Bid</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.bid}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Ask</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.ask}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Implied Volitility</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.impliedVolitility}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Open Interest</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.openInterest}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Delta</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.delta}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Vega</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.vega}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Gamma</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.gamma}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Theta</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.theta}</div>
                            </div>
                            <div className='w-1/5 h-16 flex flex-wrap justify-center items-center'>
                                <div className='text-slate-500 w-full flex justify-center items-center'>Rho</div>
                                <div className='text-black font-bold w-full flex justify-center items-center'>${optionInfo.rho}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    };