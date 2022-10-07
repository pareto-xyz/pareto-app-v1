import { ethers } from "ethers";

export const signArbitraryMessage = async (signer: ethers.providers.JsonRpcSigner, message: string) => {
    try {
        return await signer.signMessage(message);
    }
    catch (e) {
        return 'message not signed' // replace with whatever value you want here
    }
}