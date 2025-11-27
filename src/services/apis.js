import API from "./service"

export const getSummary = async () => {
    const res = await API.get("/financial/summary")
    return res?.data?.data
}
export const getWorkingCapital = async () => {
    const res = await API.get("/financial/working-capital")
    return res?.data?.data
}
export const getWallet = async () => {
    const res = await API.get("/financial/wallet")
    return res?.data?.data
}
export const getTransactionsResent = async () => {
    const res = await API.get("/financial/transactions/recent?limit=20")
    return res?.data?.data
}
export const getTransactionsScheduled = async () => {
    const res = await API.get("/financial/transfers/scheduled")
    return res?.data?.data
}

export const getProfile = async () => {
    const res = await API.get("/users/profile")
    return res?.data?.data
}

export const registerRequest = async (payload) => {
    const res = await API.post("/users/register", payload)
    return res?.data?.data
}
export const loginRequest = async (payload) => {
    const res = await API.post("/users/login", payload)
    return res?.data?.data
}
export const logoutRequest = async (payload) => {
    const res = await API.post("/users/logout", payload)
    return res?.data?.data
}
export const refreshTokenoken = async (payload) => {
    const res = await API.post("/users/refresh-token", payload)
    return res?.data?.data
}