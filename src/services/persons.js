import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addRecord = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const removeRecord = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updateNumber = (id, changedNumber) => {
    const request = axios.put(`${baseUrl}/${id}`, changedNumber)
    return request.then(response => response.data)
}
export default {getAll, addRecord, removeRecord, updateNumber}