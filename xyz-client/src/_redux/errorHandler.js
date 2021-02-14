export const handleError = async (response, callback) => {
    if (response.status === 404 || response.status === 500) {
        return response.data
    } else {
        return response.data
    }
}
