import testBase from "../config/testBase.service";

const path = `/public-api/users`
const UserID = localStorage.getItem('UserId')

const users = {
    POST: (data) => testBase.post(`${path}`, data),
    GET: () => testBase.get(`${path}/${UserID}`),
    GETALL: (params) => testBase.get(`${path}?${params}`),
    PUT: (data) => testBase.put(`${path}/${UserID}`, data),
    DELETE: () => testBase.delete(`${path}/${UserID}`)
}

export default users;