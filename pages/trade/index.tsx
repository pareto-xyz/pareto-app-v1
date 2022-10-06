import type { NextPage } from 'next'
import { useState } from 'react'
import { AccountView } from '../../components/accountview'
import { BuyAsset } from '../../components/buyasset'
import { EthPrice } from '../../components/ethprice'
import { OptionSelector } from '../../components/optionselector'

import { ParetoContainer } from '../../components/container'
import { WalletContext } from '../../components/wallet'

const Home: NextPage = () => {
    const [optionType, setOptionType] = useState('Buy Call');
    const [selectedPrice, setSelectedPrice] = useState(null as string | null);

    return (
        <ParetoContainer>
            <WalletContext.Consumer>
                {walletAddress => (
                    <div className='flex justify-evenly items-start content-around flex-wrap h-full min-h-fit max-w-full w-[1536px] p-4'>
                        <div className='flex justify-start items-start flex-col content-start max-w-[66%] w-[1536px]'>
                            <EthPrice />
                            <OptionSelector
                                optionType={optionType}
                                setOptionType={setOptionType}
                                selectedPrice={selectedPrice}
                                setSelectedPrice={setSelectedPrice}
                            />
                        </div>
                        <div className='flex justify-start items-start flex-col content-start w-1/4 text-purple'>
                            <BuyAsset optionType={optionType} selectedOptionPrice={selectedPrice} />
                            <AccountView
                                walletAddress={walletAddress}
                            />
                        </div>
                    </div>
                )}
            </WalletContext.Consumer>
        </ParetoContainer>
    )
}

export default Home
