import React, { Dispatch, SetStateAction } from "react";
import { DatePicker } from "./datepicker";
import { OptionTypeRadioPair } from "./radio";
import { OptionInfo } from "./optioninfo";
import { getStrikePrices } from "../backend_calls";


export const OptionSelector: React.FC<{
    optionType: string,
    setOptionType: Dispatch<SetStateAction<string>>,
    selectedStrikePrice: number | null,
    setSelectedStrikePrice: Dispatch<SetStateAction<number | null>>,
}> = ({
    optionType,
    setOptionType,
    selectedStrikePrice,
    setSelectedStrikePrice,
}) => {

        return (
            <div className="w-full h-96 min-h-fit my-4">
                <div className="col-span-8 flex flex-2 flex-col rounded-2xl flex-wrap">
                    <div className='w-full flex flex-wrap justify-between md:p-2 md:px-8'>
                        <OptionTypeRadioPair setOptionType={setOptionType} reset={() => {
                            setSelectedStrikePrice(null);
                        }} />
                        <DatePicker />
                    </div>

                    <hr className='h-1 invisible' />

                    <div className="w-full relative z-1">
                        <div className='w-full flex justify-around items-center h-12 px-6 text-slate-500'>
                            <div className="flex justify-around items-center w-5/6 text-sm">
                                <div className='flex justify-center items-center w-1/3'>Strike Price</div>
                                <div className='flex justify-center items-center w-1/3'>Break Even Price</div>
                                <div className='flex justify-center items-center w-1/3'>Implied Volitility</div>
                            </div>
                            <div className='flex justify-center items-center w-1/6'>Price</div>
                        </div>
                        {getStrikePrices(optionType).map((price, idx) => {
                            return (
                                <div key={idx}>
                                    <OptionInfo
                                        optionType={optionType}
                                        strikePrice={price}
                                        selectedStrikePrice={selectedStrikePrice}
                                        setSelectedStrikePrice={setSelectedStrikePrice}
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