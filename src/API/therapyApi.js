import { $authHost } from "."

export const createTherapy = async (therapy) => {
    try {
        const response = await $authHost.post('/therapy', therapy)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const newTherapy = response.data
        return newTherapy
    } catch (e) {
        console.error('Creating new therapy failed:', e)
    }
}

export const getAllTherapies = async () => {
    try {
        const response = await $authHost.get('/therapy')

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const therapies = response.data
        return therapies
    } catch (e) {
        console.error('Geting all therapies failed:', e)
    }
}

export const getOneTherapy = async (therapyId) => {
    try {
        const response = await $authHost.get(`/therapy/${therapyId}`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const therapy = response.data
        return therapy
    } catch (e) {
        console.error('Geting one therapy failed:', e)
    }
}

export const updateTherapy = async (therapyId, therapy) => {
    try {
        const response = await $authHost.put(`/therapy/${therapyId}`, therapy)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const newTherapy = response.data
        return newTherapy
    } catch (e) {
        console.error('Updating therapy failed:', e)
    }
}

export const deleteTherapy = async (therapyId) => {
    try {
        const response = await $authHost.delete(`/therapy/${therapyId}`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const deleted = response.statusText
        return deleted
    } catch (e) {
        console.error('Deleting therapy failed:', e)
    }
}