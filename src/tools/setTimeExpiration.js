const setItemExpiration = (key, data, mins) => {
    const now = new Date();
    const item = {
        data: data,
        expiry: now.getTime() + mins * 60 * 1000,
    }

    localStorage.setItem(key, JSON.stringify(item))
}

export default setItemExpiration;