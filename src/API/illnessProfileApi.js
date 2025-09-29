import { $authHost } from "."

export const createIllnessProfile = async (illnessProfile) => {
    try {
        const response = await $authHost.post('/illness-profile', illnessProfile)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const newIllnessProfile = response.data
        return newIllnessProfile
    } catch (e) {
        console.error('Creating illness profile failed:', e)
    }
}

export const getAllIllnessProfiles = async () => {
    try {
        const response = await $authHost.get('/illness-profile')

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const illnessProfiles = response.data
        return illnessProfiles
    } catch (e) {
        console.error('Geting all illness profiles failed:', e)
    }
}

export const getOneIllnessProfiles = async (illnessProfileId) => {
    try {
        const response = await $authHost.get(`/illness-profile/${illnessProfileId}`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const illnessProfile = response.data
        return illnessProfile
    } catch (e) {
        console.error('Geting one illness profiles failed:', e)
    }
}

export const updateIllnessProfiles = async (illnessProfileId, illnessProfile) => {
    try {
        const response = await $authHost.put(`/illness-profile/${illnessProfileId}`, illnessProfile)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const newIllnessProfile = response.data
        return newIllnessProfile
    } catch (e) {
        console.error('Updating illness profiles failed:', e)
    }
}

export const deleteIllnessProfiles = async (illnessProfileId) => {
    try {
        const response = await $authHost.delete(`/illness-profile/${illnessProfileId}`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const deleted = response.statusText
        return deleted
    } catch (e) {
        console.error('Deleting illness profiles failed:', e)
    }
}