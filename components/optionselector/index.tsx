import React, { Dispatch, SetStateAction, useState } from "react";
import { DatePicker } from "./datepicker";
import { RadioPair } from "./radio";
import { OptionInfo } from "./optioninfo";


export const OptionSelector = ({
    optionTransactionType,
    setOptionTransactionType,
    options,
    selected,
    setSelected,
}: {
    optionTransactionType: string,
    setOptionTransactionType: Dispatch<SetStateAction<string>>,
    options: Record<string, {
        strikePrice: number,
        breakEvenPrice: number,
        impliedVolitility: number,
        price: number,
        bid: number,
        ask: number,
        openInterest: number,
        delta: number,
        vega: number,
        gamma: number,
        theta: number,
        rho: number,
    }[]>,
    selected: number | undefined,
    setSelected: Dispatch<SetStateAction<number | undefined>>,
}) => {
    return (
        <div className="w-2/3 h-96 min-h-fit m-4">
            <div className="col-span-8 flex flex-2 flex-col rounded-2xl flex-wrap">
                <div className='w-full flex justify-between p-2 px-8'>
                    <RadioPair setSelected={setSelected} setOptionTransactionType={setOptionTransactionType} color={
                        optionTransactionType.includes('Buy') !== optionTransactionType.includes('Call') ?
                            'red' :
                            'green'
                    } />
                    <DatePicker />
                </div>

                <br />

                <div className="w-full">
                    {options[optionTransactionType].map((option, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <OptionInfo key={idx} idx={idx} option={option} selected={selected} setSelected={setSelected} />
                                <br />
                            </React.Fragment>
                        );
                    })}
                </div>

            </div>
        </div>
    )
};