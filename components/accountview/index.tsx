import React, { useState } from "react"


export const AccountView = ({
    // walletAddress,
    availableBalance,
    unrealizedPNL,
    totalMaintenenceMargin,
    totalInitialMargin,
    liquidationBuffer,
    totalMarginAccountBalance
}: Record<string, number | undefined>) => {
    const [walletAddress, setWalletAddress] = useState(undefined as undefined | string);

    return (
        <div className='w-1/4 h-auto min-h-min max-w-sm flex justify-center text-slate-500 rounded-xl bg-white p-8 m-4 flex-wrap'>
            {
                walletAddress === undefined ?
                    (
                        <div className='h-80 flex justify-center content-center flex-wrap'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10 stroke-indigo-500"
                                onClick={(e) => {
                                    setWalletAddress('0xParetoLabs');
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                />
                            </svg>

                            <p className="text-indigo-500 font-bold text-center w-full">
                                Connect
                                <br />
                                your
                                <br />
                                wallet
                            </p>
                        </div>
                    ) : (
                        <div className='w-full h-max'>
                            <div className='flex justify-start w-full'>
                                <h3 className='text-2xl text-black font-bold'>Your Account</h3>
                            </div >
                            <br />
                            <div className='flex justify-between items-center w-full'>
                                <p className=''>
                                    Available<br />
                                    Balance
                                </p>
                                <div className='border-t grow mx-4'></div>
                                <p className='font-bold'>${availableBalance}</p>
                            </div>
                            <hr className='h-4 invisible' />
                            <div className='flex justify-between items-center w-full'>
                                <p className=''>
                                    Unrealized<br />
                                    PnL
                                </p>
                                <div className='border-t grow mx-4'></div>
                                <p className='font-bold'>${unrealizedPNL}</p>
                            </div>
                            <hr className='h-4 invisible' />
                            <div className='flex justify-between items-center w-full'>
                                <p className=''>
                                    Total Maintenence<br />
                                    Margin
                                </p>
                                <div className='border-t grow mx-4'></div>
                                <p className='font-bold'>${totalMaintenenceMargin}</p>
                            </div>
                            <hr className='h-4 invisible' />
                            <div className='flex justify-between items-center w-full'>
                                <p className=''>
                                    Total Initial<br />
                                    Margin
                                </p>
                                <div className='border-t grow mx-4'></div>
                                <p className='font-bold'>${totalInitialMargin}</p>
                            </div>
                            <hr className='h-4 invisible' />
                            <div className='flex justify-between items-center w-full'>
                                <p className=''>
                                    Liquidation<br />
                                    Buffer
                                </p>
                                <div className='border-t grow mx-4'></div>
                                <p className='font-bold'>${liquidationBuffer}</p>
                            </div>
                            <hr className='h-4 invisible' />
                            <div className='flex justify-between items-center w-full'>
                                <p className=''>
                                    Total Margin<br />
                                    Account Balance
                                </p>
                                <div className='border-t grow mx-4'></div>
                                <p className='font-bold'>${totalMarginAccountBalance}</p>
                            </div>

                            <hr className='h-6 invisible' />

                            <div className='flex justify-between'>
                                <button
                                    className='h-10 min-w-[35%] w-40 rounded-2xl border mr-2'
                                    onClick={(e) => {
                                        setWalletAddress(undefined)
                                    }}
                                >
                                    deposit
                                </button>
                                <button
                                    className='h-10 min-w-[35%] w-40 rounded-2xl border'
                                    onClick={(e) => {
                                        setWalletAddress(undefined)
                                    }}
                                >
                                    withdraw
                                </button>
                            </div>
                        </div>
                    )
            }
        </div>
    )
};