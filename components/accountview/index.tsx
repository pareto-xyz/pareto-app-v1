import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react"
import { DepositWithdrawModal } from "../modal/depositwithdraw";
import { Injected, SetWalletContext, WalletContext } from "../wallet";


// TODO replace this with a call to the backend
const getAccountInfo = (walletAddress: string | undefined | null) => {
    return {
        availableBalance: 1,
        unrealizedPNL: 2,
        totalMaintenenceMargin: 3,
        totalInitialMargin: 4,
        liquidationBuffer: 5,
        totalMarginAccountBalance: 6,
    };
};


export const AccountView: React.FC<{
    walletAddress: string | null | undefined,
}> = ({
    walletAddress
}) => {
        const { activate, deactivate, active, chainId, account } = useWeb3React();
        const accountInfo = getAccountInfo(walletAddress);

        const [openModal, setOpenModal] = useState(false);
        const [modalDefault, setModalDefault] = useState('Deposit');

        return (
            <SetWalletContext.Consumer>
                {setWalletAddress => (
                    <div className='w-full h-auto min-h-min max-w-sm flex justify-center text-slate-500 rounded-xl bg-white p-8 m-4 flex-wrap'>
                        {
                            walletAddress === undefined || walletAddress === null ?
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
                                                activate(Injected);
                                                setWalletAddress(account);
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
                                        <DepositWithdrawModal open={openModal} setOpen={setOpenModal} defaultValue={modalDefault} />
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
                                            <p className='font-bold'>${accountInfo.availableBalance}</p>
                                        </div>
                                        <hr className='h-4 invisible' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className=''>
                                                Unrealized<br />
                                                PnL
                                            </p>
                                            <div className='border-t grow mx-4'></div>
                                            <p className='font-bold'>${accountInfo.unrealizedPNL}</p>
                                        </div>
                                        <hr className='h-4 invisible' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className=''>
                                                Total Maintenence<br />
                                                Margin
                                            </p>
                                            <div className='border-t grow mx-4'></div>
                                            <p className='font-bold'>${accountInfo.totalMaintenenceMargin}</p>
                                        </div>
                                        <hr className='h-4 invisible' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className=''>
                                                Total Initial<br />
                                                Margin
                                            </p>
                                            <div className='border-t grow mx-4'></div>
                                            <p className='font-bold'>${accountInfo.totalInitialMargin}</p>
                                        </div>
                                        <hr className='h-4 invisible' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className=''>
                                                Liquidation<br />
                                                Buffer
                                            </p>
                                            <div className='border-t grow mx-4'></div>
                                            <p className='font-bold'>${accountInfo.liquidationBuffer}</p>
                                        </div>
                                        <hr className='h-4 invisible' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className=''>
                                                Total Margin<br />
                                                Account Balance
                                            </p>
                                            <div className='border-t grow mx-4'></div>
                                            <p className='font-bold'>${accountInfo.totalMarginAccountBalance}</p>
                                        </div>

                                        <hr className='h-6 invisible' />

                                        <div className='flex justify-between'>
                                            <button
                                                className='h-10 min-w-[35%] w-40 rounded-2xl border mr-2'
                                                onClick={(e) => {
                                                    setModalDefault('Deposit')
                                                    setOpenModal(true)
                                                }}
                                            >
                                                Deposit
                                            </button>
                                            <button
                                                className='h-10 min-w-[35%] w-40 rounded-2xl border'
                                                onClick={(e) => {
                                                    setModalDefault('Withdraw')
                                                    setOpenModal(true)
                                                }}
                                            >
                                                Withdraw
                                            </button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                )}
            </SetWalletContext.Consumer>
        )
    };