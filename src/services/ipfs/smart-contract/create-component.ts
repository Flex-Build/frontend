import { FlexBuild__factory } from "@/src/contracts";
import { FetchSignerResult } from "@wagmi/core";
import { Signer } from "ethers";
import { nftStorageClient } from "../nftstorage";

export const createComponent = async (htmlString: string, price: number, signer: FetchSignerResult<Signer>) => {

    if (!signer) {
        //TODO: error
        return;
    }

    const storeHtmlString = await nftStorageClient.storeBlob(new Blob([htmlString]))
    const flexBuild = FlexBuild__factory.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
        "", signer)
    const tx = await flexBuild.createComponent(storeHtmlString, price)
    return tx.wait()
}   