import axios from "axios";

export default function () {
    const get = async (baseUrl) => {
        return await axios.get(baseUrl)
    }

    const post = async (baseUrl, data) => {
        await axios.post(baseUrl, data)
    }

    const put = async (baseUrl, data) => {
        await axios.put(baseUrl, data)
    }

    const remove = async (baseUrl) => {
        await axios.delete(baseUrl)
    }

    return { get, post, put, remove };
}