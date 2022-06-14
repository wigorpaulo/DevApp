import api from "./Api"

const getUsers = async () => {
    return await
        api.get('users')
}

const getByEmailAndPassword = async (email, password) => {
    return await
        api.get(`user/search/${email}/${password}`)
}

const create = async (data) => {
    return await
        api.post('user/create', data)
}

export default {
    getUsers,
    getByEmailAndPassword,
    create
}