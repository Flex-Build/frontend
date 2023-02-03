import { FlexBuild__factory } from "@/src/contracts";
import { FetchSignerResult } from "@wagmi/core";
import type { Provider } from "@ethersproject/providers";

export const getComponents = async (signer: Provider) => {
    if (!signer) {
        //TODO: error
        return;
    }

    const flexBuild = FlexBuild__factory.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
        "", signer);
    const components = await flexBuild.getComponents();
    return components
}   