import axios from "axios";
//local
const URL_PREFIX = "http://localhost:3001"
//delploy
// const URL_PREFIX = ""


const API = {
    // ~~~~~~~~~~~~~~~~~~~~~~~USER ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    signup: (usrData) => {
        return axios.post(`${URL_PREFIX}/api/user/signup`, usrData)
    },
    login: (usrData) => {
        return axios.post(`${URL_PREFIX}/api/user/login`, usrData)
    },
    findSelf: (tkn) => {
        return axios.get(`${URL_PREFIX}/api/user`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findUserById:(id)=>{
        return axios.get(`${URL_PREFIX}/api/user/id${id}`)
    },
    findUserByEmail:(email,tkn)=>{
        return axios.get(`${URL_PREFIX}/api/user/email${email}`,{headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    getProfile: (tkn) => {
        return axios.get(`${URL_PREFIX}/api/user/profile`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    update: (usrData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/user/update`, usrData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteUser: (tkn) => {
        return axios.delete(`${URL_PREFIX}/api/user`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },


}

export default API;