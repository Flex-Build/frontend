import { FlexBuild__factory } from "@/src/contracts";
import { FetchSignerResult } from "@wagmi/core";
import { Signer } from "ethers";

export const getComponents = async (signer: FetchSignerResult<Signer>) => {
    if (!signer) {
        //TODO: error
        return;
    }

    const flexBuild = FlexBuild__factory.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
        "", signer);
    const components = await flexBuild.getComponents();
    return components
}   