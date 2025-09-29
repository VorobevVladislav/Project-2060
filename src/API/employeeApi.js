import { $authHost } from "."

export const createEmployee = async (userId, postTitle) => {
    try {
        const response = await $authHost.post('/employee', { user_id: userId, post_title: postTitle })

        if (response.data.code === "unauthorized" ||
            response.data.code === "conflict" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const employee = response.data
        return employee
    } catch (e) {
        console.error('Creating employee failed:', e)
    }
}

export const connectUserToEmployee = async (employeeId) => {
    try {
        const response = await $authHost.get(`/employee/${id}/user`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const user = response.data
        return user
    } catch (e) {
        console.error('Connecting user to employee failed:', e)
    }
}

export const updateEmployeePostTitle = async (employeeId) => {
    try {
        const response = await $authHost.patch(`/employee/${id}/post`)

        if (response.data.code === "unauthorized" ||
            response.data.code === "not_found" ||
            response.data.code === "forbidden") {
            throw new Error(response)
        }

        const employee = response.data
        return employee
    } catch (e) {
        console.error('Updating employee pos title failed:', e)
    }
}