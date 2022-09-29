import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { AccountView } from '../components/accountview'
import { BuyAsset } from '../components/buyasset'
import { EthPrice } from '../components/ethprice'
import { OptionSelector } from '../components/optionselector'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [optionTransactionType, setOptionTransactionType] = useState('Buy Call')
  const [selected, setSelected] = useState(undefined as number | undefined);

  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-center'>
      <div className='flex justify-evenly items-center content-around flex-wrap h-full min-h-fit bg-slate-300 max-w-full w-[1536px]'>
        <EthPrice />
        <AccountView availableBalance={10} unrealizedPNL={102} totalMaintenenceMargin={2} totalInitialMargin={231} liquidationBuffer={41232} totalMarginAccountBalance={57734} />

        <OptionSelector
          optionTransactionType={optionTransactionType}
          setOptionTransactionType={setOptionTransactionType}
          selected={selected}
          setSelected={setSelected}
          options={{
            'Buy Put': [
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
            ],
            'Buy Call': [
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
            ],
            'Sell Put': [],
            'Sell Call': [],
          }}
        />

        <BuyAsset
          optionTransactionType={optionTransactionType}
          selected={selected}
          options={{
            'Buy Put': [
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
            ],
            'Buy Call': [
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
              {
                strikePrice: 100,
                breakEvenPrice: 1023,
                impliedVolitility: 102,
                price: 10,
                bid: 8,
                ask: 12,
                openInterest: 1023,
                delta: 2,
                vega: 231,
                gamma: 1232,
                theta: 123123,
                rho: 2302,
              },
            ],
            'Sell Put': [],
            'Sell Call': [],
          }}
        />
      </div>
    </div>
  )
}

export default Home
