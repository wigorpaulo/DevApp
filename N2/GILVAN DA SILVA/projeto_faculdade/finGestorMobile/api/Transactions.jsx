import api from "./Api"

const getAll = async (user_id) => {
    return await
        api.get(`/transaction/search-userid/${user_id}`)
}

const register = async (data) => {
    return await
        api.post('/transaction/create', data)
}

const deleteItem = async (id) => {
    return await
        api.get(`/transaction/update/${id}`)
}

const getById = async (id) => {
    return await
        api.get(`/transaction/get-by-id/${id}`)
}

const edit = async (id, data) => {
    return await
        api.post(`/transaction/update-data/${id}`, data)
}

const searchByDescription = async (user_id, desc) => {
    return await
        api.get(`transaction/filter-by-description/${user_id}/${desc}`)
}

const filters = async (query) => {
    console.log(query)
    return await
        api.get(`values${query}`)
}

export default {
    getAll,
    register,
    deleteItem,
    searchByDescription,
    filters,
    getById,
    edit
}