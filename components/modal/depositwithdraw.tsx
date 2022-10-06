import { Dispatch, SetStateAction, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ParetoModal } from ".";
import { GreenContainer, GreenSelectButton } from "../utils";
import { WalletContext } from "../wallet";


// TODO replace this with a call to the backend
const getBalance = (walletAddress: string | null | undefined) => {
    return walletAddress === null || walletAddress === undefined ? 100.00 : 10000.00;
}

const DepositRadio: React.FC<{
    state: string,
    setState: Dispatch<SetStateAction<string>>,
}> = ({
    state,
    setState,
}) => {
        return (
            <GreenContainer className={''}>
                <GreenSelectButton
                    selected={state === 'Deposit'}
                    className='min-w-[7rem] min-h-[2.25rem]'
                    onClick={() => {
                        setState('Deposit')
                    }}
                >
                    Deposit
                </GreenSelectButton>
                <GreenSelectButton
                    selected={state === 'Withdraw'}
                    className='min-w-[7rem] min-h-[2.25rem]'
                    onClick={() => {
                        setState('Withdraw')
                    }}
                >
                    Withdraw
                </GreenSelectButton>
            </GreenContainer>
        )
    }

export const DepositWithdrawModal: React.FC<{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    defaultValue: string,
}> = ({
    open,
    setOpen,
    defaultValue,
}) => {
        const close = () => {
            setOpen(false)
            setAmount('')
            setDepositWithdraw('')
        };

        const [depositWithdrawState, setDepositWithdraw] = useState('');
        const [amount, setAmount] = useState('')

        const depositWithdraw = depositWithdrawState === '' ? defaultValue : depositWithdrawState

        return (
            <ParetoModal open={open} close={close}>
                <div className='flex flex-wrap justify-center items-center w-full h-fit m-0'>
                    <div className='w-full flex justify-between items-center h-fit'>
                        <DepositRadio state={depositWithdraw} setState={setDepositWithdraw} />
                        <XMarkIcon
                            className='w-10 h-10 self-start justify-self-end text-slate-700'
                            onClick={() => {
                                close()
                            }}
                        />
                    </div>

                    <div className='w-full h-4' />

                    <div className='w-11/12 flex justify-between items-center h-fit'>
                        <span className='text-2xl font-bold'>Account:</span>
                        <span className='text-2xl font-bold'>ETH</span>
                    </div>

                    <div className='w-full h-4' />

                    <div className='w-11/12 flex justify-between items-center h-fit'>
                        <span className='text-2xl font-bold'>{ } Asset:</span>
                        <span className='text-2xl font-bold'>USDC</span>
                    </div>

                    <div className='w-full h-4' />

                    <WalletContext.Consumer>
                        {
                            walletAddress => (
                                <div className='w-full flex justify-center items-center text-slate-500 font-bold text-xl'>
                                    ${getBalance(walletAddress)}
                                </div>
                            )
                        }
                    </WalletContext.Consumer>
                    <div className='w-full flex justify-center items-center text-slate-500 font-bold text-xl'>
                        {depositWithdraw === 'Deposit' ? 'Account Balance' : 'Withdrawable Funds'}
                    </div>
                    <div className='w-full flex justify-center items-center text-slate-500 font-bold text-xl'>
                        (USDC)
                    </div>

                    <div className='w-full h-4' />

                    <div className='w-11/12 text-slate-500 text-md mb-2'>
                        Enter {depositWithdraw} Amount (USDC)
                    </div>
                    <div className='w-full flex justify-start items-center'>
                        <input
                            className='bg-slate-200 rounded-xl w-3/4 h-10 mr-2 text-center'
                            value={amount}
                            onChange={(e) => {
                                const amount = e.target.value;
                                if (/[0-9]+(\.[0-9]+)?/.test(amount)) {
                                    setAmount(e.target.value)
                                }
                            }}
                        />
                        {
                            depositWithdraw === 'Withdraw' &&
                            <WalletContext.Consumer>
                                {
                                    walletAddress => (
                                        <span
                                            className='text-slate-500 text-md'
                                            onClick={() => {
                                                setAmount(getBalance(walletAddress).toString())
                                            }}>
                                            Max
                                        </span>
                                    )
                                }
                            </WalletContext.Consumer>
                        }
                    </div>

                    <div className='w-full h-4' />

                    <button
                        className='w-full bg-green-500 text-white h-10 rounded-xl'
                        onClick={close}
                    >
                        {depositWithdraw}
                    </button>
                </div>
            </ParetoModal>
        )
    }