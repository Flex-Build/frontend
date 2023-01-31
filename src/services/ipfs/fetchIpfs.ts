// helper function to transform uri with this format: ipfs://
export async function fetchIpfs<T>(ipfsUrl: string, isString?: Boolean): Promise<T | undefined> {
    const url = ipfsToHttps(ipfsUrl)
    const fetchRes = await fetch(url);
    if (!ipfsUrl.startsWith("ipfs://")) return undefined
    try {
        if (isString) {
            const fetchText = await fetchRes.text();
            return fetchText as T
        }
        const fetchJson = await fetchRes.json();
        return fetchJson as T
    } catch (error) {
        console.log("error max");

        return undefined
    }
}
export function ipfsToHttps(ipfsUrl: string) {
    const ipfsPrefix = "https://nftstorage.link/ipfs/";
    const url = ipfsUrl.replace("ipfs://", ipfsPrefix);
    return url
}