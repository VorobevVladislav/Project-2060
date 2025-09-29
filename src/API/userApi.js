import { jwtDecode } from "jwt-decode"
import { $host } from "."

const getToken = (response) => {
    if (response.data.code === "unauthorized" || response.data.code === "conflict") {
        throw new Error(response)
    }

    let token

    // Берем токен из заголовков
    const headerToken = response.headers.authorization.replace('Bearer ', '')

    // и, если есть, из тела ответа
    const bodyToken = response.data.access_token

    // Существует ли заголовок authorization и не получен токен из тела ответа
    if (headerToken && !bodyToken) {
        token = headerToken
    }

    else if (!headerToken && bodyToken) {
        token = bodyToken
    }

    if (!token) {
        throw new Error(response.data)
    }

    return token
}

export const registration = async (user) => {
    try {
        const response = await $host.post('/user/register', user)
        const token = getToken(response)
        localStorage.setItem('access_token', token)
        return jwtDecode(token)
    } catch (e) {
        console.error('Registration failed:', e)
    }
}


export const login = async (login, password) => {
    try {
        const response = await $host.post('/user/login', { login, password })
        const token = getToken(response)
        localStorage.setItem('access_token', token)
        return jwtDecode(token)
    } catch (e) {
        console.error('Login failed:', e)
    }
}


export const check = () => {

}