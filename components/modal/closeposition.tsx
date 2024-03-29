import { Dispatch, SetStateAction, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ParetoModal } from ".";
import { getAccountPositions } from "../backend_calls";



export const ClosePositionModal: React.FC<{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    positionIndex: number,
    walletAddress: string | null | undefined,
}> = ({
    open,
    setOpen,
    positionIndex,
    walletAddress,
}) => {
        const close = () => {
            setOpen(false)
        };

        const [quantity, setQuantity] = useState('');

        const position = getAccountPositions(walletAddress)[positionIndex];

        return (
            <ParetoModal open={open} close={close}>
                <div className='flex flex-wrap justify-center items-center w-full h-fit m-0'>
                    <div className='w-11/12 flex justify-between items-center h-fit'>
                        <span className={'font-bold text-2xl'}>Close Position</span>
                        <XMarkIcon
                            className='w-10 h-10 self-start justify-self-end text-slate-700'
                            onClick={() => {
                                close()
                            }}
                        />
                    </div>

                    <div className='w-full h-4' />

                    <div className='w-11/12 flex justify-between items-center h-fit text-base'>
                        <span className={position.side === 'Short' ? 'text-red-500' : 'text-green-500'}>{position.contractType}</span>
                        ETH @ {position.strike} {position.contractType}
                    </div>

                    <div className='w-11/12 flex justify-between items-center h-fit text-base'>
                        The default price and quantity may result in reduced PnL. Customize them below.
                    </div>

                    <div className='w-full h-4' />

                    <div className='flex flex-wrap justify-between items-center w-11/12 h-fit m-0'>
                        <div className='w-2/3 flex flex-col items-start justify-center text-base'>
                            <span className='w-full text-slate-700'>Sale Price</span>
                            <span className='w-full font-bold'>${position.currentPrice}</span>

                            <div className='w-full h-4' />

                            <span className='w-full text-slate-700'>Qty of Contract</span>
                            <div className='w-full flex justify-start items-center'>
                                <input
                                    className='bg-slate-200 rounded-xl w-7/12 h-8 mr-2 text-center'
                                    value={quantity}
                                    onChange={(e) => {
                                        const amount = e.target.value;
                                        if (amount === '' || /^[0-9]+(\.[0-9]*)?$/.test(amount)) {
                                            setQuantity(e.target.value)
                                        }
                                    }
                                    }
                                />
                                <span
                                    className='text-slate-500 text-base underline underline-offset-2'
                                    onClick={() => {
                                        setQuantity(position.quantity.toString())
                                    }}>
                                    Max
                                </span>
                            </div>

                            <div className='w-full h-4' />

                            <span className='font-bold text-base text-green-500'>
                                Estimated PnL
                            </span>
                            <span className='font-bold text-base text-green-500'>
                                +$25.00
                            </span>
                        </div>

                        <div className='w-1/3 flex flex-col items-start justify-center text-base'>
                            <div className='w-fit flex flex-col items-start justify-center text-base'>
                                <span className='w-full text-slate-700'>Entry Price</span>
                                <span className='w-full font-bold'>${position.entryPrice}</span>
                            </div>

                            <div className='w-full h-4' />

                            <div className='w-fit flex flex-col items-start justify-center text-base'>
                                <span className='w-full text-slate-700'>Max Qty</span>
                                <span className='w-full font-bold'>${position.entryPrice}</span>
                            </div>

                            <div className='w-full h-4' />

                            <span className='text-base text-slate-700'>
                                Est. Fees
                            </span>
                            <span className='text-base text-slate-700'>
                                $0.00
                            </span>
                        </div>
                    </div>

                    <div className='w-full h-4' />

                    <button
                        className='w-full bg-green-500 text-white h-10 rounded-xl'
                        onClick={close}
                    >
                        Close Position
                    </button>
                </div>
            </ParetoModal>
        )
    }