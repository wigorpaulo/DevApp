import api from "./Api"

const getAll = async () => {
    return await
        api.get('release/get-all')
}

const create = async (data) => {
    return await
        api.post(`release/create`, data)
}

export default {
    getAll,
    create
}