import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { GreenContainer, GreenSelectButton } from '../utils';
import { useState } from 'react';
import Image from 'next/image';

import candlestick_icon from '../../public/candlestick_icon.png';
import { getData } from '../backend_calls';


const getOptions = (ohlc: boolean) => {
    return {
        colors: ['#22c55e'],
        chart: {
            height: '90%',
            width: '100%',
            type: ohlc ? 'candlestick' as 'candlestick' : 'line' as 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight' as 'straight',
            width: ohlc ? 1 : 2,
        },
        grid: {
            show: false,
        },
        xaxis: {
            type: 'datetime' as 'datetime',
        },
        yaxis: {
            decimalsInFloat: 2,
        },
    }
};



export const EthPrice: React.FC<{}> = ({ }) => {
    const [timeFrame, setTimeFrame] = useState('1D');
    const [displayCandles, setDisplayCandles] = useState(false);

    const options = getOptions(displayCandles);
    const data = getData(displayCandles, timeFrame);

    return (
        <div className="w-full h-96, min-h-fit my-4 bg-white rounded-xl flex justify-center items-center flex-wrap font-bold p-8 drop-shadow">
            <h1 className='w-1/3 grow text-2xl'>ETH Price</h1>
            <GreenContainer className=''>
                <GreenSelectButton
                    selected={timeFrame === '1D'}
                    onClick={() => {
                        setTimeFrame('1D')
                    }}
                    className='min-w-[3.75rem] min-h-[2.25rem]'
                >
                    1D
                </GreenSelectButton>
                <GreenSelectButton
                    selected={timeFrame === '1W'}
                    onClick={() => {
                        setTimeFrame('1W')
                    }}
                    className='min-w-[3.75rem] min-h-[2.25rem]'
                >
                    1W
                </GreenSelectButton>
                <GreenSelectButton
                    selected={timeFrame === '1M'}
                    onClick={() => {
                        setTimeFrame('1M')
                    }}
                    className='min-w-[3.75rem] min-h-[2.25rem]'
                >
                    1M
                </GreenSelectButton>
                <GreenSelectButton
                    selected={timeFrame === '6M'}
                    onClick={() => {
                        setTimeFrame('6M')
                    }}
                    className='min-w-[3.75rem] min-h-[2.25rem]'
                >
                    6M
                </GreenSelectButton>
                <GreenSelectButton
                    selected={displayCandles}
                    onClick={() => {
                        setDisplayCandles(!displayCandles)
                    }}
                    className='min-w-[3.75rem] min-h-[2.25rem] mx-1 flex justify-center items-center'
                >
                    <Image src={candlestick_icon} width={30} height={30} alt='candlestick' />
                </GreenSelectButton>
            </GreenContainer>
            <div className='w-full h-6' />
            <div className='w-full'>
                {(typeof window !== undefined) &&
                    <ReactApexChart options={options} series={data} type={displayCandles ? 'candlestick' : 'line'} height={330} />
                }
            </div>
        </div >
    );
}



