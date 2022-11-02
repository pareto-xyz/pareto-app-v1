import React from 'react';
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const options = {
    colors: ['#22c55e'],
    chart: {
        height: '90%',
        width: '100%',
        type: 'line' as 'line',
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
        width: 3,
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        enabled: false,
    }
};

const createData = (firstSegment: number, secondSegment: number) => {
    // return [-1, 0, 0]

    const data: [number, number][] = [];

    switch (firstSegment) {
        case 0:
            data.push([-1, 0])
            break
        case -1:
            data.push([-1, -1])
            break
        case 1:
            data.push([-1, 1])
            break
    }

    data.push([0, 0])

    switch (secondSegment) {
        case 0:
            data.push([1, 0])
            break
        case -1:
            data.push([1, -1])
            break
        case 1:
            data.push([1, 1])
            break
    }

    return [{
        name: 'PnL',
        data: data,
    }];

    // return {
    //     name: 'PnL',
    //     data: data.map(([x, y]) => {
    //         return {
    //             x,
    //             y,
    //         }
    //     }),
    // };
}

export const PnLGraphGraph: React.FC<{
    firstSegment: number,
    secondSegment: number,
    color: string,
}> = ({
    firstSegment,
    secondSegment,
    color,
}) => {
        const data = createData(firstSegment, secondSegment);

        return (
            <div className='w-full'>
                <ReactApexChart options={options} series={data} type={'line'} height={160} />
            </div>
        )
    }