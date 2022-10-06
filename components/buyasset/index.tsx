// TODO replace this with a call to the backend, should be the same as the one used in option selector
const getOptionInfo = (optionType: string | null, selectedOptionPrice: string | null) => {
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
    };
};

export const BuyAsset: React.FC<{
    optionType: string,
    selectedOptionPrice: string | null,
}> = ({
    optionType,
    selectedOptionPrice,
}) => {
        const optionInfo = getOptionInfo(optionType, selectedOptionPrice);
        const [action, contractType, ...rest] = optionType.split(' ')

        return (
            <div className="flex justify-center min-w-fit w-full max-w-sm min-h-fit h-96 bg-white rounded-xl py-4 p-8 m-4">
                {selectedOptionPrice === null ? (
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
                            <h3 className="text-2xl text-black font-bold">{action} ETH {contractType} @ ${optionInfo.strikePrice}</h3>
                        </div>
                        <br />
                        <div className="flex justify-between items-center">
                            <p className="">
                                Price of
                                <br />
                                Option
                            </p>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold">${optionInfo.bid}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        <div className="flex justify-between items-center">
                            <p className="">
                                Trade
                                <br />
                                Value
                            </p>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold">${optionInfo.ask}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        <div className="flex justify-between items-center">
                            <p className="">
                                Initial Margin
                                <br />
                                Requirement
                            </p>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold">${optionInfo.strikePrice}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        <div className="flex justify-between items-center">
                            <p className="">
                                Available
                                <br />
                                Margin Balance
                            </p>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold">${optionInfo.breakEvenPrice}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        <button className={"py-2 px-4 w-full text-white rounded-xl" + (
                            optionType.includes('Buy') === optionType.includes('Call') ?
                                ' bg-green-500' :
                                ' bg-red-500'
                        )}>
                            {optionType}
                        </button>
                    </div>
                )}
            </div>
        );
    };
