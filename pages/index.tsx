import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import type { NextPage } from 'next'
import { useState } from 'react';
import { Web3Provider } from '@ethersproject/providers'
import { ParetoContainer } from '../components/container'
import { signArbitraryMessage } from '../components/utils/ethers';

const Home: NextPage = () => {
    const [message, setMessage] = useState('');
    const [signature, setSignature] = useState('');

    const { activate, deactivate, active, chainId, account, library } = useWeb3React<Web3Provider>();

    return (
        <ParetoContainer>
            <div className='w-full h-full flex flex-wrap justify-center items-center text-9xl font-bold'>
                <div className='w-full flex justify-center items-center mb-16'>
                    Welcome
                </div>
                {
                    active ?
                        <>
                            <textarea className='px-3 py-2 text-xl w-1/3 h-40 bg-slate-200 border rounded-xl mb-2' onChange={(e) => {
                                setMessage(e.target.value);
                            }} />
                            <div className='w-full flex justify-center items-center mb-6'>
                                <button
                                    className='w-60 h-32 flex text-5xl font-bold bg-slate-500 rounded-xl justify-center items-center'
                                    onClick={async () => {
                                        if (library !== undefined) {
                                            const signer = library?.getSigner()
                                            const signature = await signArbitraryMessage(signer, message);

                                            setSignature(signature);
                                        }
                                    }}>
                                    Sign Message
                                </button>
                            </div>
                            <div className='w-full flex justify-center items-start text-2xl '>
                                <div className='mr-2'>
                                    Signature:
                                </div>
                                <div className='w-3/4 break-all'>
                                    {signature}
                                </div>
                            </div>
                        </> :
                        <span className='mt-6 font-bold text-5xl'>connect wallet to test signing messages</span>
                }
            </div>
        </ParetoContainer >
    )
}

export default Home
