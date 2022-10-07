import type { NextPage } from 'next'
import { useState } from 'react'
import { AccountView } from '../../components/accountview'
import { BuyAsset } from '../../components/buyasset'
import { EthPrice } from '../../components/ethprice'
import { OptionSelector } from '../../components/optionselector'

import { ParetoContainer } from '../../components/container'
import { WalletContext } from '../../components/wallet'
import { PnLGraph } from '../../components/pnlgraph'


const Home: NextPage = () => {
    const [optionType, setOptionType] = useState('Buy Call');
    const [selectedStrikePrice, setSelectedStrikePrice] = useState(null as number | null);

    return (
        <ParetoContainer>
            <div className="w-full pl-24 mt-12">
                <h1 className="text-2xl font-bold text-left">Trade</h1>
            </div>
            <WalletContext.Consumer>
                {walletAddress => (
                    <div className='flex justify-evenly items-start content-around flex-wrap h-full min-h-fit max-w-full w-[1536px] p-4'>
                        <div className='flex justify-start items-start flex-col content-start max-w-[66%] w-[1536px]'>
                            <EthPrice />
                            <OptionSelector
                                optionType={optionType}
                                setOptionType={setOptionType}
                                selectedStrikePrice={selectedStrikePrice}
                                setSelectedStrikePrice={setSelectedStrikePrice}
                            />
                        </div>
                        <div className='flex justify-start items-start flex-col content-start w-1/4 text-purple'>
                            <BuyAsset walletAddress={walletAddress} optionType={optionType} selectedStrikePrice={selectedStrikePrice} />
                            <AccountView
                                walletAddress={walletAddress}
                            />
                            <PnLGraph
                                walletAddress={walletAddress}
                                optionType={optionType}
                                selectedStrikePrice={selectedStrikePrice}
                            />
                        </div>
                    </div>
                )}
            </WalletContext.Consumer>
        </ParetoContainer>
    )
}

export default Home
