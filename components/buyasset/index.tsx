import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { classNames } from '../utils';
import { DepositWithdrawModal } from '../modal/depositwithdraw';
import { getAccountInfo, getOptionInfo } from '../backend_calls';


export const BuyAsset: React.FC<{
    walletAddress: string | null | undefined,
    optionType: string,
    selectedStrikePrice: number | null,
}> = ({
    walletAddress,
    optionType,
    selectedStrikePrice,
}) => {
        const accountInfo = getAccountInfo(walletAddress);

        const optionInfo = getOptionInfo(optionType, selectedStrikePrice);
        const [action, contractType, ...rest] = optionType.split(' ')

        const [quantity, setQuantity] = useState('');
        const [openModal, setOpenModal] = useState(false);

        const price = action === 'Buy' ? optionInfo.ask : optionInfo.bid;

        return (
            <div className="flex justify-center min-w-fit w-full max-w-sm min-h-fit h-[25rem] bg-white rounded-xl py-4 p-8 m-4 drop-shadow">
                {selectedStrikePrice === null ? (
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
                            <h3 className="text-2xl text-black font-bold">{action} ETH {contractType} @ ${selectedStrikePrice}</h3>
                        </div>
                        <br />
                        <div className="flex justify-between items-center text-slate-500 text-sm">
                            <Tooltip title='The best available price to buy or sell this option, right now.' placement='top' arrow>
                                <p className="">
                                    Quantity
                                </p>
                            </Tooltip>
                            <div className="border-t grow mx-4"></div>
                            <input
                                className='w-1/4 bg-slate-200 rounded-xl h-8 text-center'
                                value={quantity}
                                onChange={(e) => {
                                    const quantity = e.target.value;
                                    if (quantity === '' || /^[0-9]+(\.[0-9]*)?$/.test(quantity)) {
                                        setQuantity(e.target.value)
                                    }
                                }} />
                        </div>
                        <hr className="h-4 invisible" />
                        <div className="flex justify-between items-center text-slate-500 text-sm">
                            <Tooltip title='The best available price to buy or sell this option, right now.' placement='top' arrow>
                                <p className="">
                                    Price of
                                    <br />
                                    Option
                                </p>
                            </Tooltip>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold text-base">${price}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        <div className="flex justify-between items-center text-slate-500 text-sm">
                            <Tooltip title='This is your quantity multiplied by the price.' placement='top' arrow>
                                <p className="">
                                    Trade
                                    <br />
                                    Value
                                </p>
                            </Tooltip>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold text-base">${price * parseFloat(quantity)}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        <div className="flex justify-between items-center text-slate-500 text-sm">
                            <Tooltip title="The minimum available balance to open a new position. This will be less than the trade value, given Pareto's undercollateralized trading." placement='top' arrow>
                                <p className="">
                                    Initial Margin
                                    <br />
                                    Requirement
                                </p>
                            </Tooltip>
                            <div className="border-t grow mx-4"></div>
                            <p className="font-bold text-base">${(optionInfo.marginRequirement * parseFloat(quantity)).toFixed(2)}</p>
                        </div>
                        <hr className="h-4 invisible" />
                        {
                            quantity === '' || optionInfo.marginRequirement * parseFloat(quantity) <= accountInfo.availableBalance ?
                                <>
                                    <div className="flex justify-between items-center text-slate-500 text-sm">
                                        <Tooltip title='This is your available funds to open a new position. This must be greater than your initial margin requirement to open a new position.' placement='top' arrow>
                                            <p className="">
                                                Available
                                                <br />
                                                Margin Balance
                                            </p>
                                        </Tooltip>
                                        <div className="border-t grow mx-4"></div>
                                        <p className="font-bold text-base">${accountInfo.availableBalance}</p>
                                    </div>
                                    <hr className="h-4 invisible" />
                                    < button
                                        className={classNames(
                                            "py-2 px-4 w-full text-white rounded-xl",
                                            quantity === '' ? 'bg-slate-300' :
                                                optionType.includes('Buy') === optionType.includes('Call') ?
                                                    'bg-green-500' :
                                                    'bg-red-500'
                                        )}
                                    >
                                        {optionType}
                                    </button>
                                </> :
                                <>
                                    <DepositWithdrawModal open={openModal} setOpen={setOpenModal} defaultValue={'Deposit'} />
                                    <button
                                        className="py-2 px-4 w-full text-white rounded-xl bg-green-500"
                                        onClick={() => {
                                            setOpenModal(true);
                                        }}
                                    >
                                        Fund Margin Account
                                    </button>
                                    <hr className="h-4 invisible" />
                                    < button className="py-2 px-4 w-full text-white rounded-xl bg-slate-300">
                                        {optionType}
                                    </button>
                                </>
                        }
                    </div>
                )
                }
            </div >
        );
    };
