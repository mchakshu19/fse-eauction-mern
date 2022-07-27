// interface RequestParams {
//     url: string,
//     method?: string,
//     headers?: any,
//     data?: any,
// }

const sendRequest = ({
    url,
    method = 'GET',
    headers,
    data = null,
}) => {
    let requestOptions = {
        url: 'http://localhost:8080',
        method,
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }
    if (method !== 'GET')  {
        requestOptions = {
            ...requestOptions,
            body: JSON.stringify(data)
        };
    }
    return fetch(`http://localhost:8080${url}`, requestOptions)
    .then((res) => res.json())
    .then((res) => { console.log(res); return res; })
    .catch((err) => {
        console.log(err);
    });
}

export default sendRequest;