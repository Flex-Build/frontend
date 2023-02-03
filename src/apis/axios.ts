import axios from "axios"

type PublishBody = {
    name: string,
    htmlString: string,
    components: string[]
}
export const publish_site = (name: string, id: string[], htmlString: string) => {
    const body: PublishBody = {
        components: id,
        htmlString, name
    }

    return axios.post(process.env.NEXT_PUBLIC_API_BASE + "/publish", body)
}
