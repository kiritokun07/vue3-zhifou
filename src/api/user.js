import http from '../utils/http/http.js'

const login = (data) => {
    return http.post("/user/login", data)
}

const testLogin = (data) => {
    return http.post("/test/login", data)
}

const getUserList = (data) => {
    return http.get("/user/list", data)
}

export default {
    login, testLogin, getUserList
}


