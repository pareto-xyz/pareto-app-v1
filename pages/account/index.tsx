import { NextPage } from "next"
import { AccountInfo } from "../../components/accountinfo"
import { ParetoContainer } from "../../components/container"
import { WalletContext } from "../../components/wallet"


const getAccountInfo = (walletAddress: string | null | undefined) => {
    return {
        accountEquity: 1,
        marginAccountBalance: 2,
        unrealizedPnL: 3,
        initialMargin: 4,
        maintenanceMargin: 5,
        liquidationBuffer: 6,
    }
}






const Home: NextPage = () => {
    return (
        <ParetoContainer>
            <div className='w-full flex justify-evenly content-around flex-wrap h-full min-h-fit  max-w-full'>
                <div className="w-full pl-24 mt-12">
                    <h1 className="text-2xl font-bold text-left">Account</h1>
                </div>
                <div className="w-full flex flex-col mt-16 px-16">
                    <div className="flex flex-row items-center text-center w-full text-gray-500">
                        <p className="basis-full">Asset</p>
                        <p className="basis-full">Account Equity</p>
                        <p className="basis-full">Margin Account Balance</p>
                        <p className="basis-full">Unrealized PnL</p>
                        <p className="basis-full">Initial Margin</p>
                        <p className="basis-full">Maintenance Margin</p>
                        <p className="basis-full">Liquidation Buffer</p>
                    </div>
                    <div className="flex flex-row items-center w-full font-bold justify-between shadow rounded-xl py-4 text-center mt-8 text-gray-500 bg-white">
                        <div className="basis-full">
                            <svg className="inline" width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.506348" width="33.9097" height="32" rx="12" fill="url(#paint0_linear_1_850)" />
                                <path d="M13.9982 6L13.864 6.45577V19.6801L13.9982 19.8139L20.1366 16.1855L13.9982 6Z" fill="#EEEFF2" />
                                <path d="M13.9982 6L7.85962 16.1855L13.9982 19.8139V13.3952V6Z" fill="white" />
                                <path d="M13.9982 20.9762L13.9226 21.0684V25.7791L13.9982 25.9998L20.1404 17.3495L13.9982 20.9762Z" fill="#EEEFF2" />
                                <path d="M13.9982 25.9998V20.9762L7.85962 17.3495L13.9982 25.9998Z" fill="white" />
                                <path d="M13.9983 19.8142L20.1367 16.1857L13.9983 13.3955V19.8142Z" fill="#D3D7E3" />
                                <path d="M7.85962 16.1857L13.9982 19.8142V13.3955L7.85962 16.1857Z" fill="#E9EDF8" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_850" x1="17.4612" y1="0" x2="17.4612" y2="32" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#687DE3" />
                                        <stop offset="1" stop-color="#9E96FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="basis-full inline ml-4">ETH</p>
                        </div>
                        <WalletContext.Consumer>
                            {
                                walletAddress => {
                                    const accountInfo = getAccountInfo(walletAddress);
                                    return (
                                        <>
                                            <p className="basis-full">${accountInfo.accountEquity}</p>
                                            <p className="basis-full">${accountInfo.marginAccountBalance}</p>
                                            <p className="basis-full">${accountInfo.unrealizedPnL}</p>
                                            <p className="basis-full">${accountInfo.initialMargin}</p>
                                            <p className="basis-full">${accountInfo.maintenanceMargin}</p>
                                            <p className="basis-full">${accountInfo.liquidationBuffer}</p>
                                        </>
                                    )
                                }
                            }
                        </WalletContext.Consumer>
                    </div>
                    <div className="w-full mt-5 justify-center items-center bg-green-200 h-12 flex rounded-xl">
                        <h2 className="text-xl font-bold align-middle text-green-900 m-auto">More Assets Coming Soon...</h2>
                    </div>
                    <WalletContext.Consumer>
                        {walletAddress => (
                            <AccountInfo walletAddress={walletAddress} />
                        )}
                    </WalletContext.Consumer>
                </div>

            </div>
        </ParetoContainer>
    )
}

export default Home