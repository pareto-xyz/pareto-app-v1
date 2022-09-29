import { Dispatch, SetStateAction } from "react";

export const BuyAsset = ({
    optionTransactionType,
    options,
    selected,
}: {
    optionTransactionType: string,
    options: Record<
        string,
        {
            strikePrice: number;
            breakEvenPrice: number;
            impliedVolitility: number;
            price: number;
            bid: number;
            ask: number;
            openInterest: number;
            delta: number;
            vega: number;
            gamma: number;
            theta: number;
            rho: number;
        }[]
    >;
    selected: number | undefined;
}) => {
    const option = selected === undefined || optionTransactionType === '' ? undefined : options[optionTransactionType][selected];

    return (
        <div className="flex justify-center min-w-fit w-1/4 max-w-sm min-h-fit h-96 bg-white rounded-xl py-4 p-8 m-4">
            {option === undefined ? (
                <div className="h-80 flex justify-center content-center flex-wrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-14 h-14 stroke-indigo-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p className="text-indigo-500 font-bold text-center w-full">
                        Select
                        <br />
                        an
                        <br />
                        option
                    </p>
                </div>
            ) : (
                <div className="w-full h-max">
                    <div className="flex justify-start w-full">
                        <h3 className="text-2xl text-black font-bold">Buy ETH Calls @ ${option.price}</h3>
                    </div>
                    <br />
                    <div className="flex justify-between items-center">
                        <p className="">
                            Price
                            <br />
                            Option
                        </p>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold">${option.bid}</p>
                    </div>
                    <hr className="h-4 invisible" />
                    <div className="flex justify-between items-center">
                        <p className="">
                            Trade
                            <br />
                            Value
                        </p>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold">${option.ask}</p>
                    </div>
                    <hr className="h-4 invisible" />
                    <div className="flex justify-between items-center">
                        <p className="">
                            Initial Margin
                            <br />
                            Requirement
                        </p>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold">${option.strikePrice}</p>
                    </div>
                    <hr className="h-4 invisible" />
                    <div className="flex justify-between items-center">
                        <p className="">
                            Available
                            <br />
                            Margin Balance
                        </p>
                        <div className="border-t grow mx-4"></div>
                        <p className="font-bold">${option.breakEvenPrice}</p>
                    </div>
                    <hr className="h-4 invisible" />
                    <button className={"py-2 px-4 w-full text-white rounded-xl" + (
                        optionTransactionType.includes('Buy') === optionTransactionType.includes('Call') ?
                            ' bg-green-500' :
                            ' bg-red-500'
                    )}>
                        {optionTransactionType}
                    </button>
                </div>
            )}
        </div>
    );
};
