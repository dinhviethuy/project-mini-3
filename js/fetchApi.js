export var fetchApi = async (url) => {
    const response = await fetch(url);
    return await response.json();
}
