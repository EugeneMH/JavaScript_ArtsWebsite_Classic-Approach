const postData = async (url, data) => {
    let response = await fetch(url, {
        method: 'POST',
        body: data
    });

    return await response.text();
};

const requestData = async (url) => {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Something went wrong at the url:${url}, status:${response.status}`);
    }

    return await response.json();
};

export {postData, requestData};