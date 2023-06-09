import Axios from "axios"


const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "8cd141e7-ead3-4755-810c-38babdead8ff" }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(resp => resp.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn("Obsolete method.Please profileAPI object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }


}


