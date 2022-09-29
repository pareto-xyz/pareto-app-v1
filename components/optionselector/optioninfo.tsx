import { Dispatch, SetStateAction } from "react";

export const OptionInfo = ({
    key,
    idx,
    option,
    selected,
    setSelected,
}: {
    key: number,
    idx: number,
    option: {
        strikePrice: number,
        breakEvenPrice: number,
        impliedVolitility: number,
        price: number,
        bid: number,
        ask: number,
        openInterest: number,
        delta: number,
        vega: number,
        gamma: number,
        theta: number,
        rho: number,
    }
    selected: number | undefined,
    setSelected: Dispatch<SetStateAction<number | undefined>>
}) => {
    return (
        <div className='w-full flex justify-between items-center bg-white rounded-xl h-16'>
            <div className="flex justify-around items-center grow">
                <p className="font-bold text-center grow">{option.strikePrice}</p>
                <p className="font-bold text-center grow">{option.breakEvenPrice}</p>
                <p className="font-bold text-center grow">{option.impliedVolitility}</p>
            </div>
            <div className="flex justify-center mx-6">
                <div className={"flex justify-center items-center rounded-l-xl border border-r-0 border-indigo-500 h-10 px-4 " + (selected === idx ? 'text-white bg-indigo-500' : 'text-indigo-500')}>
                    ${option.price}
                </div>
                <button
                    className={'rounded-r-xl border border-indigo-500 h-10 px-3 ' + (selected === idx ? 'text-white bg-indigo-500' : 'text-indigo-500')}
                    onClick={() => {
                        setSelected(idx)
                    }}
                >
                    <div className="w-full h-full flex justify-center items-center">
                        +
                    </div>
                </button>
            </div>
        </div>
    );
};