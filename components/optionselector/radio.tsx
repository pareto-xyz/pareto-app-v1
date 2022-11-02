import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { GreenContainer, GreenSelectButton, RedContainer, RedSelectButton } from "../utils";


export const OptionTypeRadioPair: React.FC<PropsWithChildren<{
    setOptionType: Dispatch<SetStateAction<string>>,
    reset: () => void,
}>> = ({
    setOptionType,
    reset,
}) => {
        const [buySell, setBuySell] = useState('Buy');
        const [callPut, setCallPut] = useState('Call');

        setOptionType([buySell, callPut].join(' '));

        const useGreen = (buySell === 'Buy') === (callPut === 'Call');

        return (
            <div className='h-fit flex justify-between'>
                {
                    useGreen ?
                        <>
                            <GreenContainer className='mr-8'>
                                <GreenSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={buySell === 'Buy'}
                                    onClick={() => {
                                        setBuySell('Buy')
                                        reset()
                                    }}
                                >
                                    Buy
                                </GreenSelectButton>
                                <GreenSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={buySell === 'Sell'}
                                    onClick={() => {
                                        setBuySell('Sell')
                                        reset()
                                    }}
                                >
                                    Sell
                                </GreenSelectButton>
                            </GreenContainer>
                            <GreenContainer className='mr-8'>
                                <GreenSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={callPut === 'Call'}
                                    onClick={() => {
                                        setCallPut('Call')
                                        reset()
                                    }}
                                >
                                    Call
                                </GreenSelectButton>
                                <GreenSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={callPut === 'Put'}
                                    onClick={() => {
                                        setCallPut('Put')
                                        reset()
                                    }}
                                >
                                    Put
                                </GreenSelectButton>
                            </GreenContainer>
                        </> :
                        <>
                            <RedContainer className='mr-8'>
                                <RedSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={buySell === 'Buy'}
                                    onClick={() => {
                                        setBuySell('Buy')
                                        reset()
                                    }}
                                >
                                    Buy
                                </RedSelectButton>
                                <RedSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={buySell === 'Sell'}
                                    onClick={() => {
                                        setBuySell('Sell')
                                        reset()
                                    }}
                                >
                                    Sell
                                </RedSelectButton>
                            </RedContainer>
                            <RedContainer className='mr-8'>
                                <RedSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={callPut === 'Call'}
                                    onClick={() => {
                                        setCallPut('Call')
                                        reset()
                                    }}
                                >
                                    Call
                                </RedSelectButton>
                                <RedSelectButton
                                    className={'min-w-[3.75rem] min-h-[2.25rem]'}
                                    selected={callPut === 'Put'}
                                    onClick={() => {
                                        setCallPut('Put')
                                        reset()
                                    }}
                                >
                                    Put
                                </RedSelectButton>
                            </RedContainer>
                        </>
                }
            </div>
        )
    }