const localGetItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export default localGetItem;