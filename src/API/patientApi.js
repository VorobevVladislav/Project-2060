import { $authHost } from "."


export const getPatientTherapies = async (patientId) => {
    try {
        const response = await $authHost.get(`/patient/${patientId}/therapy`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const therapies = response.data
        return therapies
    } catch (e) {
        console.error('Geting patient therapies failed:', e)
    }
}

export const connectUserToPatient = async (patientId) => {
    try {
        const response = await $authHost.get(`/patient/${patientId}/user`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const user = response.data
        return user
    } catch (e) {
        console.error('Connecting user to patient failed:', e)
    }
}

export const getPatientIllnessProfile = async (patientId) => {
   try {
        const response = await $authHost.get(`/patient/${patientId}/illness-profile`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const illnessProfile = response.data
        return illnessProfile
    } catch (e) {
        console.error('Geting patient illness profile failed:', e)
    }
}