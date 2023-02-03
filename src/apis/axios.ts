import axios from "axios"

const axios_instance = new axios.Axios({
    baseURL: process.env.NEXT_PUBLIC_API_BASE
})

type PublishBody = {
    name: string,
    htmlString: string,
    components: string[]
}
const publish_site = (name: string, id: string[], htmlString: string) => {
    const body: PublishBody = {
        components: id,
        htmlString, name
    }
    return axios_instance.post("/publish", body)
}