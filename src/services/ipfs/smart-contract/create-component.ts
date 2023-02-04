import { FlexBuild__factory } from "@/src/contracts";
import { FetchSignerResult } from "@wagmi/core";
import { BigNumberish, Signer } from "ethers";
import { nftStorageClient } from "../nftstorage";

export const createComponent = async (name: string, htmlString: string, price: BigNumberish, signer: FetchSignerResult<Signer>) => {

    if (!signer) {
        //TODO: error
        return;
    }

    const storeHtmlString = await nftStorageClient.storeBlob(new Blob([htmlString]))
    const flexBuild = FlexBuild__factory.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
        "", signer)
    const tx = await flexBuild.createComponent(storeHtmlString, price, name)
    return tx.wait()
}   