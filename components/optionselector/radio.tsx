import { Dispatch, SetStateAction, useState } from "react";

const RadioGroup = ({
    values,
    selected,
    setSelectedButton,
    color,
    reset,
}: {
    values: string[],
    selected: string,
    setSelectedButton: Dispatch<SetStateAction<string>>,
    color: string,
    reset: () => void,
}) => {
    const bgLight = color === 'green' ? ' bg-green-200 ' : ' bg-red-200 ';
    const bgDark = color === 'green' ? ' bg-green-500 ' : ' bg-red-500 ';

    const textDark = color === 'green' ? ' text-green-500 ' : ' text-red-500 ';

    return (
        <div className={bgLight + 'rounded-xl w-fit h-fit p-2 mr-8 flex justify-around'}>
            {values.map((value) => {
                return (
                    <button
                        key={value}
                        disabled={value === selected}
                        className={
                            'min-w-[3.75rem] min-h-[2.25rem] rounded-xl ' + (
                                value !== selected ?
                                    bgLight + textDark :
                                    bgDark + 'text-white'
                            )
                        }
                        onClick={(e) => {
                            setSelectedButton(value)
                            reset()
                        }}
                    >
                        {value}
                    </button>
                );
            })}
        </div>
    );
};

export const RadioPair = ({
    setOptionTransactionType,
    color,
    setSelected,
}: {
    setOptionTransactionType: Dispatch<SetStateAction<string>>,
    color: string,
    setSelected: Dispatch<SetStateAction<number | undefined>>,
}) => {
    const [buySell, setBuySell] = useState('Buy');
    const [callPut, setCallPut] = useState('Call');

    setOptionTransactionType(buySell + ' ' + callPut)

    return (
        <div className='h-fit flex justify-between'>
            <RadioGroup values={['Buy', 'Sell']} selected={buySell} setSelectedButton={setBuySell} color={color} reset={() => setSelected(undefined)} />
            <RadioGroup values={['Call', 'Put']} selected={callPut} setSelectedButton={setCallPut} color={color} reset={() => setSelected(undefined)} />
        </div>
    );
};