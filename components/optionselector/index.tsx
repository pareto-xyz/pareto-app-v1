import React, { Dispatch, SetStateAction, useState } from "react";
import { DatePicker } from "./datepicker";
import { OptionTypeRadioPair } from "./radio";
import { OptionInfo } from "./optioninfo";


// TODO fill this in with a backend call
const getOptionPrices = (optionType: string | null) => {
    return [
        '180',
        '120',
        '80',
        '60',
    ]
};

export const OptionSelector: React.FC<{
    optionType: string,
    setOptionType: Dispatch<SetStateAction<string>>,
    selectedPrice: string | null,
    setSelectedPrice: Dispatch<SetStateAction<string | null>>,
}> = ({
    optionType,
    setOptionType,
    selectedPrice,
    setSelectedPrice,
}) => {

        return (
            <div className="w-full h-96 min-h-fit my-4">
                <div className="col-span-8 flex flex-2 flex-col rounded-2xl flex-wrap">
                    <div className='w-full flex justify-between p-2 px-8'>
                        <OptionTypeRadioPair setOptionType={setOptionType} reset={() => {
                            setSelectedPrice(null);
                        }} />
                        <DatePicker />
                    </div>

                    <hr className='h-1 invisible' />

                    <div className="w-full">
                        <div className='w-full flex justify-around items-center h-12 px-6 text-slate-500'>
                            <div className="flex justify-around items-center w-5/6">
                                <div className='flex justify-center items-center'>Strike Price</div>
                                <div className='flex justify-center items-center'>Break Even Price</div>
                                <div className='flex justify-center items-center'>Implied Volitility</div>
                            </div>
                            <div className='flex justify-center items-center w-1/6'>Price</div>
                        </div>
                        {getOptionPrices(optionType).map((price, idx) => {
                            return (
                                <div key={idx}>
                                    <OptionInfo
                                        optionType={optionType}
                                        optionPrice={price}
                                        selectedPrice={selectedPrice}
                                        setSelectedPrice={setSelectedPrice}
                                    />
                                    <br />
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        )
    };