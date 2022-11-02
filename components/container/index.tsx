import React, { Dispatch, Fragment, PropsWithChildren, SetStateAction, useState } from "react"
import Image from 'next/image'
import Link from "next/link";
import truncateEthAddress from 'truncate-eth-address'

import pareto_logo from '../../public/pareto_logo.png';
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useWeb3React } from "@web3-react/core";
import { Injected, SetWalletContext, WalletContext } from "../wallet";

import { DepositWithdrawModal } from '../modal/depositwithdraw';
import { classNames } from "../utils";


const MarginAccountDropdown: React.FC<{
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    setModalInitial: Dispatch<SetStateAction<string>>,
}> = ({
    setModalOpen,
    setModalInitial,
}) => {
        return <Listbox>
            {({ open }) => (
                <div className="h-[2.25rem]">
                    <Listbox.Button className="h-full cursor-default rounded-xl bg-white pl-3 pr-1 text-left text-sm flex justify-center items-center">
                        <span className="block truncate pr ">Margin Account</span>
                        <span className="pointer-events-none">
                            <ChevronDownIcon className="h-5 w-5 text-slate-700" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="z-10 mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 text-base drop-shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <Listbox.Option
                                className={({ active }) =>
                                    classNames(
                                        active ? 'text-black bg-green-200' : 'bg-white',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                }
                                value='Deposit'
                                onClick={() => {
                                    setModalInitial('Deposit')
                                    setModalOpen(true)
                                }}
                            >
                                Deposit
                            </Listbox.Option>
                            <Listbox.Option
                                className={({ active }) =>
                                    classNames(
                                        active ? 'text-black bg-red-200' : 'bg-white',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                }
                                value='Withdraw'
                                onClick={() => {
                                    setModalInitial('Withdraw')
                                    setModalOpen(true)
                                }}
                            >
                                Withdraw
                            </Listbox.Option>
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    }


export const ParetoContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null as string | null | undefined);

    const { activate, deactivate, active, chainId, account } = useWeb3React();
    if (walletAddress !== account) {
        setWalletAddress(account);
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [modalInitial, setModalInitial] = useState('Deposit');

    return (
        <>
            <div className='w-full h-24 flex flex-wrap md:flex-nowrap justify-around items-center'>
                <div className='h-full w-full md:w-1/5 relative'>
                    <Link href='/'>
                        <a href="#">
                            <Image
                                src={pareto_logo}
                                layout='fill'
                                objectFit='contain'
                                alt='pareto'
                            />
                        </a>
                    </Link>
                </div>
                <div className='md:h-full w-full md:w-1/2 flex-grow md:flex-grow-0 flex justify-around items-center'>
                    <Link href='/trade'>
                        <a href="#" className='hover:underline underline-offset-4 decoration-slate-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900'>
                            Trade
                        </a>
                    </Link>
                    <Link href='/account'>
                        <a href="#" className='hover:underline underline-offset-4 decoration-slate-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900'>
                            Account
                        </a>
                    </Link>
                    <Link href='/position_builder'>
                        <a href="#" className='hover:underline underline-offset-4 decoration-slate-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900'>
                            Position Builder
                        </a>
                    </Link>
                    <Link href='/competitions'>
                        <a href="#" className='hover:underline underline-offset-4 decoration-slate-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900'>
                            Competitions
                        </a>
                    </Link>
                    <Link href='/help'>
                        <a href="#" className='hover:underline underline-offset-4 decoration-slate-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900'>
                            Help
                        </a>
                    </Link>
                    <Link href='/feedback'>
                        <a href="#" className='hover:underline underline-offset-4 decoration-slate-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900'>
                            Feedback
                        </a>
                    </Link>
                </div>
                {
                    !active ?
                        <div className='hidden md:inline-block'>
                            <button
                                className='w-40 h-8 rounded-xl bg-green-200 text-green-900 font-bold text-sm'
                                onClick={() => {
                                    activate(Injected);
                                    setWalletAddress(account);
                                }}
                            >
                                Connect Wallet
                            </button>
                        </div> :
                        <div className='h-full md:flex justify-around items-center w-1/5 hidden'>
                            <MarginAccountDropdown setModalOpen={setModalOpen} setModalInitial={setModalInitial} />
                            <DepositWithdrawModal open={modalOpen} setOpen={setModalOpen} defaultValue={modalInitial} />
                            <div className='text-green-500 flex justify-center items-center'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1 stroke-green-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                    />
                                </svg>
                                {
                                    walletAddress === null || walletAddress === undefined ?
                                        truncateEthAddress(`0x12334500000000000000000000000000006789672`) :
                                        truncateEthAddress(walletAddress)
                                }
                            </div>
                        </div>
                }
            </div>
            <div className='md:w-full w-screen min-h-screen flex flex-wrap justify-center items-start'>
                <WalletContext.Provider value={walletAddress}>
                    <SetWalletContext.Provider value={setWalletAddress}>
                        {children}
                    </SetWalletContext.Provider>
                </WalletContext.Provider>
            </div>
        </>
    )
}