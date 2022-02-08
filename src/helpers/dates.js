export const getFormatedDate = () => {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export const getTodayString = () => {
    const date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}