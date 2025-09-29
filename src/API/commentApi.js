import { $authHost } from "."

export const getTherapyComments = async (therapyId) => {
    try {
        const response = await $authHost.get(`/therapy/${therapyId}/comments`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const comments = response.data
        return comments
    } catch (e) {
        console.error('Geting therapy comments failed:', e)
    }
}

export const addCommentToTherapy = async (therapyId, comment) => {
    try {
        const response = await $authHost.post(`/therapy/${therapyId}/comments`, comment)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const newComment = response.data
        return newComment
    } catch (e) {
        console.error('Adding comment to therapy failed:', e)
    }
}