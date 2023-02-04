import { FlexBuild__factory } from "@/src/contracts";
import { FetchSignerResult } from "@wagmi/core";
import { BigNumber, BigNumberish, Signer } from "ethers";

export const buyComponents = async (ids: BigNumberish[], total: BigNumber, signer: FetchSignerResult<Signer>) => {

    if (!signer) {
        //TODO: error
        return;
    }

    const flexBuild = FlexBuild__factory.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
        "", signer)
    const tx = await flexBuild.buyComponents(ids, { value: total })
    return tx.wait()
}   