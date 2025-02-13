import axios from "axios";

export default function () {
    const get = async (baseUrl) => {
        return await axios.get(baseUrl)
    }

    const post = async (baseUrl, data) => {
        return await axios.post(baseUrl, data)
    }

    const put = async (baseUrl, data) => {
        return await axios.put(baseUrl, data)
    }

    const patch = async (baseUrl, data) => {
        return await axios.patch(baseUrl, data)
    }

    const remove = async (baseUrl) => {
        return await axios.delete(baseUrl)
    }

    return { get, post, put, patch, remove };
}